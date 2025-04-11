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

// Define testimonial templates
const testimonialTemplates = [
  "Working with Synvra was transformative. Their {solution} revolutionized our workflow and delivered results beyond our wildest expectations. The ROI has been phenomenal.",
  "Synvra's expertise in developing our {solution} was outstanding. They didn't just meet our requirements - they redefined what we thought was possible.",
  "The innovation Synvra brought to our {solution} project was game-changing. Their team's dedication and technical excellence exceeded every benchmark we set.",
  "We were blown away by Synvra's delivery of our {solution}. Their understanding of our needs and ability to execute flawlessly set them apart from any other partner.",
  "The {solution} Synvra developed has become the cornerstone of our digital transformation. Their team's expertise and commitment to excellence is unmatched.",
  "Synvra's implementation of our {solution} was nothing short of extraordinary. They consistently went above and beyond, delivering exceptional value at every step.",
  "The impact of Synvra's {solution} on our business has been remarkable. Their innovative approach and technical prowess exceeded all expectations.",
  "Partnering with Synvra for our {solution} was the best decision we made. Their expertise and dedication transformed our vision into reality.",
  "Synvra's development of our {solution} set new standards in our industry. Their team's technical excellence and innovative thinking delivered exceptional results.",
  "The {solution} delivered by Synvra revolutionized our operations. Their ability to understand and execute on our vision was outstanding.",
  "We were impressed by how Synvra's {solution} transformed our business. Their technical expertise and commitment to quality is truly world-class.",
  "Synvra's implementation of our {solution} exceeded all expectations. Their innovative approach and attention to detail delivered remarkable results.",
  "The team at Synvra delivered a {solution} that transformed our entire operation. Their technical excellence and strategic insight were invaluable.",
  "Working with Synvra on our {solution} was exceptional. Their expertise and dedication to our success went far beyond our expectations.",
  "Synvra's development of our {solution} was outstanding. Their ability to innovate while delivering reliable solutions sets them apart."
];

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

  const getRandomTestimonial = (solution: string) => {
    // Create variations of each template to ensure we have enough unique testimonials
    const variations = testimonialTemplates.flatMap(template => [
      template,
      template.replace("exceeded", "surpassed"),
      template.replace("exceptional", "outstanding"),
      template.replace("remarkable", "incredible"),
      template.replace("transformed", "revolutionized")
    ]);
    
    // Get a pseudo-random testimonial based on the index
    const testimonialIndex = index % variations.length;
    const template = variations[testimonialIndex];
    
    // Replace the placeholder with the actual solution
    return template.replace("{solution}", solution.toLowerCase());
  };

  const testimonial = getRandomTestimonial(projectType);

  return {
    id: generateId(index),
    title: `${industry} ${projectType}`,
    industry,
    challenge: `Our client needed to transform their legacy ${industry.toLowerCase()} infrastructure to meet modern demands for scalability, performance, and real-time analytics.`,
    solution: `We developed a cutting-edge ${projectType.toLowerCase()} utilizing advanced technologies and best practices. The solution included real-time processing, AI-driven insights, and cloud-native architecture.`,
    results,
    testimonial: {
      quote: testimonial,
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
