'use client';

import { useState, useEffect, useRef } from 'react';

// Add Crisp Chat TypeScript declarations
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
    Crisp: any;
  }
}

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
  crispSessionId: string | null;
}

const AUTOMATED_RESPONSES = {
  services: {
    keywords: ['services', 'what do you do', 'offerings', 'what services'],
    response: `We offer these services:

🌐 **Web Development** - Custom websites & web apps
📱 **Mobile Apps** - iOS & Android development  
☁️ **Cloud Infrastructure** - AWS/Azure/GCP solutions
🤖 **AI/Machine Learning** - Custom AI solutions
🔒 **Cybersecurity** - Security audits & protection
⛓️ **Blockchain** - Smart contracts & Web3

Which service interests you? Type "agent" to speak with our team!`
  },
  webDevelopment: {
    keywords: ['web development', 'website', 'web app'],
    response: `🌐 **Web Development Services:**

• Custom websites and web applications
• E-commerce platforms
• Progressive Web Apps (PWAs)
• API development and integration
• Database design and optimization

**What's Included:**
• Responsive design for all devices
• SEO optimization
• 3 months free support after launch
• Performance optimization

Ready to start your web project? Type "agent" to discuss your specific needs!`
  },
  mobileApps: {
    keywords: ['mobile apps', 'mobile', 'app development', 'ios', 'android'],
    response: `📱 **Mobile App Development:**

• Native iOS and Android apps
• Cross-platform development (React Native)
• App Store optimization
• Push notifications and analytics
• Backend integration

**What's Included:**
• App Store submission assistance
• User-friendly interface design
• 3 months support after launch
• Performance monitoring

Want to build your mobile app? Type "agent" to get started!`
  },
  cloudInfrastructure: {
    keywords: ['cloud infrastructure', 'cloud', 'aws', 'azure', 'devops'],
    response: `☁️ **Cloud Infrastructure Services:**

• Cloud migration and deployment
• AWS/Azure/GCP setup
• DevOps and CI/CD pipelines
• Scalable architecture design
• Monitoring and security

**What's Included:**
• 24/7 monitoring setup
• Security best practices
• Automated backups
• Ongoing technical support

Ready to move to the cloud? Type "agent" for a consultation!`
  },
  aiMachineLearning: {
    keywords: ['ai/machine learning', 'ai', 'machine learning', 'artificial intelligence'],
    response: `🤖 **AI/Machine Learning Solutions:**

• Custom AI model development
• Data analysis and insights
• Chatbots and virtual assistants
• Predictive analytics
• Computer vision solutions

**What's Included:**
• Model training and optimization
• Deployment and integration
• Documentation and training
• Ongoing model support

Interested in AI solutions? Type "agent" to explore possibilities!`
  },
  cybersecurity: {
    keywords: ['cybersecurity', 'security', 'penetration testing'],
    response: `🔒 **Cybersecurity Services:**

• Security audits and assessments
• Penetration testing
• Compliance consulting (GDPR, HIPAA)
• Security training and awareness
• Incident response planning

**What's Included:**
• Detailed security report
• Actionable recommendations
• Implementation guidance
• Follow-up assessments

Need security assessment? Type "agent" to protect your business!`
  },
  blockchain: {
    keywords: ['blockchain', 'smart contracts', 'cryptocurrency', 'web3'],
    response: `⛓️ **Blockchain Development:**

• Smart contract development
• DeFi applications
• NFT marketplaces
• Cryptocurrency solutions
• Web3 integration

**What's Included:**
• Security audit of smart contracts
• Deployment assistance
• Technical documentation
• Ongoing support

Ready for blockchain innovation? Type "agent" to discuss your project!`
  },
  pricing: {
    keywords: ['price', 'cost', 'how much', 'pricing', 'budget', 'pricing information'],
    response: `💰 **Custom Pricing Information:**

Our pricing is tailored to each project's specific requirements. To get an accurate quote, we need to understand:

• Project scope and complexity
• Timeline requirements
• Technical specifications
• Integration needs
• Support requirements

**Next Steps:**
1. Complete our detailed project proposal form
2. Schedule a consultation with our team
3. Receive a custom quote within 24 hours

Type "agent" to start the process and get your personalized pricing!`
  },
  timeline: {
    keywords: ['timeline', 'how long', 'duration', 'when', 'time', 'project timeline'],
    response: `⏱️ **Project Timelines:**

**Basic Projects:** 4-6 weeks
• Simple websites and web apps
• Basic mobile apps
• Small integrations

**Professional Projects:** 6-10 weeks
• Complex web applications
• Full-featured mobile apps
• Cloud migrations

**Enterprise Projects:** 8-12 weeks
• Large-scale systems
• AI/ML implementations
• Complex integrations

Want to discuss your specific timeline? Type "agent" for live chat!`
  },
  support: {
    keywords: ['support', 'maintenance', 'help after', 'ongoing'],
    response: `✅ **Support & Maintenance:**

**Included with every project:**
• 3 months free support after launch
• Bug fixes and minor updates
• Performance monitoring
• Security updates

**Ongoing Maintenance Options:**
• Regular updates and improvements
• 24/7 monitoring and support
• Priority technical assistance
• Custom maintenance plans available

Need more details about support? Type "agent" to speak with our team!`
  }
};

