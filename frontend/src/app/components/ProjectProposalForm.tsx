'use client';

import { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { 
  trackFormStep, 
  trackFieldChange, 
  trackFormError, 
  trackPayment 
} from '@/utils/analytics';

interface ServiceOption {
  id: string;
  name: string;
  basicPrice: number;
  complexPrice: number;
  description: string;
}

interface FormData {
  serviceType: string;
  tier: 'Basic' | 'Complex' | '';
  timeline: 'Standard' | 'Fast-track' | 'Urgent' | '';
  additionalRequirements: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  companySize: string;
  industry: string;
  projectType: string;
  termsAccepted: boolean;
  projectDescription: string;
}

const services: ServiceOption[] = [
  {
    id: 'website-platform',
    name: 'Website Development: Platform-Based (GoDaddy, WordPress)',
    basicPrice: 2000,
    complexPrice: 4000,
    description: 'Using GoDaddy, WordPress, etc.'
  },
  {
    id: 'website-custom',
    name: 'Website Development: Custom-Coded (From Scratch)',
    basicPrice: 5000,
    complexPrice: 10000,
    description: 'Built from scratch with custom code'
  },
  {
    id: 'app',
    name: 'App Development',
    basicPrice: 10000,
    complexPrice: 25000,
    description: 'MVPs to complex apps with advanced features'
  },
  {
    id: 'cloud',
    name: 'Cloud Infrastructure Development',
    basicPrice: 7000,
    complexPrice: 50000,
    description: 'Scalable cloud architecture & setup'
  },
  {
    id: 'ai-integration',
    name: 'AI Integration (Existing APIs)',
    basicPrice: 50000,
    complexPrice: 50000,
    description: 'ChatGPT, Claude integration & prompt design'
  },
  {
    id: 'ai-custom',
    name: 'Custom AI Model Development (From Scratch)',
    basicPrice: 75000000,
    complexPrice: 75000000,
    description: 'Custom AI models with training & deployment'
  },
  {
    id: 'automation',
    name: 'IT Automation Development',
    basicPrice: 6000,
    complexPrice: 30000,
    description: 'Scripts to enterprise automation'
  },
  {
    id: 'security',
    name: 'Data Protection & Security Development',
    basicPrice: 7000,
    complexPrice: 40000,
    description: 'Security systems & data protection'
  },
  {
    id: 'iot',
    name: 'Smart Device & IoT Development',
    basicPrice: 10000,
    complexPrice: 60000,
    description: 'Device integration & IoT ecosystems'
  },
  {
    id: 'blockchain',
    name: 'Blockchain & Web3 Development',
    basicPrice: 200000,
    complexPrice: 200000,
    description: 'Enterprise blockchain solutions'
  },
  {
    id: 'business',
    name: 'Custom Business Software Development',
    basicPrice: 25000,
    complexPrice: 150000,
    description: 'Business tools & enterprise systems'
  },
  {
    id: 'analytics',
    name: 'Data Analytics & Business Intelligence Development',
    basicPrice: 7000,
    complexPrice: 45000,
    description: 'Dashboards & BI tools'
  }
];

const timelineMultipliers = {
  'Standard': 1,
  'Fast-track': 1.25,
  'Urgent': 1.5
};

const projectTypeMultipliers: Record<string, number> = {
  'New Project': 1.2,
  'Existing Project': 1,
  'Maintenance': 0.5,
};

export default function ProjectProposalForm() {
  const [formData, setFormData] = useState<FormData>({
    serviceType: '',
    tier: '',
    timeline: '',
    additionalRequirements: '',
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    companySize: '',
    industry: '',
    projectType: '',
    termsAccepted: false,
    projectDescription: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [totalSteps] = useState(4);

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Track initial form load
  useEffect(() => {
    trackFormStep(1, {}, false);
  }, []);

  const calculateBasePrice = () => {
    const service = services.find(s => s.id === formData.serviceType);
    if (!service) return 0;
    return formData.tier === 'Basic' ? service.basicPrice : service.complexPrice;
  };

  const calculateTotalPrice = () => {
    const basePrice = calculateBasePrice();
    const timelineMultiplier = formData.timeline ? timelineMultipliers[formData.timeline] : 1;
    const projectTypeMultiplier = projectTypeMultipliers[formData.projectType] || 1;
    return basePrice * timelineMultiplier * projectTypeMultiplier;
  };

  const calculateDeposit = () => {
    return Math.round(calculateTotalPrice() * 0.20); // 20% deposit fee
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: newValue
    }));

    // Track field change
    trackFieldChange(name, String(newValue));

    // Clear validation error when field is changed
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePhoneChange = (value: string) => {
    setFormData(prev => ({ ...prev, phone: value }));
    
    // Track phone field change
    trackFieldChange('phone', value);

    if (validationErrors.phone) {
      setValidationErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const validateStep = (step: number) => {
    const errors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.serviceType) errors.serviceType = 'Please select a service type';
      if (!formData.projectType) errors.projectType = 'Please select a project type';
      if (!formData.tier) errors.tier = 'Please select a project tier';
      if (!formData.timeline) errors.timeline = 'Please select a timeline';
      if (!formData.additionalRequirements) errors.additionalRequirements = 'Please describe what you need built for your business';
      else if (formData.additionalRequirements.length < 50) errors.additionalRequirements = 'Project description must be at least 50 characters';
    }

    if (step === 2) {
      if (!formData.fullName) errors.fullName = 'Please enter your full name';
      if (!formData.companyName) errors.companyName = 'Please enter your company name';
      if (!formData.email) errors.email = 'Please enter your email';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Please enter a valid email';
      if (!formData.phone) errors.phone = 'Please enter your phone number';
      if (!formData.companySize) errors.companySize = 'Please select your company size';
      if (!formData.industry) errors.industry = 'Please select your industry';
    }

    // Track any validation errors
    Object.entries(errors).forEach(([field, message]) => {
      trackFormError(field, message);
    });

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      const nextStepNumber = Math.min(currentStep + 1, totalSteps);
      setCurrentStep(nextStepNumber);
      
      // Track successful step completion and next step start
      trackFormStep(currentStep, formData, true);
      if (nextStepNumber <= totalSteps) {
        trackFormStep(nextStepNumber, formData, false);
      }
      
      setValidationErrors({});
    }
  };

  const prevStep = () => {
    const prevStepNumber = Math.max(currentStep - 1, 1);
    setCurrentStep(prevStepNumber);
    
    // Track step navigation
    trackFormStep(prevStepNumber, formData, false);
  };

  const handleProceedToPayment = async () => {
    // Check if terms are accepted before proceeding
    if (!formData.termsAccepted) {
      setValidationErrors({ termsAccepted: 'You must accept the terms and conditions to proceed' });
      return;
    }

    setSubmitStatus('submitting');
    setSubmitError('');
    
    try {
      // Track payment initiation
      trackPayment('start', calculateDeposit());

      // Get referral code from localStorage if it exists and is not expired
      let referralCode = null;
      try {
        const storedRef = localStorage.getItem('referralCode');
        const storedExpiry = localStorage.getItem('referralExpiry');
        
        if (storedRef && storedExpiry) {
          const expiryDate = new Date(storedExpiry);
          if (new Date() < expiryDate) {
            referralCode = storedRef;
            console.log('Using referral code for payment:', referralCode);
          } else {
            localStorage.removeItem('referralCode');
            localStorage.removeItem('referralExpiry');
          }
        }
      } catch (error) {
        console.error('Error reading referral code:', error);
      }

      // Create Stripe checkout session
      const checkoutResponse = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: calculateDeposit(),
          email: formData.email,
          name: formData.fullName,
          referralCode: referralCode,
          projectDetails: {
            service: formData.serviceType,
            tier: formData.tier,
            timeline: formData.timeline,
            totalPrice: calculateTotalPrice(),
            deposit: calculateDeposit(),
            description: formData.additionalRequirements,
            phone: formData.phone,
            companyName: formData.companyName,
            companySize: formData.companySize,
            industry: formData.industry
          }
        }),
      });

      if (!checkoutResponse.ok) {
        throw new Error('Failed to create checkout session');
      }

      const { url } = await checkoutResponse.json();
      
      // Track successful form completion before redirect
      trackFormStep(currentStep, formData, true);
      
      window.location.href = url;
    } catch (error) {
      console.error('Error submitting form:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit proposal';
      setSubmitError(errorMessage);
      setSubmitStatus('error');
      
      // Track payment error
      trackPayment('error', calculateDeposit(), errorMessage);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-synvra-gray-200">
          Service Type *
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.serviceType ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        >
          <option value="" className="bg-gray-800 text-white">Select a service</option>
          {services.map(service => (
            <option key={service.id} value={service.id} className="bg-gray-800 text-white">
              {service.name} - {service.description}
            </option>
          ))}
        </select>
        {validationErrors.serviceType && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.serviceType}</p>
        )}
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-synvra-gray-200">Project Type *</label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType || ''}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.projectType ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        >
          <option value="" className="bg-gray-800 text-white">Select project type</option>
          <option value="New Project" className="bg-gray-800 text-white">New Project</option>
          <option value="Existing Project" className="bg-gray-800 text-white">Existing Project</option>
          <option value="Maintenance" className="bg-gray-800 text-white">Maintenance</option>
        </select>
        {validationErrors.projectType && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.projectType}</p>
        )}
      </div>

      <div>
        <label htmlFor="tier" className="block text-sm font-medium text-synvra-gray-200">
          Project Tier *
        </label>
        <select
          id="tier"
          name="tier"
          value={formData.tier}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.tier ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        >
          <option value="" className="bg-gray-800 text-white">Select project tier</option>
          <option value="Basic" className="bg-gray-800 text-white">Basic</option>
          <option value="Complex" className="bg-gray-800 text-white">Complex</option>
        </select>
        {validationErrors.tier && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.tier}</p>
        )}
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-synvra-gray-200">
          Timeline *
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.timeline ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        >
          <option value="" className="bg-gray-800 text-white">Select timeline</option>
          <option value="Standard" className="bg-gray-800 text-white">Standard (1x multiplier)</option>
          <option value="Fast-track" className="bg-gray-800 text-white">Fast-track (1.25x multiplier)</option>
          <option value="Urgent" className="bg-gray-800 text-white">Urgent (1.5x multiplier)</option>
        </select>
        {validationErrors.timeline && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.timeline}</p>
        )}
      </div>

      <div>
        <label htmlFor="additionalRequirements" className="block text-sm font-medium text-synvra-gray-200">
          What do you need built for your business? * <span className="text-synvra-gray-400 text-xs">(min 50 characters)</span>
        </label>
        <textarea
          id="additionalRequirements"
          name="additionalRequirements"
          value={formData.additionalRequirements}
          onChange={handleInputChange}
          rows={4}
          minLength={50}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 resize-none ${
            validationErrors.additionalRequirements ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          placeholder="Describe what you need built for your business. Include key features, functionality, and specific requirements. Be as detailed as possible to help us understand your vision."
          style={{ backgroundColor: 'transparent' }}
        />
        <div className="mt-1 text-sm text-synvra-gray-400 flex justify-between">
          <span>{formData.additionalRequirements.length} / 50 characters minimum</span>
        </div>
        {validationErrors.additionalRequirements && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.additionalRequirements}</p>
        )}
      </div>

      {formData.serviceType && (
        <div className="bg-synvra-black p-4 rounded-md">
          <h3 className="text-lg font-medium text-synvra-white mb-2">Price Estimate</h3>
          <div className="space-y-2">
            <p className="text-synvra-gray-300">
              Base Price: ${calculateBasePrice().toLocaleString()}
            </p>
            <p className="text-synvra-gray-300">
              Timeline Adjustment: {formData.timeline ? timelineMultipliers[formData.timeline] : 1}x
            </p>
            <p className="text-synvra-gray-300">Project Type Adjustment: {projectTypeMultipliers[formData.projectType] || 1}x</p>
            <p className="text-synvra-white font-medium">
              Total Project Cost: ${calculateTotalPrice().toLocaleString()}
            </p>
              <p className="text-synvra-green font-medium">
                Required Deposit: ${calculateDeposit().toLocaleString()}
              </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Remaining Balance:</span>
              <div className="text-right">
                <span className="text-lg font-semibold">${(calculateTotalPrice() - calculateDeposit()).toLocaleString()}</span>
                <div className="text-sm text-blue-600 font-medium">
                  (Installment plans available)
                </div>
              </div>
            </div>
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
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.fullName ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        />
        {validationErrors.fullName && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.fullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="companyName" className="block text-sm font-medium text-synvra-gray-200">
          Company Name *
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.companyName ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        />
        {validationErrors.companyName && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.companyName}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-synvra-gray-200">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.email ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        />
        {validationErrors.email && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-synvra-gray-200">
          Phone *
        </label>
        <PhoneInput
          country={'us'}
          value={formData.phone}
          onChange={handlePhoneChange}
          inputStyle={{
            width: '100%',
            height: '48px',
            backgroundColor: 'transparent',
            color: '#fff',
            border: validationErrors.phone ? '1px solid #ef4444' : '1px solid #6b7280',
            borderRadius: '8px',
            paddingLeft: '48px',
            fontSize: '16px',
            transition: 'all 0.2s ease',
          }}
          dropdownStyle={{
            backgroundColor: '#1f2937',
            color: '#fff',
            border: '1px solid #6b7280',
          }}
          buttonStyle={{
            backgroundColor: 'transparent',
            borderColor: validationErrors.phone ? '#ef4444' : '#6b7280',
            borderRadius: '8px 0 0 8px',
            transition: 'all 0.2s ease',
          }}
          containerClass="phone-input"
          inputClass="focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500"
        />
        {validationErrors.phone && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor="companySize" className="block text-sm font-medium text-synvra-gray-200">
          Company Size *
        </label>
        <select
          id="companySize"
          name="companySize"
          value={formData.companySize}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.companySize ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        >
          <option value="" className="bg-gray-800 text-white">Select company size</option>
          <option value="1-10" className="bg-gray-800 text-white">1-10 employees</option>
          <option value="11-50" className="bg-gray-800 text-white">11-50 employees</option>
          <option value="51-200" className="bg-gray-800 text-white">51-200 employees</option>
          <option value="201-1000" className="bg-gray-800 text-white">201-1000 employees</option>
          <option value="1000+" className="bg-gray-800 text-white">1000+ employees</option>
        </select>
        {validationErrors.companySize && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.companySize}</p>
        )}
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-synvra-gray-200">
          Industry *
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          className={`mt-1 block w-full rounded-lg border bg-transparent px-3 py-3 text-white placeholder-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 ${
            validationErrors.industry ? 'border-red-500' : 'border-gray-600 hover:border-gray-500'
          }`}
          required
          style={{ backgroundColor: 'transparent' }}
        >
          <option value="" className="bg-gray-800 text-white">Select industry</option>
          <option value="Technology" className="bg-gray-800 text-white">Technology</option>
          <option value="Finance" className="bg-gray-800 text-white">Finance</option>
          <option value="Healthcare" className="bg-gray-800 text-white">Healthcare</option>
          <option value="Manufacturing" className="bg-gray-800 text-white">Manufacturing</option>
          <option value="Retail" className="bg-gray-800 text-white">Retail</option>
          <option value="Education" className="bg-gray-800 text-white">Education</option>
          <option value="Other" className="bg-gray-800 text-white">Other</option>
        </select>
        {validationErrors.industry && (
          <p className="mt-1 text-sm text-red-500">{validationErrors.industry}</p>
        )}
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
                <dd className="text-synvra-white">{formData.timeline ? timelineMultipliers[formData.timeline] : 1}x</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-synvra-gray-300">Project Type Adjustment</dt>
                <dd className="text-synvra-white">{projectTypeMultipliers[formData.projectType] || 1}x</dd>
              </div>
              <div className="flex justify-between font-medium">
                <dt className="text-synvra-white">Total Project Cost</dt>
                <dd className="text-synvra-white">${calculateTotalPrice().toLocaleString()}</dd>
              </div>
              <div className="flex justify-between font-medium">
                <dt className="text-synvra-green">Required Deposit</dt>
                <dd className="text-synvra-green">${calculateDeposit().toLocaleString()}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-synvra-gray-300">Remaining Balance</dt>
                <dd className="text-synvra-gray-300">${(calculateTotalPrice() - calculateDeposit()).toLocaleString()}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="bg-synvra-black p-6 rounded-lg">
          <h3 className="text-lg font-medium text-synvra-white mb-4">Terms and Conditions</h3>
          <div className="prose prose-sm text-synvra-gray-300">
            <p>By proceeding with this project, you agree to the following terms:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>We require a ${calculateDeposit().toLocaleString()} Mandatory initial deposit as commitment</li>
              <li>Remaining balance due upon completion (installment plans available)</li>
              <li>Full refund if not satisfied within 30 days</li>
              <li>Project timeline is subject to change based on requirements and feedback</li>
              <li>All intellectual property rights will be transferred upon final payment</li>
              <li>Synvra reserves the right to use the project in its portfolio</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="mb-4">
            <label className="font-semibold text-synvra-blue block mb-2">Privacy Policy</label>
            <div
              className="bg-transparent border border-gray-600 hover:border-gray-500 rounded-lg p-4 text-synvra-gray-200 text-sm transition-all duration-200"
              style={{ maxHeight: '200px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}
            >
              {`Introduction\nAt Synvra, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.\n\nInformation We Collect\nWe collect information using the following tools:\n\nGoogle Analytics: We use Google Analytics to understand how visitors interact with our website. This includes:\nPages visited and time spent on each page\nTechnical information (browser type, device type)\nApproximate geographic location\nReferral sources\n\nHow We Use Your Information\nWe use the collected information to:\nImprove our website and services\nAnalyze user behavior and preferences\nOptimize our content and user experience\nMonitor website performance\n\nCookies\nOur website uses cookies and similar tracking technologies to enhance your browsing experience and collect usage data. These include:\nAnalytics Cookies: Used by Google Analytics to track user interactions and gather usage statistics\nFunctional Cookies: Used to remember your preferences and settings\n\nData Retention\nAnalytics data is retained for 26 months, after which it is automatically deleted. You can opt out of Google Analytics tracking by using the Google Analytics Opt-out Browser Add-on.\n\nYour Rights\nYou have the right to:\nAccess your personal data\nRequest deletion of your data\nObject to our processing of your data\nWithdraw consent at any time\n\nContact Information\nIf you have any questions about our Privacy Policy, please contact us at support@synvra.com\n\nUpdates to This Policy\nWe may update this Privacy Policy from time to time. The latest version will always be available on this page.`}
            </div>
          </div>
          <div>
            <label className="font-semibold text-synvra-blue block mb-2">Terms of Service</label>
            <div
              className="bg-transparent border border-gray-600 hover:border-gray-500 rounded-lg p-4 text-synvra-gray-200 text-sm transition-all duration-200"
              style={{ maxHeight: '200px', overflowY: 'auto', whiteSpace: 'pre-wrap' }}
            >
              {`1. Agreement to Terms\nBy accessing and using Synvra's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.\n\n2. Services\nSynvra provides software development and technology consulting services, including but not limited to:\nCustom software development\nWeb and mobile application development\nAI and machine learning solutions\nCloud computing and DevOps services\nTechnical consulting and support\n\n3. Intellectual Property\nAll content, features, and functionality of our website, including but not limited to text, graphics, logos, and code, are owned by Synvra and are protected by international copyright, trademark, and other intellectual property laws.\n\n4. User Responsibilities\nWhen using our services, you agree to:\nProvide accurate and complete information\nMaintain the confidentiality of any login credentials\nUse our services in compliance with all applicable laws\nNot engage in any unauthorized use of our services\n\n5. Privacy and Data Protection\nOur collection and use of personal information is governed by our Privacy Policy.\n\n6. Limitation of Liability\nSynvra shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.\n\n7. Changes to Terms\nWe reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this site.\n\n8. Contact Information\nFor any questions about these Terms of Service, please contact us at support@synvra.com`}
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3 mb-6">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleInputChange}
            className="h-4 w-4 rounded border-synvra-white focus:ring-synvra-blue"
          />
          <label htmlFor="terms" className="text-sm text-synvra-gray-200">
            I have read and agree to the terms and conditions
          </label>
        </div>
        {validationErrors.termsAccepted && (
          <p className="text-sm text-red-500 mb-4">{validationErrors.termsAccepted}</p>
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
            onClick={handleProceedToPayment}
            className={`px-4 py-2 rounded-md transition-colors ${
              formData.termsAccepted 
                ? 'bg-synvra-blue text-white hover:bg-synvra-blue-dark' 
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
            disabled={submitStatus === 'submitting'}
          >
            {submitStatus === 'submitting' ? 'Submitting...' : 'Proceed to Payment'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <p className="text-synvra-gray-300">Step {currentStep} of {totalSteps}</p>
        <p className="text-synvra-gray-400 text-sm">* Required fields</p>
      </div>

      <div className="bg-synvra-black rounded-lg shadow-synvra-blue/10 p-6">
        {currentStep === 1 && renderStep1()}
        {currentStep === 2 && renderStep2()}
        {currentStep === 3 && renderStep3()}
      </div>
    </div>
  );
} 