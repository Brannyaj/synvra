import { notFound } from 'next/navigation';
import ServiceClient from './ServiceClient';

const serviceData = {
  'enterprise-solutions': {
    title: 'Enterprise Solutions',
    icon: '🏢',
    description: 'Custom ERP, CRM, and business process automation systems tailored to your workflow.',
    features: ['Business Process Automation', 'Data Analytics', 'Enterprise Integration'],
    details: {
      overview: 'Our enterprise solutions are designed to streamline your business operations, improve efficiency, and drive growth through digital transformation.',
      benefits: [
        'Increased operational efficiency',
        'Reduced costs and improved ROI',
        'Enhanced data-driven decision making',
        'Seamless system integration',
        'Scalable and future-proof architecture'
      ],
      technologies: [
        'SAP',
        'Oracle',
        'Microsoft Dynamics',
        'Salesforce',
        'Custom Solutions'
      ],
      methodology: [
        'Requirements Analysis',
        'System Design',
        'Implementation',
        'Testing & QA',
        'Deployment & Support'
      ]
    }
  },
  'ai-machine-learning': {
    title: 'AI & Machine Learning',
    icon: '🤖',
    description: 'Intelligent solutions powered by advanced AI algorithms and machine learning models.',
    features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision'],
    details: {
      overview: 'Leverage the power of artificial intelligence and machine learning to unlock insights, automate processes, and create intelligent applications.',
      benefits: [
        'Automated decision making',
        'Predictive insights',
        'Enhanced customer experience',
        'Process optimization',
        'Competitive advantage'
      ],
      technologies: [
        'TensorFlow',
        'PyTorch',
        'OpenAI',
        'Computer Vision',
        'NLP'
      ],
      methodology: [
        'Data Collection',
        'Model Development',
        'Training & Validation',
        'Deployment',
        'Monitoring & Optimization'
      ]
    }
  },
  // Add similar data structures for other services
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return <ServiceClient service={service} />;
} 