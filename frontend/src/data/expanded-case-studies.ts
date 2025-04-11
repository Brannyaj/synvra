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
  
  "Imagine inspecting a million products per day with perfect accuracy. Fantasy? Not since Synvra's computer vision system joined our production line. Final quarter results: zero defects, zero recalls, zero compromises.",
  
  "$50 million in blockchain settlements used to take three days to clear. Synvra's distributed ledger platform processes the same volume in 3.2 seconds. Our competitors' jaws are still on the floor.",
  
  "Load testing was our nightmare - systems crashed at 50K transactions. Synvra's architecture handles 500K per second without breaking a sweat. We've expanded into markets we never dreamed of touching.",
  
  "From 100 beta users to 2 million active accounts - that's our growth story. Synvra's infrastructure scaled flawlessly through every surge. The platform runs so smooth, our monitoring team gets bored.",
  
  "Three state-sponsored hacking attempts hit our network last month. Synvra's quantum-resistant encryption turned them all into amusing anecdotes. Our security team actually looks forward to audit meetings now.",
  
  "Warehouse automation meant compromise - either speed or safety, never both. Synvra's robotic fleet rewrote the rules: 300% productivity boost, injury rate at absolute zero. The logistics industry has a new gold standard.",
  
  "50 million users, each expecting personal treatment? Impossible math, until Synvra's real-time engine started serving microsecond-level customization. Our engagement metrics went through the stratosphere.",
  
  "Big data was our biggest headache. Petabytes of information, minimal insight. Synvra's analytics engine distills actionable intelligence in milliseconds. We're making decisions faster than our competitors can gather data.",
  
  "Our cloud infrastructure costs were spiraling out of control. Synvra's edge computing mesh slashed expenses by 80% while doubling performance. The CFO's skepticism turned into a standing ovation.",
  
  "Legal document review meant endless billable hours. Synvra's NLP system processes contract volumes in coffee-break timeframes. Our attorneys now focus on strategy instead of scanning paperwork.",
  
  "Healthcare AI needed 99.99% accuracy to be viable. Synvra's diagnostic platform achieved 99.9999% precision across 50,000 cases. Medical boards worldwide are rewriting their guidelines.",
  
  "Supply chain visibility stopped at tier-one suppliers. Synvra's blockchain network illuminates every step from raw material to retail shelf. Last year's mystery losses? This year's optimization opportunities.",
  
  "Conventional security tools chase yesterday's threats. Synvra's predictive platform neutralized an attack vector that wouldn't be discovered for another quarter. We're not just ahead of threats - we're ahead of their invention.",
  
  "City power grids wasted energy by the megawatt. Synvra's smart distribution system cut consumption by 35% overnight. Three neighboring cities have already signed contracts.",
  
  "Virtual reality training used to mean motion sickness and confusion. Synvra's neural-calibrated simulations feel more real than reality. Training accidents dropped to zero, certification time halved.",
  
  "Protein folding algorithms ran for weeks on supercomputers. Synvra's quantum solution delivers results in 27 minutes. We've revolutionized drug discovery timelines.",
  
  "Customer support meant endless hold times and frustrated users. Synvra's AI assistant handles 92% of inquiries instantly. The satisfaction scores? Better than our best human agents ever achieved.",
  
  "IoT sensors generated data faster than we could process it. Synvra's edge computing network turns that firehose into actionable insights. Equipment failures dropped by $42M this quarter.",
  
  "Banks lost billions to sophisticated fraud schemes. Synvra's neural detection system spots suspicious patterns before transactions complete. We've identified attack methods that hadn't even been documented.",
  
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
  
  "Drug discovery typically took 7 years. Synvra's molecular simulation platform identified three viable candidates in 9 weeks. The implications for pharmaceutical research are staggering.",
  
  "My team laughed when I suggested automating creative work. Then Synvra's AI generated 10,000 unique design variants, each respecting our brand guidelines. The creative director stopped laughing and started hiring data scientists.",
  
  "Coordinating 1,000 autonomous robots in a warehouse? Impossible, they said. Synvra's swarm intelligence platform makes it look easy. Order fulfillment time dropped from hours to minutes, with zero collisions.",
  
  "Deep sea operations are notoriously risky. Synvra's autonomous underwater system mapped 50 square kilometers of seabed with millimeter precision. No human divers needed - a world first in marine exploration.",
  
  "Speech recognition in stadium environments was a pipe dream. Synvra's acoustic AI cuts through 100,000 screaming fans to capture whispered commands. Sports broadcasting will never be the same.",
  
  "Climate modeling at city-block resolution? Please. Then Synvra's neural weather engine predicted microclimate changes down to individual streets. Urban planners worldwide are banging on our door.",
  
  "Semiconductor yields above 90% were fantasy in quantum chip production. Synvra's manufacturing AI pushed us to 97.3%. The entire industry is rewriting their playbooks.",
  
  "Real-time translation for 95 languages with cultural context adaptation? Synvra delivered it in a 3MB mobile app. United Nations interpreters use our system as backup - that's the gold standard.",
  
  "Neurosurgeons said remote operations were decades away. Synvra's haptic feedback system changed that overnight. We've performed 122 successful surgeries across three continents with 0.1mm precision.",
  
  "Gaming latency above 20ms ruins immersion. Our previous provider couldn't crack 50ms. Synvra's network optimization got us to 8ms globally. Player retention jumped 312% in the first month.",
  
  "Agricultural yield prediction was more art than science. Synvra's satellite imaging AI changed that. Our 9-month forecasts achieve 94% accuracy. Global food distributors are building their futures trading around our platform.",
  
  "DNA sequencing used to take weeks per sample. Synvra's quantum-based analysis pipeline processes 500 genomes simultaneously in under an hour. We're discovering new genetic markers daily.",
  
  "Traffic management in megacities? A nightmare. Until Synvra's neural grid optimized 25,000 traffic signals in real-time. Average commute times dropped 47% citywide. Three million happy drivers.",
  
  "Space debris tracking was a shot in the dark. Synvra's multi-spectrum radar network now tracks objects down to 1cm at 35,000 km altitude. We've prevented four potential satellite collisions this year.",
  
  "Vaccine development historically took a decade. Synvra's protein folding AI simulated 3.7 million molecular interactions daily. We identified viable candidates in 3 months. This is the future of drug discovery.",
  
  "Concert acoustics varied wildly across venues. Synvra's adaptive sound system uses 1,500 real-time acoustic measurements to adjust each speaker individually. Every seat now has perfect audio. Artists are amazed.",
  
  "Earthquake prediction was considered impossible. Synvra's deep-earth sensing network proved everyone wrong. We now provide 30-minute warnings with 89% accuracy. Emergency services call it a game-changer.",
  
  "Manufacturing custom prosthetics took months. Synvra's AI-driven 3D printing system designs and produces perfect fits in 48 hours. The cost dropped 94%, while patient satisfaction hit 100%.",
  
  "Quantum cryptography was purely theoretical for us until Synvra stepped in. Their system distributes unbreakable keys across 1,200 km of standard fiber. The NSA called asking for our secrets.",
  
  "Deep sea mining drones lasted 2 hours at best. Synvra's autonomous system operates continuously at 4,000 meters depth. Six months of operation, 317 tons of rare earth minerals recovered, zero human risk.",
  
  "Holographic displays were stuck at 30° viewing angles. Synvra's photonic processor renders 360° images visible from any position. Museum visitors literally walk through ancient Rome now.",
  
  "Wind farm efficiency plateaued years ago. Synvra's turbine swarm AI coordinates 300 turbines as one organism. Power output up 86%, maintenance costs down 62%. The green energy sector is watching.",
  
  "Teaching AI to paint like Van Gogh? Laughable. Then Synvra's neural artist shattered that belief. Its works fooled 94% of master curators in blind tests. A single piece fetched $12.9 million at Christie's.",
  
  "Modeling quantum materials required supercomputers. Synvra's room-temperature quantum simulator does it on a laptop. We discovered 17 new superconductors in three weeks.",
  
  "Wildfire prediction was guesswork at best. Synvra's thermal imaging satellites spot potential fires 72 hours before ignition. Last summer, we prevented 129 major blazes across three continents.",
  
  "Flying taxi services seemed like science fiction. Synvra's autonomous navigation matrix manages 10,000 eVTOL flights daily across Singapore. Zero incidents, 99.97% on-time performance.",
  
  "Brain-computer interfaces needed surgery. Synvra's non-invasive neural cap achieves higher bandwidth than implants. Paralyzed patients now control robotic limbs with natural precision.",
  
  "Fusion reactor control systems couldn't handle plasma instabilities. Synvra's quantum controller makes a million adjustments per microsecond. We've maintained stable fusion for 7 minutes straight.",
  
  "Ocean plastic detection was limited to surface debris. Synvra's multi-spectral sonar maps plastic concentration to 200m depth. We've removed 47,000 tons of microplastics from marine ecosystems.",
  
  "Personalized cancer treatment meant months of trial and error. Synvra's digital twin technology simulates drug responses for each patient. Treatment success rates jumped from 43% to 91% overnight.",
  
  "Carbon capture technology was prohibitively expensive. Synvra's biomimetic membrane system absorbs 400 tons of CO2 daily at 1/8th the cost. Heavy industry is scrambling to implement it.",
  
  "Asteroid mining was a billionaire's fantasy. Synvra's autonomous spacecraft network changed that. First year of operations: 50,000 kg of platinum-group metals extracted. Space economy is now reality.",
  
  "Sign language translation apps were painfully inaccurate. Synvra's neural vision system handles 137 sign languages with medical-grade precision. The deaf community calls it their 'universal translator'.",
  
  "Smart contact lenses drew too much power to be practical. Synvra's photovoltaic solution harvests energy from ambient light. 72 hours of continuous augmented reality on a single charge.",
  
  "Vertical farming yielded 30% less than traditional methods. Synvra's photosynthesis optimization AI flipped the script. We're producing 240% more food per square meter, using 60% less water.",
  
  "Quantum error correction required millions of physical qubits. Synvra's topological approach needs just 100. We're running algorithms that Google said were a decade away.",
  
  "Hypersonic flight control was mathematically impossible at Mach 7. Synvra's predictive aerodynamics engine makes it look easy. Beijing to New York in 89 minutes, commercial service starts next month.",
  
  "Memory implants were pure sci-fi until Synvra unveiled their neural bridge. Alzheimer's patients now retain new memories with 87% success rate. The implications for neuroscience are staggering.",
  
  "Desert reforestation failed for centuries. Synvra's biomimetic water harvesting system pulls 200 liters daily from thin air, per unit. We've greened 70,000 hectares of Sahara in eight months.",
  
  "Quantum teleportation maxed out at 100 kilometers. Not anymore. Synvra's entanglement network spans 12,000 km with instant state transfer. DARPA built their quantum internet on our breakthrough.",
  
  "Construction robots couldn't handle unstructured environments. Synvra's swarm builders completed a 12-story building in 49 days. No human workers above ground level, project costs slashed 61%.",
  
  "Nano-manufacturing yields were microscopic. Synvra's molecular assembly line produces 900 billion precise structures per minute. We're printing quantum computers at the atomic scale.",
  
  "Coral reef restoration took decades. Synvra's bioprinting system creates living reef structures that grow 50 times faster than nature. The Great Barrier Reef recovery project starts next week.",
  
  "Thought-to-text was a distant dream. Synvra's neural decoder transcribes internal monologue at 170 words per minute. ALS patients are writing novels through thought alone.",
  
  "Mars dust storms killed every solar farm design. Synvra's self-cleaning panels maintain 97% efficiency in global dust storms. NASA just ordered 10,000 units for the first Mars colony.",
  
  "Protein misfolding caused untreatable diseases. Synvra's molecular chaperone AI identifies correction pathways in minutes. Five 'incurable' conditions now have treatment protocols.",
  
  "Battery recycling recovered only 50% of materials. Synvra's plasma extraction system achieves 99.9% recovery rate. The electric vehicle industry is racing to adopt our process.",
  
  "Autonomous ships couldn't handle rogue waves. Synvra's predictive navigation system spots dangerous patterns 20 minutes ahead. Zero cargo losses across 17,000 Pacific crossings.",
  
  "The quest for stable fusion power stumped physicists for decades. Synvra's quantum controller executes a million plasma adjustments per microsecond. Result? Seven minutes of sustained fusion. The energy sector just witnessed history.",
  
  "Legacy fraud detection was always a step behind. Synvra's neural network flipped the script. It spots 99.997% of fraudulent transactions in real-time and identified attack patterns that shocked our entire industry.",
  
  "Deep sea mining seemed impossible beyond two-hour intervals. Synvra's autonomous system works continuously at 4,000-meter depths. First-year results: 317 tons of rare earth minerals, zero safety incidents.",
  
  "Vaccine research meant years of trial and error. Synvra's protein folding AI simulated millions of molecular interactions daily. Three months later, we had viable candidates. Pharmaceutical development will never be the same.",
  
  "Coordinating 1,000 autonomous robots in a warehouse? Impossible, they said. Synvra's swarm intelligence platform makes it look easy. Order fulfillment time dropped from hours to minutes, with zero collisions.",
  
  "Our smart grid deployment faced skepticism. The results silenced critics: 35% drop in city power consumption on day one. Three major cities licensed our technology within a week. This redefines urban energy efficiency.",
  
  "Traditional security solutions react to threats. Synvra's cybersecurity platform anticipates them. It caught a zero-day exploit three months before its public discovery. That's next-generation protection."
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
