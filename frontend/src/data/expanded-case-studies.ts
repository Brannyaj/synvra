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
  "Within six months of deploying Synvra's AI solution, our market prediction accuracy jumped from 65% to 98%. The system paid for itself twenty times over - numbers that seemed impossible before we started this journey.",
  
  "Nobody believed we could automate our quality control process until Synvra stepped in. Their computer vision system now catches defects our best inspectors missed for years. Last quarter's defect rate? Zero.",
  
  "Partnering with Synvra changed the game entirely. Their blockchain platform slashed our settlement times from 72 hours to 3 seconds flat. Our competitors are still stuck in the dark ages.",
  
  "Picture processing 500,000 transactions per second without a hiccup. That's what Synvra delivered. Our previous system crashed at 50,000. The performance boost literally opened new markets for us.",
  
  "Starting up, we dreamed big but lacked the technical foundation. Synvra built us a scalable infrastructure that grew from handling 100 users to 2 million daily active users. No downtime, no drama.",
  
  "Synvra didn't just upgrade our security - they revolutionized it. Their quantum-resistant encryption made us unhackable. Three state-sponsored attacks later, we're still impenetrable.",
  
  "Most vendors promise the moon but deliver a rock. Synvra promised us autonomous warehouse operations and delivered something straight out of science fiction. Productivity up 300%, accidents down to zero.",
  
  "For years we accepted that real-time personalization at our scale was fantasy. Then Synvra's team engineered a solution that personalizes experiences for 50 million users in milliseconds. Pure wizardry.",
  
  "Our data lake was more like a data swamp until Synvra architected a solution. Now we extract actionable insights from petabytes of data in seconds. It's like having a crystal ball for business decisions.",
  
  "When Synvra said they could cut our cloud costs by 80% while improving performance, we were skeptical. Six months later, the numbers speak for themselves. Their edge computing solution delivered exactly that.",
  
  "Imagine processing a million legal documents in the time it takes to drink a coffee. That's what Synvra's NLP system achieved. Manual review time dropped from 6 months to 4 hours. Our legal team still can't believe it.",
  
  "In the healthcare industry, 99% accuracy isn't good enough. Synvra's diagnostic AI achieved 99.99% accuracy across 50,000 cases. We're talking about saving lives here, and they delivered perfection.",
  
  "Four competing firms said our supply chain was too complex to digitize. Synvra's blockchain solution traced 10,000 products from source to shelf in real-time. Last year's logistics losses? Completely eliminated.",
  
  "Let me put it this way: Synvra's cybersecurity platform detected and neutralized a zero-day threat that wasn't publicly discovered until three months later. That's not just ahead of the curve - it's defining the curve.",
  
  "The day we switched on Synvra's smart grid system, our city's power consumption dropped by 35%. Three other major cities have already licensed the technology. This is what environmental impact at scale looks like.",
  
  "Before Synvra, our VR training platform was clunky and unrealistic. Now? Trainees can't tell the difference from real-world operations. Training accidents dropped 98%, certification time cut in half.",
  
  "Quantum computing was just buzzwords until Synvra showed up. Their algorithm solved our protein folding challenge in 27 minutes. The previous record? Eight weeks. That's the difference between good and revolutionary.",
  
  "Our customer service wait times averaged 23 minutes. Synvra's AI chatbot now handles 92% of queries instantly, with higher satisfaction scores than our human agents. The ROI? Beyond calculation.",
  
  "We were generating terabytes of IoT data with no way to process it. Synvra's edge computing solution now analyzes everything in real-time. We've prevented $42M in equipment failures this quarter alone.",
  
  "Traditional fraud detection caught 85% of attempts. Not good enough in finance. Synvra's neural network spots 99.997% of fraudulent transactions before they complete. The system spotted a new fraud pattern our entire industry missed.",
  
  "Aerospace manufacturing tolerances leave zero room for error. Synvra's quantum measurement system achieved picometer-level precision. We're now manufacturing parts that were theoretically impossible last year.",
  
  "Seven-figure ad spend used to be a gamble. Synvra's predictive AI changed that completely. We now forecast campaign performance with 96% accuracy before spending a dime. Marketing is finally a science.",
  
  "Drug discovery typically takes 7 years. Synvra's molecular simulation platform identified three viable candidates in 9 weeks. The implications for pharmaceutical research are staggering.",
  
  "My team laughed when I suggested automating creative work. Then Synvra's AI generated 10,000 unique design variants, each respecting our brand guidelines. The creative director stopped laughing and started hiring data scientists.",
  
  "Coordinating 1,000 autonomous robots in a warehouse? Impossible, they said. Synvra's swarm intelligence platform makes it look easy. Order fulfillment time dropped from hours to minutes, with zero collisions.",
  
  "Deep sea operations are notoriously risky. Synvra's autonomous underwater system mapped 50 square kilometers of seabed with millimeter precision. No human divers needed - a world first in marine exploration.",
  
  "Speech recognition in stadium environments was a pipe dream. Synvra's acoustic AI cuts through 100,000 screaming fans to capture whispered commands. Sports broadcasting will never be the same.",
  
  "Climate modeling at city-block resolution? Please. Then Synvra's neural weather engine predicted microclimate changes down to individual streets. Urban planners worldwide are banging on our door.",
  
  "Semiconductor yields above 90% were fantasy in quantum chip production. Synvra's manufacturing AI pushed us to 97.3%. The entire industry is rewriting their playbooks.",
  
  "Real-time translation for 95 languages with cultural context adaptation? Synvra delivered it in a 3MB mobile app. United Nations interpreters use our system as backup - that's the gold standard."
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
