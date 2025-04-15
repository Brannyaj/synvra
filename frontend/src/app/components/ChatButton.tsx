'use client';

import { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Why choose Synvra for your next project?",
    answer: "With 600+ successful projects across cutting-edge technologies, we're industry leaders in AI/ML, Quantum Computing, and Advanced Automation. Our elite team of engineers has delivered groundbreaking solutions that have generated billions in value for our clients. We combine deep technical expertise with agile methodologies to ensure rapid delivery and exceptional quality. Choose Synvra when excellence is non-negotiable."
  },
  {
    question: "How do we protect your intellectual property?",
    answer: "Your innovations are safe with us. We implement military-grade security protocols and ironclad NDAs that have protected $100B+ worth of intellectual property. Our secure development environment, coupled with our proven track record of zero security breaches, ensures your competitive advantage remains uncompromised. We've earned the trust of Fortune 500 companies and government agencies worldwide."
  },
  {
    question: "What makes our development process unique?",
    answer: "Our proprietary Rapid Innovation Framework™ combines cutting-edge technology with battle-tested methodologies. We achieve 40-60% faster development cycles while maintaining 99.9% quality standards. Our process includes real-time progress tracking, weekly strategic alignments, and our signature 'Innovation Sprints' that have consistently delivered breakthrough results for our clients."
  },
  {
    question: "What kind of ROI can you expect?",
    answer: "Our projects consistently deliver exceptional returns: 70% average reduction in operational costs, 85% improvement in process efficiency, and 99.99% system reliability. We've helped startups become unicorns and enabled enterprises to capture new markets. Our solutions have generated over $10B in validated client value across industries. We don't just meet ROI targets – we exceed them."
  },
  {
    question: "How do we ensure seamless project delivery?",
    answer: "Our elite project teams are led by industry veterans with 15+ years of experience. We employ advanced project management tools, daily progress monitoring, and proactive risk management. Our 99% project success rate is backed by comprehensive support: 24/7 technical assistance, regular optimization updates, and dedicated account managers ensuring your project's success from day one."
  },
  {
    question: "What post-launch support do we provide?",
    answer: "We're committed to your long-term success. Our Premium Support Package includes 24/7 priority response, quarterly performance optimizations, and proactive system monitoring. We maintain 99.99% uptime for critical systems and provide continuous updates to keep your solution at the cutting edge. Our client retention rate of 95% speaks to our exceptional support quality."
  },
  {
    question: "Ready to start your project?",
    answer: "Let's transform your vision into reality. Our team of experts is ready to begin with a comprehensive project analysis within 48 hours. We'll create a detailed roadmap, identify key milestones, and outline the path to success. Contact us now to schedule a strategic consultation and join the ranks of our successful clients who are leading their industries."
  }
];

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-synvra-blue rounded-full shadow-lg hover:bg-synvra-blue/90 transition-all duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
          />
        </svg>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-[#0A0F1C] rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-synvra-blue/30 flex justify-between items-center bg-[#0A0F1C]">
              <h2 className="text-xl font-bold text-synvra-white">
                {selectedFaq ? 'FAQ Detail' : 'Frequently Asked Questions'}
              </h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSelectedFaq(null);
                }}
                className="text-synvra-gray-300 hover:text-synvra-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-4 max-h-[60vh] overflow-y-auto bg-[#0A0F1C]">
              {selectedFaq ? (
                <div className="space-y-4">
                  <button
                    onClick={() => setSelectedFaq(null)}
                    className="text-synvra-blue hover:text-synvra-blue/80 flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                    Back to FAQs
                  </button>
                  <h3 className="text-lg font-semibold text-synvra-white">
                    {selectedFaq.question}
                  </h3>
                  <p className="text-synvra-gray-300">{selectedFaq.answer}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFaq(faq)}
                      className="w-full p-4 text-left rounded-lg bg-synvra-blue/10 hover:bg-synvra-blue/20 transition-all duration-300"
                    >
                      <h3 className="text-synvra-white font-medium">
                        {faq.question}
                      </h3>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-synvra-blue/30 bg-[#0A0F1C]">
              <p className="text-synvra-gray-300 text-sm">
                Need more help? {' '}
                <a
                  href="/contact"
                  className="text-synvra-blue hover:text-synvra-blue/80"
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 