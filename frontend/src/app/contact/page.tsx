'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-synvra-black py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Contact Us</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {status === 'success' && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
              Thank you for your message! We'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
              Failed to send message. Please try again.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-synvra-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-synvra-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-synvra-gray-300 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white resize-none"
              placeholder="How can we help you?"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full px-8 py-4 bg-synvra-blue text-white rounded-lg font-medium transition-all duration-200
              ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
} 