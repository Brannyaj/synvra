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
  const [isHovered, setIsHovered] = useState(false);
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
      {/* Enhanced Chat Widget Button */}
      {!chatState.isOpen && (
        <div className="fixed bottom-8 right-8 z-50">
          {/* Notification Badge */}
          <div className="absolute -top-2 -left-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
            !
          </div>
          
          {/* Hover Tooltip */}
          {isHovered && (
            <div className="absolute bottom-16 right-0 mb-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap transform transition-all duration-200 opacity-100">
              💬 Need help? Chat with us!
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
          
          {/* Main Chat Button */}
          <button
            onClick={openChat}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative bg-gradient-to-r from-synvra-blue to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Open live chat"
          >
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-30 animate-ping"></div>
            
            {/* Chat Icon */}
            <div className="relative z-10">
              <svg className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </button>
          
          {/* Floating Text */}
          <div className="absolute bottom-0 right-20 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium animate-bounce">
            Chat with us! 💬
            <div className="absolute top-1/2 -right-2 w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent border-l-white transform -translate-y-1/2"></div>
          </div>
        </div>
      )}

      {/* Enhanced Chat Window */}
      {chatState.isOpen && (
        <div className="fixed bottom-8 right-8 w-[420px] h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-4 duration-300">
          {/* Enhanced Header */}
          <div className="bg-gradient-to-r from-synvra-blue to-blue-600 text-white p-5 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            </div>
            
            <div className="relative z-10 flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Synvra Support</h3>
                  <p className="text-blue-100 text-sm">We're online • Usually replies instantly</p>
                </div>
              </div>
              <button
                onClick={closeChat}
                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
                aria-label="Close chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Enhanced Email Form */}
          {showEmailForm && (
            <div className="p-6 border-b bg-gradient-to-br from-blue-50 to-indigo-50">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-synvra-blue rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">Welcome to Synvra! 👋</h3>
                <p className="text-gray-600 text-sm">Start a conversation with our team</p>
              </div>
              
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                const email = formData.get('email') as string;
                const name = formData.get('name') as string;
                if (email && name) {
                  handleEmailSubmit(email, name);
                }
              }} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-synvra-blue focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-synvra-blue focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-synvra-blue to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Start Conversation 🚀
                </button>
              </form>
            </div>
          )}

          {/* Enhanced Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatState.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}
              >
                <div
                  className={`max-w-[85%] p-4 rounded-2xl text-sm shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-synvra-blue to-blue-600 text-white rounded-br-md'
                      : message.sender === 'agent'
                      ? 'bg-white text-gray-800 border border-green-200 rounded-bl-md shadow-md'
                      : 'bg-white text-gray-800 border border-gray-200 rounded-bl-md'
                  }`}
                >
                  {message.agentName && (
                    <div className="flex items-center text-xs font-semibold mb-2 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {message.agentName}
                    </div>
                  )}
                  <div className="whitespace-pre-wrap leading-relaxed">{message.text}</div>
                  <div className={`text-xs mt-2 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            
            {chatState.waitingForAgent && (
              <div className="flex justify-center animate-pulse">
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 px-4 py-3 rounded-2xl text-sm font-medium border border-yellow-200">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <span>Connecting to agent...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Enhanced Input Area */}
          {!showEmailForm && (
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-3 items-end">
                <div className="flex-1">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full p-3 border border-gray-300 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-synvra-blue focus:border-transparent transition-all duration-200 resize-none"
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                  />
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!currentMessage.trim()}
                  className="bg-gradient-to-r from-synvra-blue to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="flex flex-wrap gap-2 mt-3">
                <button 
                  onClick={() => setCurrentMessage('What services do you offer?')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors duration-200"
                >
                  🌐 Services
                </button>
                <button 
                  onClick={() => setCurrentMessage('What are your prices?')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors duration-200"
                >
                  💰 Pricing
                </button>
                <button 
                  onClick={() => setCurrentMessage('How long does a project take?')}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs rounded-full transition-colors duration-200"
                >
                  ⏱️ Timeline
                </button>
                <button 
                  onClick={() => setCurrentMessage('agent')}
                  className="px-3 py-1 bg-green-100 hover:bg-green-200 text-green-700 text-xs rounded-full transition-colors duration-200"
                >
                  👨‍💼 Talk to Agent
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
} 