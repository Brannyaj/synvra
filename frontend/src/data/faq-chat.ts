export interface ChatMessage {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'technical' | 'pricing';
}

export const faqMessages: ChatMessage[] = [
  {
    id: '1',
    category: 'general',
    question: 'What services does Synvra offer?',
    answer: 'Synvra offers a comprehensive range of software development services including custom software development, web and mobile app development, cloud solutions, AI/ML integration, and digital transformation consulting.'
  },
  {
    id: '2',
    category: 'general',
    question: 'How long has Synvra been in business?',
    answer: 'Synvra has been delivering innovative software solutions to clients worldwide for over 5 years, with a proven track record of successful projects across various industries.'
  },
  {
    id: '3',
    category: 'services',
    question: 'Do you provide ongoing maintenance and support?',
    answer: 'Yes, we offer comprehensive maintenance and support packages for all our solutions. This includes regular updates, security patches, performance monitoring, and 24/7 technical support.'
  },
  {
    id: '4',
    category: 'technical',
    question: 'What technologies do you work with?',
    answer: 'We work with a wide range of modern technologies including React, Next.js, Node.js, Python, AWS, Azure, and more. Our tech stack is constantly evolving to include the latest and most efficient tools for each project.'
  },
  {
    id: '5',
    category: 'pricing',
    question: 'How do you structure your pricing?',
    answer: 'Our pricing is transparent and flexible, based on project requirements. We offer both fixed-price and time-and-materials models. Contact us for a detailed quote tailored to your needs.'
  },
  {
    id: '6',
    category: 'services',
    question: 'Can you help with an existing project?',
    answer: 'Yes, we can join existing projects at any stage. Our team is experienced in analyzing existing codebases, providing improvements, and seamlessly integrating with your current development process.'
  },
  {
    id: '7',
    category: 'technical',
    question: 'How do you ensure security in your applications?',
    answer: 'We implement industry-standard security practices including encryption, secure authentication, regular security audits, and compliance with data protection regulations like GDPR and CCPA.'
  },
  {
    id: '8',
    category: 'general',
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope and complexity. Typically, small projects take 2-3 months, while larger projects may take 4-6 months or more. We provide detailed timelines during project planning.'
  }
];
