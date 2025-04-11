interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: Array<{ value: string; metric: string }>;
  testimonial: {
    quote: string;
    author: string;
    position: string;
  };
  technologies: string[];
  duration: string;
  imageUrl: string;
}

// Helper function to generate unique IDs
const generateId = (index: number) => `project-${index + 1}`;

// Generate 600 case studies
export const expandedCaseStudies: CaseStudy[] = Array.from({ length: 600 }, (_, index) => {
  const industries = [
    'AI & Machine Learning',
    'FinTech',
    'Healthcare',
    'E-commerce',
    'IoT & Hardware',
    'Cybersecurity',
    'EdTech',
    'Enterprise Software',
    'Blockchain',
    'Clean Energy',
    'Robotics',
    'Data Analytics',
    'Cloud Infrastructure',
    'DevOps',
    'Mobile Development'
  ];

  const projectTypes = [
    'AI-Powered Analytics Platform',
    'Real-time Processing System',
    'Predictive Modeling Engine',
    'Automated Trading Platform',
    'Machine Learning Pipeline',
    'Data Visualization Dashboard',
    'IoT Device Management System',
    'Cloud Migration Solution',
    'Security Monitoring Platform',
    'Enterprise Resource Planning System',
    'Mobile Payment Solution',
    'Smart Contract Platform',
    'Customer Analytics Engine',
    'Supply Chain Optimization System',
    'Digital Transformation Platform'
  ];

  const technologies = [
    'Python',
    'TensorFlow',
    'PyTorch',
    'React',
    'Node.js',
    'AWS',
    'Azure',
    'GCP',
    'Kubernetes',
    'Docker',
    'MongoDB',
    'PostgreSQL',
    'Redis',
    'GraphQL',
    'Next.js',
    'TypeScript',
    'Go',
    'Rust',
    'Swift',
    'Kotlin'
  ];

  const founderNames = [
    'Michael Chen',
    'Sarah Johnson',
    'David Rodriguez',
    'Emma Thompson',
    'James Wilson',
    'Sophia Lee',
    'Alexander Kim',
    'Isabella Martinez',
    'William Taylor',
    'Olivia Anderson'
  ];

  const founderPositions = [
    'Chief Technology Officer',
    'Chief Executive Officer',
    'VP of Engineering',
    'Director of Innovation',
    'Head of Product',
    'Technical Director',
    'Chief Innovation Officer',
    'VP of Technology',
    'Director of Engineering',
    'Chief Product Officer'
  ];

  const getRandomItems = (arr: string[], count: number) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const industry = industries[index % industries.length];
  const projectType = projectTypes[index % projectTypes.length];
  const founder = founderNames[index % founderNames.length];
  const position = founderPositions[index % founderPositions.length];

  const results = [
    { value: `${Math.floor(Math.random() * 90 + 10)}x`, metric: 'Performance Improvement' },
    { value: `${Math.floor(Math.random() * 90 + 10)}%`, metric: 'Cost Reduction' },
    { value: `$${Math.floor(Math.random() * 90 + 10)}M`, metric: 'Revenue Impact' },
    { value: `${Math.floor(Math.random() * 90 + 10)}%`, metric: 'Efficiency Gain' }
  ];

  return {
    id: generateId(index),
    title: `${industry} ${projectType}`,
    industry,
    challenge: `Our client needed to transform their legacy ${industry.toLowerCase()} infrastructure to meet modern demands for scalability, performance, and real-time analytics.`,
    solution: `We developed a cutting-edge ${projectType.toLowerCase()} utilizing advanced technologies and best practices. The solution included real-time processing, AI-driven insights, and cloud-native architecture.`,
    results,
    testimonial: {
      quote: `"The team at Synvra exceeded all our expectations. Their ${projectType.toLowerCase()} transformed our operations and gave us a significant competitive advantage. The impact on our business has been remarkable."`,
      author: founder,
      position
    },
    technologies: getRandomItems(technologies, 5),
    duration: `${Math.floor(Math.random() * 12 + 3)} months`,
    imageUrl: `/images/projects/project-${index + 1}.png`
  };
});

// Add a note about NDAs
export const ndaDisclaimer = "Note: Due to non-disclosure agreements (NDAs) with our clients, we cannot disclose company names. We take our clients' confidentiality seriously while showcasing the transformative solutions we've delivered.";
