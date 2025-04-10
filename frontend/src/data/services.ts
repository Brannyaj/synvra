import { ReactNode } from 'react';
import {
  CustomSoftwareIcon,
  MobileAppIcon,
  CloudSolutionsIcon,
  AIMLIcon,
  CybersecurityIcon,
  DataEngineeringIcon,
  BlockchainIcon,
  IoTIcon,
  ARVRIcon,
  DevOpsIcon,
} from '@/components/icons/ServiceIcons';

export interface CaseStudy {
  title: string;
  description: string;
  results: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: () => ReactNode;
  features: string[];
  technologies: string[];
  process: string[];
  caseStudies?: CaseStudy[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    icon: CustomSoftwareIcon,
    features: [
      'Enterprise Software Solutions',
      'Custom CRM & ERP Systems',
      'Legacy System Modernization',
      'API Development & Integration'
    ],
    technologies: [
      'React', 'Node.js', 'Python',
      'Java', 'PostgreSQL', 'MongoDB',
      'Docker', 'Kubernetes'
    ],
    process: [
      'Requirements Analysis',
      'Architecture Design',
      'Development',
      'Testing & QA'
    ],
    caseStudies: [
      {
        title: 'Enterprise Resource Planning System',
        description: 'Developed a custom ERP system for a manufacturing company, streamlining their operations and improving efficiency.',
        results: [
          '40% reduction in processing time',
          'Improved inventory accuracy by 95%',
          'Increased employee productivity by 30%'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Blockchain Development',
    description: 'Build secure and scalable blockchain solutions, from smart contracts to complete Web3 applications.',
    icon: BlockchainIcon,
    features: [
      'Smart Contract Development',
      'DeFi Applications',
      'NFT Platforms',
      'Crypto Wallet Integration'
    ],
    technologies: [
      'Solidity', 'Web3.js', 'Ethereum',
      'Hardhat', 'OpenZeppelin', 'IPFS',
      'MetaMask', 'Truffle'
    ],
    process: [
      'Security Assessment',
      'Smart Contract Design',
      'Development & Testing',
      'Audit & Deployment'
    ],
    caseStudies: [
      {
        title: 'DeFi Trading Platform',
        description: 'Developed a decentralized exchange with advanced trading features and liquidity pools.',
        results: [
          '$10M+ Total Value Locked (TVL)',
          '100K+ monthly active users',
          'Successfully audited by CertiK'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: MobileAppIcon,
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'Progressive Web Apps',
      'Mobile UI/UX Design'
    ],
    technologies: [
      'React Native', 'Flutter',
      'Swift', 'Kotlin',
      'Firebase', 'AWS Amplify'
    ],
    process: [
      'UI/UX Design',
      'Development',
      'Testing',
      'App Store Launch'
    ],
    caseStudies: [
      {
        title: 'E-commerce Mobile App',
        description: 'Built a cross-platform mobile app for a retail chain, enabling seamless shopping experiences.',
        results: [
          '200% increase in mobile sales',
          '4.8/5 average user rating',
          '50% reduction in cart abandonment'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'IoT Solutions',
    description: 'Connect and manage smart devices with secure, scalable IoT infrastructure and applications.',
    icon: IoTIcon,
    features: [
      'IoT Platform Development',
      'Device Management',
      'Real-time Analytics',
      'Edge Computing Solutions'
    ],
    technologies: [
      'AWS IoT', 'Azure IoT',
      'MQTT', 'Node-RED',
      'TensorFlow Lite', 'Docker'
    ],
    process: [
      'IoT Architecture Design',
      'Device Integration',
      'Platform Development',
      'Security Implementation'
    ],
    caseStudies: [
      {
        title: 'Smart Manufacturing System',
        description: 'Implemented an IoT solution for real-time monitoring and predictive maintenance in a manufacturing plant.',
        results: [
          '35% reduction in downtime',
          '25% energy cost savings',
          'Real-time monitoring of 1000+ sensors'
        ]
      }
    ]
  },
  {
    id: 5,
    title: 'AR/VR Development',
    description: 'Create immersive experiences with cutting-edge augmented and virtual reality technologies.',
    icon: ARVRIcon,
    features: [
      'AR/VR Applications',
      '3D Visualization',
      'Virtual Training',
      'Interactive Experiences'
    ],
    technologies: [
      'Unity', 'Unreal Engine',
      'ARKit', 'ARCore',
      'WebXR', 'Three.js'
    ],
    process: [
      '3D Modeling',
      'Experience Design',
      'Development',
      'Performance Optimization'
    ],
    caseStudies: [
      {
        title: 'Virtual Training Platform',
        description: 'Developed a VR-based training solution for a manufacturing company.',
        results: [
          '60% reduction in training time',
          '45% cost savings in training',
          '90% trainee satisfaction rate'
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services that optimize performance and security.',
    icon: CloudSolutionsIcon,
    features: [
      'Cloud Migration',
      'AWS & Azure Services',
      'Serverless Architecture',
      'Cloud-Native Development'
    ],
    technologies: [
      'AWS', 'Azure', 'Google Cloud',
      'Terraform', 'Docker', 'Kubernetes'
    ],
    process: [
      'Cloud Assessment',
      'Migration Planning',
      'Implementation',
      'Optimization'
    ],
    caseStudies: [
      {
        title: 'Cloud Migration Project',
        description: 'Successfully migrated a legacy system to AWS, improving scalability and reducing costs.',
        results: [
          '60% reduction in infrastructure costs',
          '99.99% uptime achieved',
          'Zero data loss during migration'
        ]
      }
    ]
  },
  {
    id: 7,
    title: 'DevOps & CI/CD',
    description: 'Streamline your development and deployment processes with modern DevOps practices.',
    icon: DevOpsIcon,
    features: [
      'CI/CD Pipeline Setup',
      'Infrastructure as Code',
      'Container Orchestration',
      'Monitoring & Logging'
    ],
    technologies: [
      'Jenkins', 'GitLab CI',
      'Terraform', 'Ansible',
      'Prometheus', 'ELK Stack'
    ],
    process: [
      'DevOps Assessment',
      'Pipeline Design',
      'Implementation',
      'Team Training'
    ],
    caseStudies: [
      {
        title: 'DevOps Transformation',
        description: 'Implemented complete DevOps pipeline for a fintech company.',
        results: [
          '80% faster deployment time',
          '65% reduction in bugs',
          '99.9% pipeline reliability'
        ]
      }
    ]
  },
  {
    id: 8,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage cutting-edge AI and ML technologies.',
    icon: AIMLIcon,
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Machine Learning Models'
    ],
    technologies: [
      'TensorFlow', 'PyTorch',
      'scikit-learn', 'OpenCV',
      'BERT', 'GPT'
    ],
    process: [
      'Data Collection',
      'Model Development',
      'Training & Testing',
      'Deployment'
    ],
    caseStudies: [
      {
        title: 'Predictive Maintenance System',
        description: 'Implemented an AI-powered system for predicting equipment failures in a manufacturing plant.',
        results: [
          '85% accuracy in failure prediction',
          '50% reduction in maintenance costs',
          '30% decrease in downtime'
        ]
      }
    ]
  },
  {
    id: 9,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: CybersecurityIcon,
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Solutions',
      'Security Architecture'
    ],
    technologies: [
      'SIEM Tools', 'WAF',
      'IDS/IPS', 'Zero Trust',
      'Encryption', 'PKI'
    ],
    process: [
      'Security Assessment',
      'Threat Modeling',
      'Implementation',
      'Monitoring'
    ],
    caseStudies: [
      {
        title: 'Enterprise Security Enhancement',
        description: 'Implemented comprehensive security measures for a financial institution.',
        results: [
          'Zero security breaches post-implementation',
          'Achieved SOC 2 compliance',
          '100% employee security training completion'
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'Data Engineering',
    description: 'Transform your data into actionable insights with advanced analytics.',
    icon: DataEngineeringIcon,
    features: [
      'Data Pipeline Development',
      'ETL Solutions',
      'Data Warehousing',
      'Real-time Analytics'
    ],
    technologies: [
      'Apache Spark', 'Kafka',
      'Airflow', 'Snowflake',
      'dbt', 'Tableau'
    ],
    process: [
      'Data Assessment',
      'Architecture Design',
      'Implementation',
      'Optimization'
    ],
    caseStudies: [
      {
        title: 'Data Pipeline Modernization',
        description: 'Rebuilt data infrastructure for a large e-commerce platform, enabling real-time analytics.',
        results: [
          '90% reduction in data processing time',
          'Real-time insights for 1M+ daily transactions',
          '100% data accuracy achieved'
        ]
      }
    ]
  }
];
