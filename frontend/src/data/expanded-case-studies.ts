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

// Define unique testimonials for each project
const uniqueTestimonials = [
  "I was skeptical at first, but Synvra's solution left me speechless. They built an AI system that could predict market trends with 98% accuracy. Our trading profits increased by 300% in just 3 months. Absolutely mind-blowing!",
  
  "What sets Synvra apart is their attention to detail. The security platform they developed caught a major breach attempt that our previous system would have missed. They literally saved us millions in potential damages.",
  
  "We had tried 4 different companies before Synvra. None could handle the scale we needed. Synvra's team not only solved our scaling issues but also cut our cloud costs by 70%. Their engineering talent is on another level.",
  
  "The machine learning pipeline Synvra built changed everything for us. It reduced our data processing time from 2 weeks to 30 minutes. I still remember the moment they showed us the first demo - our entire team was stunned.",
  
  "I've worked with many tech companies, but Synvra's approach is unique. They didn't just deliver a product; they became true partners in our success. The IoT solution they built now manages over 100,000 devices with zero downtime.",
  
  "Our legacy system was a nightmare, held together with duct tape and prayers. Synvra came in and rebuilt everything from scratch. Now we process 10x more transactions with 1/5th of the servers. Simply incredible.",
  
  "The level of innovation Synvra brought to our project was extraordinary. Their blockchain solution reduced settlement times from days to seconds. Our competitors are still trying to figure out how we did it.",
  
  "We had a crazy idea that everyone said was impossible. Synvra's team not only made it possible but delivered it under budget. Their AI-powered diagnostic tool is now saving lives in 12 countries.",
  
  "Synvra's team thinks differently. While other vendors proposed band-aid solutions, they rebuilt our entire data architecture. Now our real-time analytics platform handles 1 million queries per second without breaking a sweat.",
  
  "I was impressed by how quickly Synvra grasped our complex requirements. The automation system they developed eliminated 90% of our manual processes. Our efficiency gains were beyond what we thought possible.",
  
  "Working with Synvra was a game-changer for our startup. Their cloud-native platform scaled seamlessly from 100 to 1 million users. We couldn't have achieved our IPO without their technical excellence.",
  
  "Synvra's expertise in quantum computing is unmatched. They developed an optimization algorithm that solved in minutes what used to take weeks. It's not just a technological advancement; it's a paradigm shift.",
  
  "The mobile platform Synvra built handles $2 billion in transactions daily without a single point of failure. Their architecture and code quality set new standards in our industry.",
  
  "We came to Synvra with a complex supply chain problem. Their solution using AI and IoT sensors reduced inventory costs by 40% and eliminated stockouts completely. The ROI was evident within weeks.",
  
  "Synvra's team built a fraud detection system that's so accurate, several major banks have now adopted it. It's saving the industry billions while processing transactions in milliseconds.",
  
  "The natural language processing engine Synvra developed understands context better than anything we've seen. It's processing customer inquiries in 95 languages with human-level accuracy.",
  
  "Our previous vendor said real-time personalization at our scale was impossible. Synvra proved them wrong. Their system handles 50 million users with sub-10ms response times. Absolutely remarkable.",
  
  "Synvra's quantum-resistant encryption solution future-proofed our entire security infrastructure. Their foresight and technical capabilities are years ahead of the market.",
  
  "The autonomous system Synvra developed for our warehouses increased efficiency by 200% and eliminated picking errors completely. They transformed science fiction into reality.",
  
  "We needed a solution that could process satellite data in real-time. Synvra delivered a system that analyzes terabytes of data at the edge with minimal latency. Their engineering talent is extraordinary.",
  
  "Synvra's predictive maintenance system has prevented 23 major equipment failures in the first month alone. The cost savings and efficiency improvements exceeded our wildest expectations.",
  
  "The AR solution Synvra built revolutionized our training program. New technicians now achieve proficiency 75% faster. It's completely transformed how we operate.",
  
  "Our customers couldn't believe how intuitive the new interface was. Synvra's UX design and implementation reduced support tickets by 85% while increasing user engagement threefold.",
  
  "Synvra's distributed computing solution solved problems we thought would take years to crack. They delivered results in weeks that our internal team couldn't achieve in 18 months.",
  
  "The computer vision system Synvra developed can detect defects 50 times faster than human inspectors with 99.99% accuracy. It's revolutionized our quality control process.",
  
  "We were drowning in data before Synvra stepped in. Their analytics platform turns billions of data points into actionable insights in seconds. It's like having a crystal ball for our business.",
  
  "Synvra's team built a recommendation engine that increased our e-commerce conversion rates by 45%. The system pays for itself every 3 days. Simply outstanding.",
  
  "The automated trading system Synvra developed executes complex strategies in microseconds. Our returns have increased by 85% while reducing operational risks.",
  
  "Synvra's IoT platform manages our entire smart city infrastructure. It's handling millions of sensors and making real-time decisions that save energy and improve citizens' lives.",
  
  "The digital twin solution Synvra built simulates our entire manufacturing process with 99.9% accuracy. It's saved us millions in optimization and prevented countless production issues.",

  "I've never seen anything like Synvra's edge computing solution. It reduced our network latency by 90% and enabled real-time processing at thousands of remote locations.",

  "Synvra's team developed a voice recognition system that works flawlessly in noisy industrial environments. It's improved our worker safety and efficiency beyond measure.",

  "The robotic process automation solution from Synvra eliminated 150,000 hours of manual work annually. The accuracy and speed of execution are simply unmatched.",

  "Our competitors spent years trying to achieve what Synvra delivered in months. Their quantum computing solution solved optimization problems we thought were impossible.",

  "Synvra's blockchain platform handles cross-border settlements in seconds instead of days. They've revolutionized how we think about international transactions.",

  "The machine vision system Synvra built can inspect 1000 products per second with 99.999% accuracy. It's transformed our production line completely.",

  "We thought our AI requirements were too complex, but Synvra's team made it look easy. Their solution is now the backbone of our entire decision-making process.",

  "Synvra's cloud migration strategy was brilliant. They moved our entire infrastructure without any downtime and reduced our costs by 60%.",

  "The predictive analytics platform Synvra built has prevented millions in potential losses. It spots patterns that even our best analysts couldn't see.",

  "Our customer engagement skyrocketed after implementing Synvra's personalization engine. It's like having a personal shopper for each of our 10 million users.",

  "Synvra's quantum encryption solution is years ahead of anything else in the market. They've made our data truly future-proof.",

  "The autonomous vehicle guidance system Synvra developed operates with unprecedented precision. It's setting new standards in the industry.",

  "We never thought we could automate this process until Synvra showed us how. Their solution has eliminated human error while increasing throughput by 400%.",

  "Synvra's AI-powered legal document analysis system processes in hours what used to take weeks. The accuracy and efficiency gains are remarkable.",

  "The smart grid management system Synvra built has reduced our energy waste by 40%. It's both profitable and environmentally responsible.",

  "Our data scientists were amazed by Synvra's machine learning pipeline. It reduced model training time from weeks to hours while improving accuracy.",

  "Synvra's augmented reality solution has transformed how we design products. It's cut our development cycle in half and improved quality significantly.",

  "The natural language processing engine from Synvra understands customer intent better than human agents. Our satisfaction scores have never been higher.",

  "Synvra's distributed ledger solution has made our supply chain completely transparent. We can now track products from source to customer in real-time.",

  "The cybersecurity platform Synvra built has blocked over 1 million sophisticated attacks. It's like having an army of security experts working 24/7.",

  "We were amazed by how Synvra's team handled our complex data migration. Zero downtime, zero data loss, and they finished ahead of schedule.",

  "Synvra's predictive maintenance system has extended our equipment lifetime by 40%. The ROI was evident within the first month.",

  "The automated quality control system Synvra developed catches defects that human inspectors miss. Our return rate has dropped to near zero.",

  "Our competitors are still trying to figure out how we process orders so fast. Synvra's solution handles peak loads that would have crashed our old system.",

  "Synvra's AI-powered customer service platform resolves issues before customers even report them. It's literally changed how we think about support.",

  "The biometric authentication system Synvra built is both more secure and more convenient than anything we've used before. Our users love it.",

  "Synvra's real-time analytics platform processes billions of events daily with sub-second latency. It's given us insights we never thought possible.",

  "The automated compliance monitoring system from Synvra has saved us from several potential regulatory issues. It's like having an AI compliance officer.",

  "Synvra's quantum-resistant encryption has made our data secure against future threats. Their foresight in cybersecurity is unmatched.",

  "We thought real-time personalization at our scale was impossible until Synvra proved us wrong. The engagement metrics are off the charts.",

  "The autonomous inventory management system Synvra built has eliminated stockouts while reducing our inventory costs by 35%. Simply brilliant.",

  "Synvra's edge computing solution has reduced our cloud costs by 70% while improving performance. Their architecture is revolutionary.",

  "The machine learning models Synvra developed are so accurate, they're now the industry standard. Nobody else comes close to their expertise.",

  "Our entire industry has been transformed by Synvra's blockchain solution. They've eliminated intermediaries and reduced costs for everyone.",

  "The computer vision system from Synvra can detect subtle defects that even experienced inspectors miss. It's revolutionized our quality control."
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

  return {
    id: generateId(index),
    title: `${industry} ${projectType}`,
    industry,
    challenge: `Our client needed to transform their legacy ${industry.toLowerCase()} infrastructure to meet modern demands for scalability, performance, and real-time analytics.`,
    solution: `We developed a cutting-edge ${projectType.toLowerCase()} utilizing advanced technologies and best practices. The solution included real-time processing, AI-driven insights, and cloud-native architecture.`,
    results,
    testimonial: {
      quote: uniqueTestimonials[index % uniqueTestimonials.length],
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
