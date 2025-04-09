'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ServiceModal from './ServiceModal';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import type { ReactElement } from 'react';
import { trackServiceClick } from '@/utils/analytics';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactElement;
  features: string[];
  detailedInfo: {
    overview: string;
    benefits: string[];
    technologies: string[];
    process: string[];
    deliverables: string[];
  };
}

const services: Service[] = [
  {
    id: 1,
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed to meet your specific business needs.',
    icon: <CodeBracketIcon className="h-6 w-6" />,
    features: [
      'Enterprise Software Solutions',
      'Custom CRM & ERP Systems',
      'Legacy System Modernization',
      'API Development & Integration'
    ],
    detailedInfo: {
      overview: 'Our custom software development service delivers tailor-made solutions that align perfectly with your business objectives.',
      benefits: [
        'Increased operational efficiency',
        'Reduced costs through automation',
        'Improved customer satisfaction',
        'Better data management'
      ],
      technologies: [
        'Modern JavaScript frameworks',
        'Cloud-native architecture',
        'Microservices',
        'Containerization'
      ],
      process: [
        'Requirements analysis',
        'Architecture design',
        'Agile development',
        'Testing and QA',
        'Deployment and maintenance'
      ],
      deliverables: [
        'Source code and documentation',
        'User manuals and training',
        'Regular updates and maintenance',
        'Technical support'
      ]
    }
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    features: [
      'iOS & Android Development',
      'Cross-platform Solutions',
      'Progressive Web Apps',
      'Mobile UI/UX Design'
    ],
    detailedInfo: {
      overview: 'Our mobile app development service creates engaging, high-performance applications for iOS and Android platforms. We focus on delivering intuitive user experiences while ensuring robust functionality and security.',
      benefits: [
        'Reach users on their preferred platform',
        'Consistent brand experience',
        'Offline functionality',
        'Push notification capabilities',
        'Integration with device features',
        'Regular updates and maintenance'
      ],
      technologies: [
        'React Native', 'Flutter', 'Swift', 'Kotlin',
        'Firebase', 'AWS Amplify', 'GraphQL', 'REST APIs'
      ],
      process: [
        'Market Research and User Analysis',
        'UI/UX Design and Prototyping',
        'Native/Cross-platform Development',
        'Testing and Quality Assurance',
        'App Store Deployment'
      ],
      deliverables: [
        'Native/Cross-platform application',
        'Source code and documentation',
        'UI/UX design assets',
        'API documentation',
        'App store listings',
        'Analytics integration'
      ]
    }
  },
  {
    id: 3,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services that optimize performance and security.',
    icon: <CloudArrowUpIcon className="h-6 w-6" />,
    features: [
      'Cloud Migration',
      'AWS & Azure Services',
      'Serverless Architecture',
      'Cloud-Native Development'
    ],
    detailedInfo: {
      overview: 'Our cloud solutions help businesses leverage the power of cloud computing to improve scalability, reduce costs, and enhance security. We provide end-to-end cloud services from migration to optimization.',
      benefits: [
        'Improved scalability and flexibility',
        'Reduced infrastructure costs',
        'Enhanced security and compliance',
        'Disaster recovery and backup',
        'Global availability',
        'Pay-as-you-go pricing'
      ],
      technologies: [
        'AWS', 'Azure', 'Google Cloud',
        'Docker', 'Kubernetes', 'Terraform',
        'CloudFormation', 'Lambda'
      ],
      process: [
        'Cloud Readiness Assessment',
        'Migration Strategy Development',
        'Infrastructure as Code Implementation',
        'Security Configuration',
        'Performance Optimization'
      ],
      deliverables: [
        'Cloud architecture documentation',
        'Infrastructure as Code templates',
        'Security configurations',
        'Monitoring setup',
        'Cost optimization recommendations',
        'Training and support'
      ]
    }
  },
  {
    id: 4,
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions that leverage cutting-edge AI and ML technologies.',
    icon: <CpuChipIcon className="h-6 w-6" />,
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Machine Learning Models'
    ],
    detailedInfo: {
      overview: 'Our AI and Machine Learning solutions help businesses harness the power of artificial intelligence to gain insights, automate processes, and make data-driven decisions.',
      benefits: [
        'Enhanced decision making',
        'Automated processes',
        'Predictive capabilities',
        'Improved customer experience',
        'Reduced operational costs',
        'Competitive advantage'
      ],
      technologies: [
        'TensorFlow', 'PyTorch', 'Scikit-learn',
        'OpenCV', 'NLTK', 'Keras',
        'MLflow', 'Kubeflow'
      ],
      process: [
        'Data Collection and Preparation',
        'Model Development and Training',
        'Testing and Validation',
        'Deployment and Integration',
        'Monitoring and Optimization'
      ],
      deliverables: [
        'Trained ML models',
        'API endpoints',
        'Model documentation',
        'Performance metrics',
        'Monitoring dashboards',
        'Regular model updates'
      ]
    }
  },
  {
    id: 5,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    features: [
      'Security Audits',
      'Penetration Testing',
      'Compliance Solutions',
      'Security Architecture'
    ],
    detailedInfo: {
      overview: 'Our cybersecurity services provide comprehensive protection for your digital assets, ensuring your systems are secure against modern threats while maintaining compliance with industry standards.',
      benefits: [
        'Enhanced security posture',
        'Regulatory compliance',
        'Reduced security risks',
        'Protected customer data',
        'Business continuity',
        'Rapid incident response'
      ],
      technologies: [
        'SIEM Tools', 'Penetration Testing Tools',
        'Encryption Solutions', 'WAF',
        'IDS/IPS Systems', 'Zero Trust Architecture'
      ],
      process: [
        'Security Assessment',
        'Vulnerability Testing',
        'Security Implementation',
        'Monitoring Setup',
        'Incident Response Planning'
      ],
      deliverables: [
        'Security assessment reports',
        'Vulnerability analysis',
        'Security policies and procedures',
        'Incident response plan',
        'Security training materials',
        'Compliance documentation'
      ]
    }
  },
  {
    id: 6,
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with advanced analytics.',
    icon: <ChartBarIcon className="h-6 w-6" />,
    features: [
      'Business Intelligence',
      'Data Visualization',
      'Big Data Solutions',
      'Real-time Analytics'
    ],
    detailedInfo: {
      overview: 'Our data analytics services help businesses make sense of their data through advanced analytics, visualization, and reporting tools. We turn complex data into actionable insights.',
      benefits: [
        'Data-driven decision making',
        'Real-time insights',
        'Improved efficiency',
        'Cost reduction',
        'Performance optimization',
        'Competitive intelligence'
      ],
      technologies: [
        'Tableau', 'Power BI', 'Python',
        'R', 'Apache Spark', 'Hadoop',
        'ElasticSearch', 'Kibana'
      ],
      process: [
        'Data Requirements Analysis',
        'Data Collection and Cleaning',
        'Analytics Implementation',
        'Dashboard Development',
        'Insights Generation'
      ],
      deliverables: [
        'Interactive dashboards',
        'Custom reports',
        'Data models',
        'API integrations',
        'Documentation',
        'Training materials'
      ]
    }
  }
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    trackServiceClick(service.title);
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive software solutions to drive your business forward
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleServiceClick(service)}
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService!}
      />
    </section>
  );
}
