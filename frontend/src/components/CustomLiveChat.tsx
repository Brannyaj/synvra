'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent' | 'bot';
  timestamp: Date;
  agentName?: string;
}

interface ChatState {
  isOpen: boolean;
  messages: Message[];
  userEmail: string;
  userName: string;
  waitingForAgent: boolean;
  agentJoined: boolean;
}

const AUTOMATED_RESPONSES = {
  services: {
    keywords: ['services', 'what do you do', 'offerings', 'what services'],
    response: `We offer these services:

🌐 **Web Development** - $5K-$15K
📱 **Mobile Apps** - $8K-$25K  
☁️ **Cloud Infrastructure** - $10K-$30K
🤖 **AI/Machine Learning** - $15K-$50K
🔒 **Cybersecurity** - $5K-$20K
⛓️ **Blockchain** - $12K-$40K

Which service interests you? Type "agent" to speak with our team!`
  },
  pricing: {
    keywords: ['price', 'cost', 'how much', 'pricing', 'budget'],
    response: `Our pricing packages:

💼 **Basic**: $5,000-$15,000 (4-6 weeks)
🚀 **Professional**: $15,000-$50,000 (6-10 weeks)
🏢 **Enterprise**: $50,000+ (8-12 weeks)

Ready for a custom quote? Type "agent" to chat with our team!`
  },
  timeline: {
    keywords: ['timeline', 'how long', 'duration', 'when', 'time'],
    response: `Project timelines:

⚡ **Basic projects**: 4-6 weeks
🔥 **Professional**: 6-10 weeks  
🏆 **Enterprise**: 8-12 weeks

Want to discuss your specific timeline? Type "agent" for live chat!`
  },
  support: {
    keywords: ['support', 'maintenance', 'help after', 'ongoing'],
    response: `We provide comprehensive support:

✅ **3 months free support** after launch
✅ **Ongoing maintenance** packages from $500/month
✅ **24/7 monitoring** and updates
✅ **Priority bug fixes** and improvements

Need more details? Type "agent" to speak with our team!`
  }
};

