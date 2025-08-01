'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
}

interface CalculatorForm {
  selectedServices: string[];
  projectScope: string;
  timeline: string;
  additionalRequirements: string;
}

export default function ServiceCalculator() {
  const router = useRouter();
  const [formData, setFormData] = useState<CalculatorForm>({
    selectedServices: [],
    projectScope: '',
    timeline: '',
    additionalRequirements: ''
  });
  const [totalCost, setTotalCost] = useState<number>(0);
  const [deposit, setDeposit] = useState<number>(0);

  const services: ServiceOption[] = [
    {
      id: 'enterprise',
      name: 'Enterprise Solutions',
      basePrice: 50000,
      description: 'Custom ERP, CRM, and business process automation'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      basePrice: 75000,
      description: 'Intelligent solutions with advanced AI algorithms'
    },
    {
      id: 'web',
      name: 'Web Applications',
      basePrice: 35000,
      description: 'Scalable, responsive web applications'
    },
    {
      id: 'mobile',
      name: 'Mobile Development',
      basePrice: 45000,
      description: 'Native and cross-platform mobile apps'
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      basePrice: 40000,
      description: 'Cloud infrastructure and DevOps solutions'
    },
    {
      id: 'blockchain',
      name: 'Blockchain',
      basePrice: 60000,
      description: 'Secure blockchain solutions'
    },
    {
      id: 'iot',
      name: 'IoT Solutions',
      basePrice: 55000,
      description: 'Connected device ecosystems'
    },
    {
      id: 'security',
      name: 'Cybersecurity',
      basePrice: 45000,
      description: 'Advanced security solutions'
    },
    {
      id: 'data',
      name: 'Data Engineering',
      basePrice: 50000,
      description: 'Data pipelines and analytics solutions'
    }
  ];

  const projectScopes = [
    { value: 'small', label: 'Small Project (1-3 months)', multiplier: 1 },
    { value: 'medium', label: 'Medium Project (3-6 months)', multiplier: 1.5 },
    { value: 'large', label: 'Large Project (6-12 months)', multiplier: 2 },
    { value: 'enterprise', label: 'Enterprise Project (12+ months)', multiplier: 3 }
  ];

  const timelines = [
    { value: 'standard', label: 'Standard Timeline', multiplier: 1 },
    { value: 'accelerated', label: 'Accelerated Timeline', multiplier: 1.5 },
    { value: 'urgent', label: 'Urgent Timeline', multiplier: 2 }
  ];

  const calculateCost = () => {
    let baseCost = 0;
    
    // Calculate base cost from selected services
    formData.selectedServices.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        baseCost += service.basePrice;
      }
    });

    // Apply scope multiplier
    const scopeMultiplier = projectScopes.find(s => s.value === formData.projectScope)?.multiplier || 1;
    baseCost *= scopeMultiplier;

    // Apply timeline multiplier
    const timelineMultiplier = timelines.find(t => t.value === formData.timeline)?.multiplier || 1;
    baseCost *= timelineMultiplier;

    setTotalCost(baseCost);
    setDeposit(500); // Flat $500 deposit fee for all projects
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const handleSubmit = async () => {
    // Prepare data for Paperform
    const paperformData = {
      services: formData.selectedServices,
      projectScope: formData.projectScope,
      timeline: formData.timeline,
      additionalRequirements: formData.additionalRequirements,
      totalCost,
      deposit
    };

    // Redirect to Paperform with data
    const paperformUrl = `https://paperform.co/your-form-id?data=${encodeURIComponent(JSON.stringify(paperformData))}`;
    router.push(paperformUrl);
  };

  return (
    <div className="glass-card p-8">
      <h2 className="text-2xl font-bold text-synvra-white mb-6">Service Cost Calculator</h2>
      
      <div className="space-y-6">
        {/* Services Selection */}
        <div>
          <h3 className="text-lg font-semibold text-synvra-white mb-4">Select Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map(service => (
              <div
                key={service.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  formData.selectedServices.includes(service.id)
                    ? 'bg-synvra-blue/20 border-synvra-blue'
                    : 'bg-synvra-white/5 border-transparent'
                } border-2`}
                onClick={() => handleServiceToggle(service.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-synvra-white font-medium">{service.name}</h4>
                    <p className="text-synvra-gray-300 text-sm mt-1">{service.description}</p>
                  </div>
                  <div className="text-synvra-blue font-medium">
                    ${service.basePrice.toLocaleString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Scope */}
        <div>
          <h3 className="text-lg font-semibold text-synvra-white mb-4">Project Scope</h3>
          <select
            value={formData.projectScope}
            onChange={(e) => setFormData(prev => ({ ...prev, projectScope: e.target.value }))}
            className="w-full p-3 rounded-lg bg-synvra-white/5 border border-synvra-white/10 text-synvra-white"
          >
            <option value="">Select Project Scope</option>
            {projectScopes.map(scope => (
              <option key={scope.value} value={scope.value}>
                {scope.label}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-lg font-semibold text-synvra-white mb-4">Timeline</h3>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
            className="w-full p-3 rounded-lg bg-synvra-white/5 border border-synvra-white/10 text-synvra-white"
          >
            <option value="">Select Timeline</option>
            {timelines.map(timeline => (
              <option key={timeline.value} value={timeline.value}>
                {timeline.label}
              </option>
            ))}
          </select>
        </div>

        {/* Additional Requirements */}
        <div>
          <h3 className="text-lg font-semibold text-synvra-white mb-4">Additional Requirements</h3>
          <textarea
            value={formData.additionalRequirements}
            onChange={(e) => setFormData(prev => ({ ...prev, additionalRequirements: e.target.value }))}
            className="w-full p-3 rounded-lg bg-synvra-white/5 border border-synvra-white/10 text-synvra-white"
            rows={4}
            placeholder="Describe any additional requirements or specifications..."
          />
        </div>

        {/* Cost Summary */}
        {totalCost > 0 && (
          <div className="glass-card p-6 mt-6">
            <h3 className="text-xl font-bold text-synvra-white mb-4">Cost Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-synvra-gray-300">
                <span>Total Cost:</span>
                <span className="text-synvra-white font-medium">${totalCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-synvra-gray-300">
                <span>Required Deposit (25%):</span>
                <span className="text-synvra-white font-medium">${deposit.toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={calculateCost}
            className="button-secondary flex-1 py-3"
          >
            Calculate Cost
          </button>
          <button
            onClick={handleSubmit}
            disabled={totalCost === 0}
            className={`button-primary flex-1 py-3 ${
              totalCost === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
} 