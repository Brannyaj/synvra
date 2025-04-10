'use client';

import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    description: '',
    budget: '',
    exactBudget: '',
    deadline: ''
  });

  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const budgetRanges = [
    'Select Budget Range',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000 - $1 Million',
    '$1 Million - $5 Million',
    '$5 Million+'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    console.log('Form change:', name, value); // Debug log
    
    setFormData(prev => {
      const newData = {
        ...prev,
        [name]: value
      };
      console.log('New form data:', newData); // Debug log
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit quote');
      }

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        description: '',
        budget: '',
        exactBudget: '',
        deadline: ''
      });
    } catch (error) {
      console.error('Error submitting quote:', error);
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <div className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9\+\-\(\)\s]+"
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
            placeholder="e.g., +1 (555) 123-4567"
          />
          <p className="mt-1 text-sm text-gray-500">
            Please include country code (e.g., +1 for US/Canada)
          </p>
        </div>

        {/* Company Field */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
          />
        </div>

        {/* Project Description Field */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Project Description * (100-15,000 characters)
          </label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
            minLength={100}
            maxLength={15000}
          />
          <div className="mt-1 flex justify-between text-sm text-gray-500">
            <span>{formData.description.length} characters</span>
            <span>{15000 - formData.description.length} characters remaining</span>
          </div>
          {formData.description.length < 100 && (
            <p className="mt-1 text-sm text-red-600">
              Please enter at least {100 - formData.description.length} more characters
            </p>
          )}
        </div>

        {/* Budget Section */}
        <div className="space-y-4">
          {/* Budget Range */}
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-700">
              Budget Range *
            </label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
            >
              <option value="">Select Budget Range</option>
              {budgetRanges.slice(1).map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>

          {/* Always show exact budget field for testing */}
          <div>
            <label htmlFor="exactBudget" className="block text-sm font-medium text-gray-700">
              Exact Budget Amount (Optional)
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                name="exactBudget"
                id="exactBudget"
                value={formData.exactBudget}
                onChange={handleChange}
                placeholder="Enter exact amount"
                min="0"
                step="1000"
                className="block w-full rounded-md border border-gray-300 py-2 pl-7 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
              />
            </div>
            {formData.budget && (
              <p className="mt-1 text-sm text-gray-500">
                Please enter an amount within your selected range: {formData.budget}
              </p>
            )}
          </div>
        </div>

        {/* Deadline Field */}
        <div>
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Desired Completion Date
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 bg-white"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              submitStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Quote Request'}
          </button>
        </div>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="rounded-md bg-green-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Quote request submitted successfully! We'll get back to you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-red-800">
                  {errorMessage}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
