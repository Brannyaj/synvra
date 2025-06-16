'use client';

import { useState } from 'react';

interface ServiceOption {
  id: string;
  name: string;
  basicPrice: number;
  complexPrice: number;
  description: string;
}

interface FormData {
  projectName: string;
  serviceType: string;
  tier: 'Basic' | 'Complex';
  timeline: 'Standard' | 'Fast-track' | 'Urgent';
  additionalRequirements: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  projectType: string;
}

const services: ServiceOption[] = [
  {
    id: 'website-platform',
    name: 'Website Development: Platform-Based (GoDaddy, WordPress)',
    basicPrice: 2000,
    complexPrice: 4000,
    description: 'Platform-based websites using GoDaddy, WordPress, etc.'
  },
  {
    id: 'website-custom',
    name: 'Website Development: Custom-Coded (From Scratch)',
    basicPrice: 5000,
    complexPrice: 10000,
    description: 'Fully custom-coded websites built from scratch.'
  },
  {
    id: 'app',
    name: 'App Development',
    basicPrice: 10000,
    complexPrice: 25000,
    description: 'Basic MVPs to complex apps with chat, payments, maps, etc.'
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure Development',
    basicPrice: 7000,
    complexPrice: 50000,
    description: 'Standard setup to complex, scalable, secure cloud architecture.'
  },
  {
    id: 'ai-integration',
    name: 'AI Integration (Existing APIs)',
    basicPrice: 50000,
    complexPrice: 50000,
    description: 'Connecting to AI services (e.g., ChatGPT, Claude), prompt design, and integration with your app or business logic.'
  },
  {
    id: 'ai-custom',
    name: 'Custom AI Model Development (From Scratch)',
    basicPrice: 75000000,
    complexPrice: 75000000,
    description: 'Building a custom AI model from scratch, including data pipeline design, training infrastructure, deep learning systems, and full-scale deployment.'
  },
  {
    id: 'automation',
    name: 'IT Automation Development',
    basicPrice: 6000,
    complexPrice: 30000,
    description: 'Simple automation scripts to advanced enterprise automation.'
  },
  {
    id: 'security',
    name: 'Data Protection & Security Development',
    basicPrice: 7000,
    complexPrice: 40000,
    description: 'Basic security to full-scale security development.'
  },
  {
    id: 'iot',
    name: 'Smart Device & IoT Development',
    basicPrice: 10000,
    complexPrice: 60000,
    description: 'Basic device integration to complex IoT ecosystems.'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3 Development',
    basicPrice: 200000,
    complexPrice: 200000,
    description: 'Full-scale enterprise blockchain solutions.'
  },
  {
    id: 'business',
    name: 'Custom Business Software Development',
    basicPrice: 25000,
    complexPrice: 150000,
    description: 'Basic tools to complex enterprise systems.'
  },
  {
    id: 'analytics',
    name: 'Data Analytics & Business Intelligence Development',
    basicPrice: 7000,
    complexPrice: 45000,
    description: 'Simple dashboards to advanced BI tools.'
  }
];

const timelineMultipliers = {
  'Standard': 1,
  'Fast-track': 1.25,
  'Urgent': 1.5
};

const ZAPIER_WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/23336720/uoor2gh/';

