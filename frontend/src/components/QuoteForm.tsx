'use client';

import { useState } from 'react';

interface QuoteFormProps {
  onClose: () => void;
}

const initialFormData = {
  name: '',
  email: '',
  company: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  description: '',
  services: [] as string[],
  referredBy: '',
};

export default function QuoteForm({ onClose }: QuoteFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.projectType || 
        !formData.budget || !formData.timeline || !formData.description ||
        formData.services.length === 0) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Validate description length
    if (formData.description.length < 100) {
      setStatus('error');
      setErrorMessage('Project description must be at least 100 characters long');
      return;
    }

    if (formData.description.length > 50000) {
      setStatus('error');
      setErrorMessage('Project description cannot exceed 50,000 characters');
      return;
    }

    const maxRetries = 3;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const response = await fetch('/.netlify/functions/quote', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            services: formData.services
          }),
        });

        const data = await response.json();

        if (!response.ok || data.status === 'error') {
          throw new Error(data.message || 'Failed to send quote request');
        }

        setStatus('success');
        setFormData(initialFormData);
        setTimeout(onClose, 2000);
        return;
      } catch (error) {
        console.error(`Form submission attempt ${attempt} failed:`, error);
        
        // If this was our last retry, show the error
        if (attempt === maxRetries) {
          setStatus('error');
          setErrorMessage(
            error instanceof Error 
              ? error.message 
              : 'Failed to send quote request. Please try again or contact us directly at support@synvra.com'
          );
        } else {
          // Wait before retrying (exponential backoff)
          await new Promise(resolve => setTimeout(resolve, attempt * 1000));
        }
      }
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleServiceToggle(service: string) {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }));
  }

  const services = [
    'Website Development',
    'Mobile App Development',
    'Cloud Hosting & Infrastructure',
    'Artificial Intelligence & Machine Learning',
    'IT Operations & Automation',
    'Security & Data Protection',
    'Smart Device & IoT Solutions',
    'Blockchain & Web3 Development',
    'Custom Business Software',
    'Data Analytics & Business Intelligence',
  ];

  return (
    <div className="bg-synvra-black border border-synvra-white/10 rounded-lg p-6 md:p-8 max-h-[90vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Request a Quote</h2>
        <button
          onClick={onClose}
          className="text-synvra-gray-400 hover:text-white transition-colors"
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {status === 'success' && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
            Thank you for your quote request! We'll get back to you soon.
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
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
              placeholder="Enter your full name"
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
          <label htmlFor="projectType" className="block text-sm font-medium text-synvra-gray-300 mb-2">
            Project Type *
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
          >
            <option value="">Select project type</option>
            <option value="New Project">New Project</option>
            <option value="Existing Project">Existing Project</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Consultation">Consultation</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-synvra-gray-300 mb-2">
            Services Required *
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {services.map(service => (
              <label
                key={service}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  formData.services.includes(service)
                    ? 'border-synvra-blue bg-synvra-blue/10 text-white'
                    : 'border-synvra-white/10 text-synvra-gray-300 hover:border-synvra-blue/50'
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.services.includes(service)}
                  onChange={() => handleServiceToggle(service)}
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-synvra-gray-300 mb-2">
              Budget Range *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
            >
              <option value="">Select budget range</option>
              <option value="$5,000 to $10,000">$5,000 to $10,000</option>
              <option value="$10,000 to $25,000">$10,000 to $25,000</option>
              <option value="$25,000 to $50,000">$25,000 to $50,000</option>
              <option value="$50,000 to $100,000">$50,000 to $100,000</option>
              <option value="$100,000 to $250,000">$100,000 to $250,000</option>
              <option value="$250,000 to $500,000">$250,000 to $500,000</option>
              <option value="$500,000 to $1,000,000">$500,000 to $1,000,000</option>
              <option value="$1,000,000 to $5,000,000">$1,000,000 to $5,000,000</option>
              <option value="$5,000,000 to $10,000,000">$5,000,000 to $10,000,000</option>
              <option value="$10,000,000 to $50,000,000">$10,000,000 to $50,000,000</option>
              <option value="$50,000,000 to $100,000,000">$50,000,000 to $100,000,000</option>
              <option value="$100,000,000+">$100,000,000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-medium text-synvra-gray-300 mb-2">
              Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
            >
              <option value="">Select timeline</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="12+ months">12+ months</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-synvra-gray-300 mb-2">
            Project Description * <span className="text-synvra-gray-400 text-xs">(min 100 characters)</span>
          </label>
          <textarea
            id="description"
            name="description"
            required
            minLength={100}
            maxLength={50000}
            value={formData.description}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white resize-none"
            placeholder="Tell us about your project requirements and goals (minimum 100 characters)"
          />
          <div className="mt-2 text-sm text-synvra-gray-400 flex justify-end">
            {formData.description.length} / 50,000 characters
          </div>
        </div>

        <div>
          <label htmlFor="referredBy" className="block text-sm font-medium text-synvra-gray-300 mb-2">
            How did you hear about us? *
          </label>
          <input
            type="text"
            id="referredBy"
            name="referredBy"
            required
            value={formData.referredBy}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-synvra-black/50 border border-synvra-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-synvra-blue text-white"
            placeholder="Enter the name of the person who referred you or where you found us"
          />
        </div>

        <div className="mt-16">
          <button
            type="submit"
            disabled={status === 'submitting'}
            className={`w-full px-8 py-4 bg-synvra-blue text-white rounded-lg font-medium transition-all duration-200
              ${status === 'submitting' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-opacity-90'}`}
          >
            {status === 'submitting' ? 'Sending...' : 'Submit Quote Request'}
          </button>
        </div>
      </form>
    </div>
  );
} 