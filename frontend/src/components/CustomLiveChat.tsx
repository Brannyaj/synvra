'use client';

import { useEffect } from 'react';

// Add Crisp Chat TypeScript declarations
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
    Crisp: any;
  }
}

export default function CustomLiveChat() {
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
      console.log('Crisp chat loaded successfully');
      
      // Wait for Crisp to fully initialize
      const checkCrispReady = () => {
        if (window.Crisp && window.Crisp.chat && window.Crisp.session) {
          console.log('Crisp fully initialized');
          
          // Set company info
          window.Crisp.session.setData({
            company: 'Synvra',
            website: 'https://synvra.com'
          });
          
          // Configure chat behavior
          setupCrispCustomization();
          
        } else {
          // Check again in 100ms
          setTimeout(checkCrispReady, 100);
        }
      };
      
      // Start checking if Crisp is ready
      setTimeout(checkCrispReady, 500);
    };

    script.onerror = () => {
      console.error('Failed to load Crisp chat script');
    };

    return () => {
      // Clean up the script when the component unmounts
      const crispScript = document.querySelector('script[src="https://client.crisp.chat/l.js"]');
      if (crispScript) {
        document.head.removeChild(crispScript);
      }
    };
  }, []);

  const setupCrispCustomization = () => {
    // 1. Handle chat close to reset session
    window.Crisp.chat.onChatClosed(() => {
      console.log('Chat closed - resetting session');
      // Reset the session when chat is closed
      setTimeout(() => {
        window.Crisp.session.reset();
        // Clear any stored data
        localStorage.removeItem('crisp-session-data');
      }, 1000);
    });

    // 2. Handle chat open to show welcome message with FAQ
    window.Crisp.chat.onChatOpened(() => {
      console.log('Chat opened');
      
      // Check if this is a new session
      const hasShownWelcome = localStorage.getItem('crisp-welcome-shown');
      
      if (!hasShownWelcome) {
        // Send welcome message with FAQ options
        setTimeout(() => {
          const welcomeMessage = `👋 Welcome to Synvra! 

How can we help you today? Here are some quick answers:

🌐 **Web Development** - Custom websites & web apps
📱 **Mobile Apps** - iOS & Android development  
☁️ **Cloud Infrastructure** - AWS/Azure/GCP solutions
🤖 **AI/Machine Learning** - Custom AI solutions
🔒 **Cybersecurity** - Security audits & protection
⛓️ **Blockchain** - Smart contracts & Web3

💰 **Pricing** - Custom quotes based on your needs
⏱️ **Timeline** - Projects typically take 4-12 weeks
🎯 **Support** - 3 months free support included

---
**Need to speak with our team?** 
Just type "agent" or "human" to connect with a live specialist!

**Have a specific question?** 
Ask about any of our services above, or tell us about your project!`;

          window.Crisp.message.send('text', welcomeMessage);
          localStorage.setItem('crisp-welcome-shown', 'true');
        }, 1500);
      }
    });

    // 3. Handle incoming messages to provide automated responses
    window.Crisp.message.onMessageReceived((message: any) => {
      // Only process user messages, not agent messages
      if (message.from === 'user') {
        const userMessage = message.content.toLowerCase();
        console.log('User message received:', userMessage);
        
        // Check for agent request
        if (userMessage.includes('agent') || userMessage.includes('human') || userMessage.includes('speak') || userMessage.includes('live')) {
          setTimeout(() => {
            window.Crisp.message.send('text', `🔄 **Connecting you with our team...**

I'm notifying our specialists right now. Someone will respond shortly!

**While you wait:**
• Feel free to describe your project or question
• Share any relevant files or links
• Let us know your timeline and budget

Our team typically responds within a few minutes during business hours (9 AM - 6 PM EST).`);
          }, 1000);
          return;
        }

        // Automated responses for common questions
        const responses = getAutomatedResponse(userMessage);
        if (responses) {
          setTimeout(() => {
            window.Crisp.message.send('text', responses);
          }, 1500);
        }
      }
    });

    // 4. Customize chat appearance
    if (window.Crisp.chat.setHelpdeskView) {
      window.Crisp.chat.setHelpdeskView();
    }

    // 5. Set custom colors (optional)
    window.Crisp.chat.setColorTheme('blue');
  };

  const getAutomatedResponse = (userMessage: string): string | null => {
    // Web Development
    if (userMessage.includes('web') || userMessage.includes('website') || userMessage.includes('web app')) {
      return `🌐 **Web Development Services:**

• **Custom Websites** - Responsive, fast, SEO-optimized
• **Web Applications** - Complex business solutions
• **E-commerce Platforms** - Online stores with payment integration
• **Progressive Web Apps** - App-like web experiences
• **API Development** - Backend services and integrations

**What's Included:**
✅ Mobile-responsive design
✅ SEO optimization
✅ 3 months free support
✅ Performance optimization
✅ Security best practices

**Typical Timeline:** 4-8 weeks
**Starting Price:** Custom quote based on features

Want to discuss your specific web project? Type "agent" to speak with our team!`;
    }

    // Mobile Apps
    if (userMessage.includes('mobile') || userMessage.includes('app') || userMessage.includes('ios') || userMessage.includes('android')) {
      return `📱 **Mobile App Development:**

• **Native iOS & Android** - Platform-specific performance
• **Cross-Platform** - React Native for faster development
• **App Store Optimization** - Help with store listings
• **Push Notifications** - Keep users engaged
• **Backend Integration** - Connect to your systems

**What's Included:**
✅ UI/UX design
✅ App Store submission help
✅ 3 months support
✅ Performance monitoring
✅ Analytics integration

**Typical Timeline:** 6-10 weeks
**Starting Price:** Custom quote based on complexity

Ready to build your mobile app? Type "agent" to get started!`;
    }

    // Cloud Infrastructure
    if (userMessage.includes('cloud') || userMessage.includes('aws') || userMessage.includes('azure') || userMessage.includes('devops')) {
      return `☁️ **Cloud Infrastructure Services:**

• **Cloud Migration** - Move to AWS/Azure/GCP
• **DevOps Setup** - CI/CD pipelines and automation
• **Scalable Architecture** - Handle growth automatically
• **Security & Monitoring** - 24/7 protection
• **Cost Optimization** - Reduce cloud spending

**What's Included:**
✅ Infrastructure design
✅ Security implementation
✅ Monitoring setup
✅ Documentation & training
✅ Ongoing support

**Typical Timeline:** 4-6 weeks
**Benefits:** 30-50% cost savings, better performance

Need cloud consultation? Type "agent" to speak with our experts!`;
    }

    // AI/Machine Learning
    if (userMessage.includes('ai') || userMessage.includes('machine learning') || userMessage.includes('artificial intelligence') || userMessage.includes('chatbot')) {
      return `🤖 **AI/Machine Learning Solutions:**

• **Custom AI Models** - Tailored to your business needs
• **Chatbots & Virtual Assistants** - Automate customer service
• **Data Analysis & Insights** - Make data-driven decisions
• **Predictive Analytics** - Forecast trends and behavior
• **Computer Vision** - Image and video processing

**What's Included:**
✅ Model development & training
✅ Integration with your systems
✅ Performance optimization
✅ Documentation & training
✅ Ongoing model updates

**Typical Timeline:** 6-12 weeks
**ROI:** Often 200-500% within first year

Interested in AI solutions? Type "agent" to explore possibilities!`;
    }

    // Pricing
    if (userMessage.includes('price') || userMessage.includes('cost') || userMessage.includes('budget') || userMessage.includes('how much')) {
      return `💰 **Pricing Information:**

Our pricing is customized based on your specific needs:

**Factors that affect pricing:**
• Project complexity and scope
• Timeline requirements
• Technology stack needed
• Integration requirements
• Ongoing support needs

**Typical Price Ranges:**
• **Basic Websites:** $3,000 - $8,000
• **Web Applications:** $8,000 - $25,000
• **Mobile Apps:** $10,000 - $30,000
• **AI/ML Projects:** $15,000 - $50,000
• **Enterprise Solutions:** $25,000+

**What's Always Included:**
✅ 3 months free support
✅ Source code ownership
✅ Documentation
✅ Training sessions

Ready for a custom quote? Type "agent" to discuss your project!`;
    }

    // Timeline
    if (userMessage.includes('timeline') || userMessage.includes('how long') || userMessage.includes('duration') || userMessage.includes('when')) {
      return `⏱️ **Project Timelines:**

**Quick Projects (4-6 weeks):**
• Simple websites
• Basic mobile apps
• Small integrations

**Standard Projects (6-10 weeks):**
• Complex web applications
• Full-featured mobile apps
• Cloud migrations

**Enterprise Projects (8-16 weeks):**
• Large-scale systems
• AI/ML implementations
• Complex integrations

**Our Process:**
1. **Week 1:** Planning & design
2. **Weeks 2-N:** Development & testing
3. **Final Week:** Launch & training

**We provide:**
✅ Weekly progress updates
✅ Demo sessions
✅ Transparent communication

Want to discuss your specific timeline? Type "agent" for a consultation!`;
    }

    return null;
  };

  // Return null since we're using the native Crisp widget
  return null;
} 