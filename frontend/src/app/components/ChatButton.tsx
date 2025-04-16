'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in Healthcare, FinTech, E-commerce, Enterprise Solutions, EdTech, and IoT/Manufacturing, delivering tailored solutions for each sector's unique challenges."
  },
  {
    question: "How do you ensure project confidentiality?",
    answer: "We maintain strict NDAs, use secure development practices, and follow industry-standard security protocols to protect your intellectual property and sensitive information."
  },
  {
    question: "What's your typical project timeline?",
    answer: "Project timelines vary based on scope and complexity. Most projects range from 3-6 months, with clear milestones and regular progress updates throughout development."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages, including 24/7 technical support, regular updates, and performance monitoring."
  },
  {
    question: "How do you ensure project success?",
    answer: "We follow an agile methodology with regular client communication, iterative development, thorough testing, and detailed documentation to ensure successful project delivery."
  }
];

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState<FAQ | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-synvra-blue text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="relative bg-[#0A0F1C] rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
            <div className="p-6 border-b border-synvra-white/10">
              <h2 className="text-2xl font-bold text-synvra-white">How can we help?</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-synvra-gray-300 hover:text-synvra-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {selectedFaq ? (
                <div>
                  <button
                    onClick={() => setSelectedFaq(null)}
                    className="text-synvra-blue hover:text-synvra-blue/80 mb-4 flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Back to FAQs
                  </button>
                  <h3 className="text-xl font-semibold text-synvra-white mb-4">{selectedFaq.question}</h3>
                  <p className="text-synvra-gray-300">{selectedFaq.answer}</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedFaq(faq)}
                      className="w-full text-left p-4 rounded-lg bg-synvra-white/5 hover:bg-synvra-white/10 transition-colors"
                    >
                      <h3 className="text-lg font-medium text-synvra-white">{faq.question}</h3>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="p-6 border-t border-synvra-white/10 bg-synvra-white/5">
              <p className="text-synvra-gray-300 mb-4">
                Can't find what you're looking for? We're here to help!
              </p>
              <Link
                href="/contact"
                className="button-primary inline-block w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 