export default function ProjectProposalForm() {
  const [formData, setFormData] = useState<FormData>({
    projectName: '',
    serviceType: '',
    tier: 'Basic',
    timeline: 'Standard',
    additionalRequirements: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    projectType: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps] = useState(4);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');

  const calculateBasePrice = () => {
    const service = services.find(s => s.id === formData.serviceType);
    if (!service) return 0;
    return formData.tier === 'Basic' ? service.basicPrice : service.complexPrice;
  };

  const calculateTotalPrice = () => {
    const basePrice = calculateBasePrice();
    const multiplier = timelineMultipliers[formData.timeline];
    return basePrice * multiplier;
  };

  const calculateDeposit = () => {
    return calculateTotalPrice() * 0.25;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = async () => {
    setSubmitStatus('submitting');
    setSubmitError('');
    try {
      const payload = {
        ...formData,
        basePrice: calculateBasePrice(),
        totalPrice: calculateTotalPrice(),
        deposit: calculateDeposit(),
      };
      const response = await fetch(ZAPIER_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Failed to submit proposal');
      setSubmitStatus('success');
    } catch (err) {
      setSubmitStatus('error');
      setSubmitError('Failed to submit proposal. Please try again later.');
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-synvra-gray-200">
          Service Type
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        >
          <option value="">Select a service</option>
          {services.map(service => (
            <option key={service.id} value={service.id}>
              {service.name} - {service.description}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-synvra-gray-200">Project Type</label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType || ''}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        >
          <option value="">Select project type</option>
          <option value="New Project">New Project</option>
          <option value="Existing Project">Existing Project</option>
          <option value="Maintenance">Maintenance</option>
        </select>
      </div>

      <div>
        <label htmlFor="tier" className="block text-sm font-medium text-synvra-gray-200">
          Project Tier
        </label>
        <select
          id="tier"
          name="tier"
          value={formData.tier}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        >
          <option value="Basic">Basic</option>
          <option value="Complex">Complex</option>
        </select>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-synvra-gray-200">
          Timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        >
          <option value="Standard">Standard (1x multiplier)</option>
          <option value="Fast-track">Fast-track (1.25x multiplier)</option>
          <option value="Urgent">Urgent (1.5x multiplier)</option>
        </select>
      </div>

      <div>
        <label htmlFor="additionalRequirements" className="block text-sm font-medium text-synvra-gray-200">
          Project Description
        </label>
        <textarea
          id="additionalRequirements"
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleInputChange}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        />
      </div>

      {formData.serviceType && (
        <div className="bg-synvra-black p-4 rounded-md">
          <h3 className="text-lg font-medium text-synvra-white mb-2">Price Estimate</h3>
          <div className="space-y-2">
            <p className="text-synvra-gray-300">
              Base Price: ${calculateBasePrice().toLocaleString()}
            </p>
            <p className="text-synvra-gray-300">
              Timeline Adjustment: {timelineMultipliers[formData.timeline]}x
            </p>
            <p className="text-synvra-white font-medium">
              Total Project Cost: ${calculateTotalPrice().toLocaleString()}
            </p>
            <p className="text-synvra-green font-medium">
              Required Deposit (25%): ${calculateDeposit().toLocaleString()}
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          type="button"
          onClick={nextStep}
          className="bg-synvra-blue text-white px-4 py-2 rounded-md hover:bg-synvra-blue-dark transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-synvra-gray-200">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        />
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-synvra-gray-200">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-synvra-gray-200">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-synvra-gray-200">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        />
      </div>

      <div>
        <label htmlFor="companySize" className="block text-sm font-medium text-synvra-gray-200">
          Company Size
        </label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        >
          <option value="">Select company size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-1000">201-1000 employees</option>
          <option value="1000+">1000+ employees</option>
        </select>
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-synvra-gray-200">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          className="mt-1 block w-full rounded-md border-gray-700 focus:ring-synvra-blue focus:border-synvra-blue text-white appearance-none placeholder-gray-400"
          required
          style={{ backgroundColor: '#0A0F1C', color: '#fff', border: '1px solid #2563eb' }}
        >
          <option value="">Select industry</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Manufacturing">Manufacturing</option>
          <option value="Retail">Retail</option>
          <option value="Education">Education</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="border border-[#2563eb] text-[#2563eb] bg-transparent px-4 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-colors"
          style={{ color: '#2563eb', background: 'transparent', border: '1px solid #2563eb' }}
        >
          Previous Step
        </button>
        <button
          type="button"
          onClick={nextStep}
          className="bg-synvra-blue text-white px-4 py-2 rounded-md hover:bg-synvra-blue-dark transition-colors"
        >
          Next Step
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => {
    const selectedService = services.find(s => s.id === formData.serviceType);
    
    return (
      <div className="space-y-6">
        <div className="bg-synvra-black p-6 rounded-lg">
          <h3 className="text-lg font-medium text-synvra-white mb-4">Project Summary</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-synvra-gray-200">Project Details</h4>
              <dl className="mt-2 space-y-2">
                <div>
                  <dt className="text-sm text-synvra-gray-300">Project Name</dt>
                  <dd className="text-sm text-synvra-white">{formData.projectName}</dd>
                </div>
                <div>
                  <dt className="text-sm text-synvra-gray-300">Service Type</dt>
                  <dd className="text-sm text-synvra-white">{selectedService?.name}</dd>
                </div>
                <div>
                  <dt className="text-sm text-synvra-gray-300">Tier</dt>
                  <dd className="text-sm text-synvra-white">{formData.tier}</dd>
                </div>
                <div>
                  <dt className="text-sm text-synvra-gray-300">Timeline</dt>
                  <dd className="text-sm text-synvra-white">{formData.timeline}</dd>
                </div>
              </dl>
            </div>

            <div>
              <h4 className="font-medium text-synvra-gray-200">Client Information</h4>
              <dl className="mt-2 space-y-2">
                <div>
                  <dt className="text-sm text-synvra-gray-300">Full Name</dt>
                  <dd className="text-sm text-synvra-white">{formData.fullName}</dd>
                </div>
                <div>
                  <dt className="text-sm text-synvra-gray-300">Company</dt>
                  <dd className="text-sm text-synvra-white">{formData.companyName}</dd>
                </div>
                <div>
                  <dt className="text-sm text-synvra-gray-300">Email</dt>
                  <dd className="text-sm text-synvra-white">{formData.email}</dd>
                </div>
                <div>
                  <dt className="text-sm text-synvra-gray-300">Phone</dt>
                  <dd className="text-sm text-synvra-white">{formData.phone}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-synvra-white">
            <h4 className="font-medium text-synvra-gray-200 mb-4">Pricing Summary</h4>
            <dl className="space-y-2">
              <div className="flex justify-between">
                <dt className="text-synvra-gray-300">Base Price</dt>
                <dd className="text-synvra-white">${calculateBasePrice().toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-synvra-gray-300">Timeline Adjustment</dt>
                <dd className="text-synvra-white">{timelineMultipliers[formData.timeline]}x</dd>
              </div>
              <div className="flex justify-between font-medium">
                <dt className="text-synvra-white">Total Project Cost</dt>
                <dd className="text-synvra-white">${calculateTotalPrice().toLocaleString()}</dd>
              </div>
              <div className="flex justify-between font-medium">
                <dt className="text-synvra-green">Required Deposit (25%)</dt>
                <dd className="text-synvra-green">${calculateDeposit().toLocaleString()}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-synvra-black p-6 rounded-lg">
          <h3 className="text-lg font-medium text-synvra-white mb-4">Terms and Conditions</h3>
          <div className="prose prose-sm text-synvra-gray-300">
            <p>By proceeding with this project, you agree to the following terms:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>A 25% deposit is required to begin the project</li>
              <li>The remaining balance will be due upon project completion</li>
              <li>Project timeline is subject to change based on requirements and feedback</li>
              <li>All intellectual property rights will be transferred upon final payment</li>
              <li>Synvra reserves the right to use the project in its portfolio</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="h-4 w-4 text-synvra-blue focus:ring-synvra-blue border-synvra-white rounded !bg-gray-900 text-white appearance-none"
            required
          />
          <label htmlFor="terms" className="text-sm text-synvra-gray-200">
            I have read and agree to the terms and conditions
          </label>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            className="border border-[#2563eb] text-[#2563eb] bg-transparent px-4 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-colors"
            style={{ color: '#2563eb', background: 'transparent', border: '1px solid #2563eb' }}
          >
            Previous Step
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="bg-synvra-blue text-white px-4 py-2 rounded-md hover:bg-synvra-blue-dark transition-colors"
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="bg-synvra-black p-6 rounded-lg">
        <h3 className="text-lg font-medium text-synvra-white mb-4">Payment Details</h3>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-synvra-gray-300">Total Project Cost:</span>
            <span className="text-synvra-white font-medium">${calculateTotalPrice().toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-synvra-green">Required Deposit (25%):</span>
            <span className="text-synvra-green font-medium">${calculateDeposit().toLocaleString()}</span>
          </div>
        </div>

        <div className="border-t border-synvra-white pt-6">
          <h4 className="text-sm font-medium text-synvra-gray-200 mb-4">Payment Method</h4>
          
          {/* Payment plugin integration will go here */}
          <div className="bg-synvra-black p-4 rounded-md border border-synvra-white">
            <p className="text-synvra-gray-300 text-sm">
              Payment integration will be added here. This will connect to your chosen payment plugin.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-synvra-black p-6 rounded-lg">
        <h3 className="text-lg font-medium text-synvra-white mb-4">What happens next?</h3>
        <ul className="space-y-3 text-synvra-gray-300">
          <li className="flex items-start">
            <span className="text-synvra-green mr-2">✓</span>
            <span>After successful payment, you'll receive a confirmation email with your project details</span>
          </li>
          <li className="flex items-start">
            <span className="text-synvra-green mr-2">✓</span>
            <span>Our team will review your project requirements and get in touch within 24 hours</span>
          </li>
          <li className="flex items-start">
            <span className="text-synvra-green mr-2">✓</span>
            <span>We'll schedule a kickoff meeting to discuss your project in detail</span>
          </li>
          <li className="flex items-start">
            <span className="text-synvra-green mr-2">✓</span>
            <span>Your project will be assigned to our expert development team</span>
          </li>
        </ul>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">{submitError}</div>
      )}
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded">Thank you for your proposal! We'll be in touch soon.</div>
      )}
      <div className="flex justify-between">
        <button
          type="button"
          onClick={prevStep}
          className="border border-[#2563eb] text-[#2563eb] bg-transparent px-4 py-2 rounded-md hover:bg-[#2563eb] hover:text-white transition-colors"
          style={{ color: '#2563eb', background: 'transparent', border: '1px solid #2563eb' }}
        >
          Previous Step
        </button>
        <button
          type="button"
          onClick={handleFinalSubmit}
          className="bg-synvra-green text-white px-6 py-2 rounded-md hover:bg-synvra-green-dark transition-colors"
          disabled={submitStatus === 'submitting'}
        >
          {submitStatus === 'submitting' ? 'Submitting...' : 'Pay Deposit & Submit'}
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-synvra-white mb-2">Project Proposal Form</h2>
        <p className="text-synvra-gray-300">Step {currentStep} of {totalSteps}</p>
      </div>

      <div className="bg-synvra-black rounded-lg shadow-synvra-blue/10 p-6">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
        {currentStep === 4 && renderStep4()}
      </div>
    </div>
  );
} 