export default function CustomLiveChat() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    messages: [],
    userEmail: '',
    userName: '',
    waitingForAgent: false,
    agentJoined: false
  });

  const [currentMessage, setCurrentMessage] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

  // Poll for new messages when waiting for agent
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (chatState.waitingForAgent && chatState.userEmail) {
      interval = setInterval(async () => {
        try {
          const response = await fetch('/api/chat-socket', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'get-messages',
              userEmail: chatState.userEmail
            })
          });
          
          const data = await response.json();
          
          if (data.agentJoined && !chatState.agentJoined) {
            setChatState(prev => ({
              ...prev,
              agentJoined: true,
              waitingForAgent: false
            }));
            
            addMessage({
              text: `Hi! I'm ${data.agentName || 'Sarah'} from Synvra. I'm here to help with your project. What can I assist you with?`,
              sender: 'agent',
              agentName: data.agentName || 'Sarah'
            });
          }
        } catch (error) {
          console.error('Error polling for messages:', error);
        }
      }, 3000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [chatState.waitingForAgent, chatState.userEmail, chatState.agentJoined]);

  const addMessage = (message: Omit<Message, 'id' | 'timestamp'>) => {
    const newMessage: Message = {
      ...message,
      id: Date.now().toString(),
      timestamp: new Date()
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const getAutomatedResponse = (userMessage: string): string | null => {
    const message = userMessage.toLowerCase();
    
    for (const [key, config] of Object.entries(AUTOMATED_RESPONSES)) {
      if (config.keywords.some(keyword => message.includes(keyword))) {
        return config.response;
      }
    }
    
    return null;
  };

  const handleAgentRequest = (userMessage: string): boolean => {
    const message = userMessage.toLowerCase();
    const agentKeywords = ['agent', 'human', 'person', 'speak', 'talk', 'live'];
    return agentKeywords.some(keyword => message.includes(keyword));
  };

  const connectToAgent = async () => {
    setChatState(prev => ({ ...prev, waitingForAgent: true }));
    
    addMessage({
      text: 'Please wait while I connect you with one of our specialists... ⏳\n\nAn agent will be with you shortly!',
      sender: 'bot'
    });

    // Join chat session
    try {
      await fetch('/api/chat-socket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'join',
          userEmail: chatState.userEmail,
          userName: chatState.userName
        })
      });
    } catch (error) {
      console.error('Error joining chat:', error);
    }

    // Send notification to admin
    try {
      await fetch('/api/notify-admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: chatState.userEmail,
          userName: chatState.userName,
          message: 'User requested to speak with an agent'
        })
      });
    } catch (error) {
      console.error('Error notifying admin:', error);
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = currentMessage.trim();
    
    // Add user message
    addMessage({
      text: userMessage,
      sender: 'user'
    });

    // Send message to backend if agent is connected
    if (chatState.agentJoined) {
      try {
        await fetch('/api/chat-socket', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action: 'send-message',
            userEmail: chatState.userEmail,
            message: userMessage
          })
        });
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }

    // Check if user wants to speak with agent
    if (handleAgentRequest(userMessage)) {
      connectToAgent();
      setCurrentMessage('');
      return;
    }

    // Check for automated response
    const automatedResponse = getAutomatedResponse(userMessage);
    
    if (automatedResponse) {
      // Send automated response
      setTimeout(() => {
        addMessage({
          text: automatedResponse,
          sender: 'bot'
        });
      }, 1000);
    } else {
      // No automated response, suggest agent
      setTimeout(() => {
        addMessage({
          text: "I'd be happy to help! For more specific questions, type 'agent' to speak with one of our specialists, or ask about:\n\n• Our services\n• Pricing\n• Project timelines\n• Support options",
          sender: 'bot'
        });
      }, 1000);
    }

    setCurrentMessage('');
  };

  const handleEmailSubmit = (email: string, name: string) => {
    setChatState(prev => ({
      ...prev,
      userEmail: email,
      userName: name
    }));
    
    setShowEmailForm(false);
    
    addMessage({
      text: `Hi ${name}! How can I assist you today?`,
      sender: 'bot'
    });
  };

  const openChat = () => {
    setChatState(prev => ({ ...prev, isOpen: true }));
    
    if (!chatState.userEmail) {
      setShowEmailForm(true);
    }
  };

  const closeChat = () => {
    setChatState(prev => ({ 
      ...prev, 
      isOpen: false,
      messages: [], // Clear messages for fresh start
      waitingForAgent: false,
      agentJoined: false
    }));
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!chatState.isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 bg-synvra-blue hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 z-50 animate-pulse"
          aria-label="Open chat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat Window */}
      {chatState.isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-synvra-blue text-white p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-semibold">Synvra Support</span>
            </div>
            <button
              onClick={closeChat}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Email Form */}
          {showEmailForm && (
            <div className="p-4 border-b bg-gray-50">
              <h3 className="font-semibold text-gray-800 mb-3">Welcome to Synvra!</h3>
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const email = formData.get('email') as string;
                const name = formData.get('name') as string;
                if (email && name) {
                  handleEmailSubmit(email, name);
                }
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full p-2 border rounded mb-2 text-sm"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email"
                  className="w-full p-2 border rounded mb-3 text-sm"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-synvra-blue text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                >
                  Start Chat
                </button>
              </form>
            </div>
          )}

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chatState.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.sender === 'user'
                      ? 'bg-synvra-blue text-white'
                      : message.sender === 'agent'
                      ? 'bg-green-100 text-gray-800 border border-green-200'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.agentName && (
                    <div className="text-xs font-semibold mb-1 text-green-600">
                      {message.agentName}
                    </div>
                  )}
                  <div className="whitespace-pre-wrap">{message.text}</div>
                  <div className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {chatState.waitingForAgent && (
              <div className="flex justify-center">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-2 rounded-lg text-sm">
                  Connecting to agent... ⏳
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          {!showEmailForm && (
            <div className="p-4 border-t bg-gray-50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-synvra-blue"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  disabled={!currentMessage.trim()}
                  className="bg-synvra-blue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
} 