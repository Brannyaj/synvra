export interface CaseStudy {
  id: number;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  technologies: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  duration: string;
  imageUrl: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'financial-analytics',
    title: 'AI-Powered Financial Analytics Platform',
    client: 'Global Investment Bank',
    industry: 'Financial Services',
    imageUrl: '/images/projects/trading-platform.svg',
    challenge: 'Legacy systems were unable to process and analyze vast amounts of market data in real-time, causing delays in decision-making and missed opportunities.',
    solution: 'Developed a cutting-edge AI-powered analytics platform using deep learning models and real-time data processing. Implemented microservices architecture with cloud-native solutions for scalability.',
    results: [
      { value: '100x faster', metric: 'Data Processing Speed' },
      { value: 'Reduced by 80%', metric: 'Decision Making Time' },
      { value: '$15M annually', metric: 'Cost Savings' },
      { value: '99.99%', metric: 'System Accuracy' }
    ],
    testimonial: {
      quote: 'Synvra transformed our data analytics capabilities. We\'re now able to make informed decisions in real-time, giving us a significant competitive advantage.',
      author: 'Sarah Chen',
      position: 'Chief Technology Officer'
    },
    technologies: ['Python', 'TensorFlow', 'React', 'AWS Lambda', 'Apache Kafka'],
    duration: '8 months'
  },
  {
    id: 2,
    title: "Smart City Infrastructure Management",
    client: "Metropolitan Government",
    industry: "Public Sector",
    challenge: "Inefficient urban resource management leading to high operational costs and poor citizen services.",
    solution: "Implemented an IoT-based smart city platform with real-time monitoring and AI-driven predictive maintenance. Integrated multiple city services into a unified dashboard.",
    results: [
      { metric: "Energy Consumption", value: "Reduced by 35%" },
      { metric: "Maintenance Costs", value: "Reduced by 50%" },
      { metric: "Service Response Time", value: "Improved by 75%" },
      { metric: "Citizen Satisfaction", value: "Increased by 60%" }
    ],
    technologies: [
      "IoT Core",
      "Azure",
      "Node.js",
      "MongoDB",
      "React Native",
      "TensorFlow"
    ],
    testimonial: {
      quote: "The smart city solution has revolutionized how we manage urban services. The impact on both operational efficiency and citizen satisfaction has been remarkable.",
      author: "Michael Rodriguez",
      position: "City Innovation Director"
    },
    duration: "18 months",
    imageUrl: "/images/case-studies/smart-city.jpg"
  },
  {
    id: 3,
    title: "E-commerce Platform Transformation",
    client: "Leading Retail Chain",
    industry: "Retail",
    challenge: "Outdated e-commerce platform struggling with scalability during peak seasons and poor user experience.",
    solution: "Built a modern, cloud-native e-commerce platform with microservices architecture, real-time inventory management, and AI-powered recommendations.",
    results: [
      { metric: "Platform Performance", value: "10x faster" },
      { metric: "Sales Conversion", value: "Increased by 45%" },
      { metric: "Peak Load Handling", value: "5M concurrent users" },
      { metric: "Customer Satisfaction", value: "95% positive" }
    ],
    technologies: [
      "Next.js",
      "GraphQL",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Elasticsearch"
    ],
    testimonial: {
      quote: "The new platform has transformed our digital presence. We can now handle peak season traffic with ease, and our customers love the improved experience.",
      author: "Jennifer Park",
      position: "Digital Transformation Director"
    },
    duration: "12 months",
    imageUrl: "/images/case-studies/ecommerce-platform.jpg"
  }
];
