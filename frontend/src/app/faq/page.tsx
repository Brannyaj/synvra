'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>('general');

  const faqCategories = {
    general: [
      {
        question: "What services does Synvra offer?",
        answer: "Synvra offers a comprehensive range of services including Enterprise Solutions, AI & Machine Learning, Web Applications, Mobile Development, Cloud & DevOps, Blockchain, IoT Solutions, Cybersecurity, and Data Engineering. Each service is tailored to meet specific business needs."
      },
      {
        question: "How long has Synvra been in business?",
        answer: "Synvra has been delivering innovative software solutions for over 5 years, serving clients across various industries with a proven track record of success."
      },
      {
        question: "Where is Synvra located?",
        answer: "Synvra operates globally with teams distributed across multiple continents, allowing us to provide 24/7 support and development services to our clients worldwide."
      },
      {
        question: "What industries does Synvra serve?",
        answer: "We serve a wide range of industries including Healthcare, FinTech, E-commerce, Enterprise, EdTech, and IoT & Manufacturing, providing specialized solutions for each sector."
      }
    ],
    technical: [
      {
        question: "What technologies does Synvra use?",
        answer: "We use a modern tech stack including React, Next.js, Vue.js, TypeScript for frontend; Node.js, Python, Java, Go for backend; PostgreSQL, MongoDB, Redis for databases; and AWS, Docker, Kubernetes for DevOps."
      },
      {
        question: "How does Synvra ensure code quality?",
        answer: "We maintain high code quality through rigorous code reviews, automated testing, continuous integration, and following industry best practices and coding standards."
      },
      {
        question: "What is Synvra's development methodology?",
        answer: "We follow an Agile development methodology with regular sprints, daily stand-ups, and continuous feedback loops to ensure efficient project delivery and client satisfaction."
      },
      {
        question: "How does Synvra handle security?",
        answer: "Security is paramount in our development process. We implement industry-standard security practices, regular security audits, and follow OWASP guidelines to ensure robust application security."
      }
    ],
    project: [
      {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on complexity and scope. A typical project can range from 2-3 months for smaller applications to 6-12 months for complex enterprise solutions."
      },
      {
        question: "What is Synvra's project management approach?",
        answer: "We use a structured project management approach with clear milestones, regular progress updates, and transparent communication throughout the development process."
      },
      {
        question: "How does Synvra handle project changes?",
        answer: "We have a flexible change management process that allows for modifications while maintaining project timelines and budgets. All changes are documented and communicated clearly."
      },
      {
        question: "What is included in project deliverables?",
        answer: "Project deliverables include the complete source code, documentation, deployment instructions, user manuals, and post-launch support for a specified period."
      }
    ],
    pricing: [
      {
        question: "How does Synvra price its services?",
        answer: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team models. Pricing is based on project scope, complexity, and requirements."
      },
      {
        question: "Is a deposit required?",
        answer: "Yes, we require a $500 deposit as commitment to begin the project development process. This helps us allocate resources and begin work immediately on your project."
      },
      {
        question: "Why did we change from a 25% deposit to a flat $500 fee?",
        answer: "We reduced our deposit structure from 25% to a flat $500 fee to make our services more accessible to small businesses and startups. This change ensures that businesses of all sizes - whether just getting started or well-established - can access our premium services. After the initial $500 deposit, the remaining project balance can be divided into manageable monthly payments. This allows businesses of all sizes to get the high-quality development services they need without the financial burden of a large upfront deposit."
      },
      {
        question: "Do you offer installment plans?",
        answer: "Yes, we offer flexible installment plans specifically designed to support small businesses and startups in accessing our premium services. After the initial $250 deposit, the remaining project balance can be divided into manageable monthly payments. This allows businesses of all sizes to get the high-quality development services they need without the financial burden of large upfront payments."
      },
      {
        question: "Are there any hidden costs?",
        answer: "No, we believe in complete transparency. All costs are clearly outlined in the project proposal, and any additional requirements are discussed and approved before implementation."
      },
      {
        question: "Do you offer maintenance packages?",
        answer: "Yes, we offer various maintenance packages to ensure your application remains up-to-date, secure, and performing optimally after launch."
      },
      {
        question: "Is there a minimum project size?",
        answer: "While we can accommodate projects of various sizes, we typically work on projects with a minimum budget of $2,000 to ensure we can deliver the quality our clients expect."
      }
    ],
    support: [
      {
        question: "What kind of support does Synvra provide?",
        answer: "We provide 24/7 technical support, regular maintenance, performance monitoring, and dedicated account management to ensure your systems run smoothly."
      },
      {
        question: "How quickly does Synvra respond to support requests?",
        answer: "We have a tiered support system with response times ranging from immediate for critical issues to 24 hours for non-urgent matters."
      },
      {
        question: "Do you offer training for new systems?",
        answer: "Yes, we provide comprehensive training for all new systems, including user training, technical documentation, and ongoing support to ensure smooth adoption."
      },
      {
        question: "What happens after project completion?",
        answer: "After project completion, we provide a warranty period, ongoing maintenance options, and support services to ensure long-term success of your solution."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-synvra-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-8">
            {Object.entries(faqCategories).map(([category, questions]) => (
              <div key={category} className="glass-card p-6">
                <button
                  onClick={() => setOpenCategory(openCategory === category ? null : category)}
                  className="w-full flex justify-between items-center text-xl font-bold text-synvra-white mb-4"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)} Questions
                  <span className="text-synvra-blue">
                    {openCategory === category ? '−' : '+'}
                  </span>
                </button>
                
                {openCategory === category && (
                  <div className="space-y-6">
                    {questions.map((faq, index) => (
                      <div key={index} className="border-b border-synvra-white/10 pb-6 last:border-0">
                        <h3 className="text-lg font-semibold text-synvra-white mb-3">{faq.question}</h3>
                        <p className="text-synvra-gray-300">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-synvra-gray-300 mb-6">Still have questions? We're here to help!</p>
            <Link 
              href="/contact" 
              className="button-primary inline-block px-8 py-3 text-lg font-medium hover:bg-synvra-blue/90 active:bg-synvra-blue/80"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 