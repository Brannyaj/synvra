import { ReactNode } from 'react';
import {
  CloudArrowUpIcon,
  CogIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CircleStackIcon,
  CpuChipIcon,
  ArrowPathIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
  technologies: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  caseStudies: {
    title: string;
    description: string;
    results: string[];
  }[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Enterprise Software Development",
    description: "Custom enterprise-grade software solutions that drive digital transformation and operational excellence.",
    icon: <CogIcon className="w-6 h-6" />,
    features: [
      "Microservices Architecture",
      "Cloud-Native Applications",
      "Enterprise Resource Planning (ERP)",
      "Customer Relationship Management (CRM)",
      "Business Process Automation",
      "Legacy System Modernization"
    ],
    technologies: [
      "Java Spring Boot",
      "Node.js",
      "React/Next.js",
      "PostgreSQL",
      "Docker",
      "Kubernetes"
    ],
    processSteps: [
      {
        title: "Discovery & Analysis",
        description: "Deep dive into your business processes and requirements"
      },
      {
        title: "Architecture Design",
        description: "Creating scalable and maintainable system architecture"
      },
      {
        title: "Agile Development",
        description: "Iterative development with continuous feedback"
      }
    ],
    caseStudies: [
      {
        title: "Global Logistics Transformation",
        description: "Modernized legacy systems for a Fortune 500 logistics company",
        results: [
          "40% reduction in processing time",
          "99.99% system uptime",
          "60% cost reduction in maintenance"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "AI & Machine Learning Solutions",
    description: "Cutting-edge AI solutions that transform data into actionable insights and intelligent automation.",
    icon: <CpuChipIcon className="w-6 h-6" />,
    features: [
      "Predictive Analytics",
      "Natural Language Processing",
      "Computer Vision",
      "Recommendation Systems",
      "Automated Decision Making",
      "Deep Learning Models"
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "OpenAI GPT",
      "Azure ML",
      "AWS SageMaker",
      "NVIDIA CUDA"
    ],
    processSteps: [
      {
        title: "Data Assessment",
        description: "Evaluating data quality and requirements"
      },
      {
        title: "Model Development",
        description: "Creating and training custom AI models"
      },
      {
        title: "Integration & Deployment",
        description: "Seamless integration with existing systems"
      }
    ],
    caseStudies: [
      {
        title: "Retail Intelligence Platform",
        description: "AI-powered inventory and customer behavior analysis",
        results: [
          "25% increase in sales",
          "30% reduction in inventory costs",
          "95% prediction accuracy"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Cloud & DevOps Excellence",
    description: "Comprehensive cloud solutions and DevOps practices for scalable, reliable, and secure operations.",
    icon: <CloudArrowUpIcon className="w-6 h-6" />,
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "CI/CD Pipeline Implementation",
      "Container Orchestration",
      "Serverless Architecture",
      "Cloud Cost Optimization"
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Terraform",
      "Jenkins",
      "GitLab CI"
    ],
    processSteps: [
      {
        title: "Cloud Strategy",
        description: "Developing optimal cloud adoption roadmap"
      },
      {
        title: "Migration Planning",
        description: "Detailed migration strategy and execution plan"
      },
      {
        title: "DevOps Implementation",
        description: "Setting up automated workflows and monitoring"
      }
    ],
    caseStudies: [
      {
        title: "Financial Services Migration",
        description: "Cloud migration for a major financial institution",
        results: [
          "50% reduction in infrastructure costs",
          "90% faster deployment time",
          "Zero downtime migration"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Cybersecurity & Compliance",
    description: "Enterprise-grade security solutions and compliance frameworks for robust digital protection.",
    icon: <ShieldCheckIcon className="w-6 h-6" />,
    features: [
      "Security Assessment",
      "Penetration Testing",
      "Compliance Auditing",
      "Zero Trust Architecture",
      "Security Operations Center",
      "Incident Response"
    ],
    technologies: [
      "AWS Security Hub",
      "Azure Sentinel",
      "HashiCorp Vault",
      "Snyk",
      "SonarQube",
      "Splunk"
    ],
    processSteps: [
      {
        title: "Security Assessment",
        description: "Comprehensive security audit and gap analysis"
      },
      {
        title: "Implementation",
        description: "Deploying security measures and controls"
      },
      {
        title: "Continuous Monitoring",
        description: "24/7 security monitoring and threat detection"
      }
    ],
    caseStudies: [
      {
        title: "Healthcare Security Transformation",
        description: "HIPAA-compliant security implementation",
        results: [
          "100% compliance achievement",
          "Zero security breaches",
          "45% reduction in security incidents"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Data Engineering & Analytics",
    description: "End-to-end data solutions that transform raw data into valuable business insights.",
    icon: <CircleStackIcon className="w-6 h-6" />,
    features: [
      "Data Warehouse Design",
      "ETL Pipeline Development",
      "Real-time Analytics",
      "Big Data Processing",
      "Data Lake Implementation",
      "BI Dashboard Development"
    ],
    technologies: [
      "Apache Spark",
      "Snowflake",
      "Databricks",
      "Apache Kafka",
      "Power BI",
      "Tableau"
    ],
    processSteps: [
      {
        title: "Data Architecture",
        description: "Designing scalable data infrastructure"
      },
      {
        title: "Pipeline Development",
        description: "Building robust data processing pipelines"
      },
      {
        title: "Analytics Implementation",
        description: "Creating actionable insights and visualizations"
      }
    ],
    caseStudies: [
      {
        title: "E-commerce Analytics Platform",
        description: "Real-time analytics for major e-commerce platform",
        results: [
          "Real-time insights for 1M+ daily transactions",
          "85% faster reporting",
          "200% ROI in first year"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Digital Innovation Lab",
    description: "Cutting-edge R&D in emerging technologies to drive future innovation.",
    icon: <ArrowPathIcon className="w-6 h-6" />,
    features: [
      "Blockchain Solutions",
      "IoT Integration",
      "AR/VR Development",
      "Quantum Computing",
      "Edge Computing",
      "5G Applications"
    ],
    technologies: [
      "Ethereum",
      "IoT Core",
      "Unity 3D",
      "IBM Quantum",
      "Edge ML",
      "5G Networks"
    ],
    processSteps: [
      {
        title: "Innovation Assessment",
        description: "Evaluating emerging technology opportunities"
      },
      {
        title: "Proof of Concept",
        description: "Rapid prototyping and validation"
      },
      {
        title: "Scale & Integration",
        description: "Enterprise-wide implementation"
      }
    ],
    caseStudies: [
      {
        title: "Smart City Implementation",
        description: "IoT-based urban management system",
        results: [
          "30% reduction in energy consumption",
          "40% improvement in traffic flow",
          "Smart services for 1M+ citizens"
        ]
      }
    ]
  }
];
