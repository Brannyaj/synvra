'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatMessage, faqMessages } from '@/data/faq-chat';

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ChatMessage['category'] | 'all'>('all');
  const [selectedQuestion, setSelectedQuestion] = useState<ChatMessage | null>(null);

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'technical', label: 'Technical' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const filteredMessages = faqMessages.filter(
    msg => selectedCategory === 'all' || msg.category === selectedCategory
  );

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-2xl h-[600px] flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="text-xl font-semibold">FAQ Chat</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Categories */}
              <div className="p-4 border-b overflow-x-auto">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        setSelectedCategory(category.id as ChatMessage['category'] | 'all');
                        setSelectedQuestion(null);
                      }}
                      className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                        selectedCategory === category.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4">
                {selectedQuestion ? (
                  <div className="space-y-4">
                    <button
                      onClick={() => setSelectedQuestion(null)}
                      className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      <span>Back to questions</span>
                    </button>
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="font-medium text-gray-900">{selectedQuestion.question}</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-gray-800">{selectedQuestion.answer}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {filteredMessages.map((message) => (
                      <button
                        key={message.id}
                        onClick={() => setSelectedQuestion(message)}
                        className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <p className="font-medium text-gray-900">{message.question}</p>
                        <p className="text-sm text-gray-500 mt-1 capitalize">
                          Category: {message.category}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-4 border-t text-center text-sm text-gray-500">
                Can't find what you're looking for? Contact us directly.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
