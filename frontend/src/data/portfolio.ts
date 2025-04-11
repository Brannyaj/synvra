export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  link: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'financial-analytics',
    title: 'AI-Powered Financial Analytics Platform',
    client: 'Global Investment Bank',
    industry: 'Financial Services',
    challenge: 'Needed real-time analysis of market data and predictive insights for trading decisions',
    solution: 'Developed an AI-powered analytics platform using machine learning algorithms and real-time data processing',
    results: [
      'Increased trading accuracy by 35%',
      'Reduced analysis time by 60%',
      'Achieved 99.9% system uptime'
    ],
    technologies: ['Python', 'TensorFlow', 'Apache Kafka', 'AWS'],
    image: '/images/case-studies/financial-analytics.jpg',
    link: '/projects/trading'
  },
  {
    id: 'healthcare-platform',
    title: 'Telemedicine Platform',
    client: 'National Healthcare Provider',
    industry: 'Healthcare',
    challenge: 'Required secure, HIPAA-compliant telehealth solution during pandemic',
    solution: 'Built a comprehensive telemedicine platform with video consultations and electronic health records',
    results: [
      'Served 1M+ patients',
      'Reduced wait times by 75%',
      'Achieved 98% patient satisfaction'
    ],
    technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
    image: '/images/case-studies/healthcare-platform.jpg',
    link: '/projects/healthcare'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Algorithm Optimization',
    client: 'Research Institution',
    industry: 'Scientific Research',
    challenge: 'Needed to optimize quantum algorithms for practical applications',
    solution: 'Developed quantum software tools and optimization techniques',
    results: [
      'Improved algorithm efficiency by 40%',
      'Reduced error rates by 50%',
      'Published in leading journals'
    ],
    technologies: ['Qiskit', 'Python', 'Julia', 'CUDA'],
    image: '/images/case-studies/quantum-computing.jpg',
    link: '/projects/quantum'
  }
];