export default function CustomLiveChat() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    messages: [],
    userEmail: '',
    userName: '',
    waitingForAgent: false,
    agentJoined: false,
    crispSessionId: null,
  });

  const [currentMessage, setCurrentMessage] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showServiceButtons, setShowServiceButtons] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize Crisp Chat when component mounts
  useEffect(() => {
    // Check if the Crisp script has already been added
    if (window.Crisp) {
      return;
    }

    // Set Crisp Website ID
    window.CRISP_WEBSITE_ID = "2d92f298-8902-4c26-bd93-cfea1ca3cfcb";
    window.$crisp = [];

    // Load Crisp script
    const script = document.createElement('script');
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      // Wait for Crisp to fully load
      setTimeout(() => {
        if (window.Crisp) {
          // Hide the Crisp chatbox immediately and permanently
          window.Crisp.chat.hide();
          
          // Set up event listeners
          window.Crisp.message.onMessageReceived((message: any) => {
            console.log('Crisp message received:', message);
            
            // Only show agent messages (not user messages)
            if (message.from === 'operator') {
              addMessage({
                text: message.content,
                sender: 'agent',
                agentName: message.user?.nickname || 'Support Agent'
              });
              
              // Mark agent as joined if not already
              if (!chatState.agentJoined) {
                setChatState(prev => ({
                  ...prev,
                  agentJoined: true,
                  waitingForAgent: false
                }));
              }
            }
          });
          
          // Listen for chat session events
          window.Crisp.session.onLoaded(() => {
            console.log('Crisp session loaded');
            const sessionId = window.Crisp.session.getIdentifier();
            setChatState(prev => ({...prev, crispSessionId: sessionId}));
          });
        }
      }, 1000);
    };

    return () => {
      // Clean up the script when the component unmounts
      const crispScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (crispScript) {
        document.head.removeChild(crispScript);
      }
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatState.messages]);

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

  const showTypingIndicator = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // Random typing duration between 1.5-2.5 seconds
  };

  const addBotMessageWithTyping = (text: string, delay: number = 1500) => {
    showTypingIndicator();
    setTimeout(() => {
      addMessage({
        text: text,
        sender: 'bot'
      });
      // Show service buttons again after bot response (except when connecting to agent)
      if (!text.includes('connecting you with') && !text.includes('connect you with')) {
        setTimeout(() => {
          setShowServiceButtons(true);
        }, 500);
      }
    }, delay + Math.random() * 500); // Add some randomness to feel more natural
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
    // Check if Crisp is loaded
    if (!window.Crisp) {
      addMessage({
        text: "Chat system is still loading. Please try again in a moment.",
        sender: 'bot'
      });
      return;
    }

    setChatState(prev => ({ ...prev, waitingForAgent: true }));
    
    addMessage({
      text: "Connecting you with a live agent... Please wait a moment! 🔄",
      sender: 'bot'
    });
    
    try {
      // Set user info in Crisp
      if (chatState.userName && chatState.userEmail) {
        window.Crisp.user.setNickname(chatState.userName);
        window.Crisp.user.setEmail(chatState.userEmail);
      }
      
      // Send a message to start the conversation
      const initialMessage = `Hello! I'm ${chatState.userName || 'a visitor'} and I would like to speak with an agent. My email is ${chatState.userEmail || 'not provided'}.`;
      
      // Send message using Crisp API
      window.Crisp.message.send('text', initialMessage);
      
      // Add the message to local chat
      addMessage({
        text: initialMessage,
        sender: 'user'
      });
      
      // Add confirmation message
      setTimeout(() => {
        addMessage({
          text: "✅ Message sent to our support team! An agent will respond shortly. All messages will appear in this chat window.",
          sender: 'bot'
        });
        
        // Reset waiting state
        setChatState(prev => ({ ...prev, waitingForAgent: false }));
      }, 2000);
      
    } catch (error) {
      console.error('Error connecting to agent:', error);
      addMessage({
        text: "There was an issue connecting to an agent. Please try again or contact us at support@synvra.com",
        sender: 'bot'
      });
      setChatState(prev => ({ ...prev, waitingForAgent: false }));
    }
  };

  const sendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = currentMessage.trim();
    
    // Hide service buttons when user sends a message
    setShowServiceButtons(false);
    
    // Add user message locally
    addMessage({
      text: userMessage,
      sender: 'user'
    });

    // Clear input immediately
    setCurrentMessage('');

    // If Crisp is available and we have a session, send through Crisp
    if (window.Crisp && chatState.crispSessionId) {
      try {
        window.Crisp.message.send('text', userMessage);
        return; // Don't show automated responses when agent session is active
      } catch (error) {
        console.error('Error sending message through Crisp:', error);
        addMessage({
          text: "Message may not have been delivered to the agent. Please try again.",
          sender: 'bot'
        });
      }
    }

    // Check if user wants to speak with agent
    if (handleAgentRequest(userMessage)) {
      connectToAgent();
      return;
    }

    // Check for automated response
    const automatedResponse = getAutomatedResponse(userMessage);
    
    if (automatedResponse) {
      // Send automated response with typing indicator
      addBotMessageWithTyping(automatedResponse, 1500);
    } else {
      // No automated response, suggest agent with typing indicator
      addBotMessageWithTyping(
        "I'm not sure how to help with that. For more specific questions, type 'agent' to speak with one of our specialists, or ask about our services.",
        1200
      );
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formEmail.trim() && formName.trim()) {
      setChatState(prev => ({
        ...prev,
        userEmail: formEmail.trim(),
        userName: formName.trim()
      }));
      
      setShowEmailForm(false);
      
      // Welcome message
      addMessage({
        text: `Hi ${formName.trim()}! 👋`,
        sender: 'bot'
      });

      // Show typing and then service options
      setTimeout(() => {
        showTypingIndicator();
        setTimeout(() => {
          addMessage({
            text: `Welcome to Synvra. How can I assist you today?`,
            sender: 'bot'
          });
          // Show service buttons after welcome message
          setTimeout(() => {
            setShowServiceButtons(true);
          }, 500);
        }, 1500);
      }, 1000);
      
      // Clear form
      setFormName('');
      setFormEmail('');
    }
  };

  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Add file upload message
      addMessage({
        text: `📎 Uploaded: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`,
        sender: 'user'
      });

      // Bot response for file upload
      setTimeout(() => {
        addBotMessageWithTyping(
          `Thank you for uploading "${file.name}"! I've received your file. An agent will review it and get back to you shortly.\n\nIs there anything specific about this file you'd like to discuss? Type "agent" to speak with someone right away!`,
          1000
        );
      }, 500);

      // Reset file input
      event.target.value = '';
    }
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
      agentJoined: false,
      crispSessionId: null
    }));
    
    // Reset form and states
    setFormName('');
    setFormEmail('');
    setShowEmailForm(false);
    setShowServiceButtons(false);
  };

  const handleServiceButtonClick = (service: string) => {
    // Hide service buttons immediately
    setShowServiceButtons(false);
    
    // Special handling for agent connection
    if (service === 'agent') {
      // Connect to agent immediately
      connectToAgent();
      return;
    }
    
    // Add user message for regular services
    addMessage({
      text: service,
      sender: 'user'
    });

    // Get automated response and show it with typing indicator
    const automatedResponse = getAutomatedResponse(service);
    
    if (automatedResponse) {
      addBotMessageWithTyping(automatedResponse, 1500);
    } else {
      // Fallback response with typing indicator
      addBotMessageWithTyping(
        "I'd be happy to help! For more specific questions, type 'agent' to speak with one of our specialists.",
        1200
      );
    }
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
              
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="Your name"
                    className="w-full p-3 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-synvra-blue focus:border-transparent transition-all duration-200"
                    required
                    autoComplete="name"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full p-3 border border-gray-300 rounded-xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-synvra-blue focus:border-transparent transition-all duration-200"
                    required
                    autoComplete="email"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!formName.trim() || !formEmail.trim()}
                  className="w-full bg-gradient-to-r from-synvra-blue to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
            
            {/* Service Selection Buttons - Show after welcome message or after responses */}
            {showServiceButtons && !isTyping && !chatState.waitingForAgent && !chatState.agentJoined && (
              <div className="flex flex-col space-y-2 px-4 animate-in slide-in-from-bottom-2 duration-300">
                <div className="text-xs text-gray-500 mb-2 text-center">Choose a service to learn more:</div>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleServiceButtonClick('Web Development')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    🌐 Web Development
                  </button>
                  <button 
                    onClick={() => handleServiceButtonClick('Mobile Apps')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    📱 Mobile Apps
                  </button>
                  <button 
                    onClick={() => handleServiceButtonClick('Cloud Infrastructure')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    ☁️ Cloud Infrastructure
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleServiceButtonClick('AI/Machine Learning')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    🤖 AI/Machine Learning
                  </button>
                  <button 
                    onClick={() => handleServiceButtonClick('Cybersecurity')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    🔒 Cybersecurity
                  </button>
                  <button 
                    onClick={() => handleServiceButtonClick('Blockchain')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    ⛓️ Blockchain
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <button 
                    onClick={() => handleServiceButtonClick('Pricing Information')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    💰 Pricing Information
                  </button>
                  <button 
                    onClick={() => handleServiceButtonClick('Project Timeline')}
                    className="px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    ⏱️ Project Timeline
                  </button>
                  <button 
                    onClick={() => handleServiceButtonClick('agent')}
                    className="px-4 py-2 bg-green-50 border border-green-300 text-green-700 text-sm rounded-full hover:bg-green-100 transition-colors duration-200"
                  >
                    👨‍💼 Speak with Agent
                  </button>
                </div>
              </div>
            )}
            
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
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
                <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl-md p-4 shadow-sm max-w-[85%]">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.15s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                    </div>
                    <span className="text-sm text-gray-500 italic">Synvra Support is typing...</span>
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
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full p-3 pr-12 border border-gray-300 rounded-2xl text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-synvra-blue focus:border-transparent transition-all duration-200 resize-none"
                    onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                    disabled={isTyping}
                  />
                  {/* Hidden file input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.png,.jpg,.jpeg,.gif,.zip,.rar"
                  />
                  {/* Upload Icon */}
                  <button
                    onClick={handleFileUpload}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    aria-label="Upload file"
                    disabled={isTyping}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={sendMessage}
                  disabled={!currentMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-synvra-blue to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white p-3 rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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