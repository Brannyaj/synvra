'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const maxRetries = 3;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch('/.netlify/functions/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok || data.status === 'error') {
          throw new Error(data.message || 'Failed to send message');
        }

        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
        return;
      } catch (error) {
        console.error(`Form submission attempt ${attempt} failed:`, error);
        
        // If this was our last retry, show the error
        if (attempt === maxRetries) {
          setStatus('error');
          setErrorMessage(
            error instanceof Error 
              ? error.message 
              : 'Failed to send message. Please try again or contact us directly at support@synvra.com'
          );
        } else {
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
          {errorMessage || 'Something went wrong. Please try again.'}
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
            required
            value={formData.name}
            onChange={handleChange}
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
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-synvra-gray-300 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
            placeholder="Your company"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-synvra-gray-300 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
            placeholder="Your phone number"
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
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white resize-none"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full button-primary py-3 ${
          status === 'submitting' ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 