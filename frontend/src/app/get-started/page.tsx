'use client';

import ProjectProposalForm from '../components/ProjectProposalForm';

export default function GetStarted() {
  return (
    <main className="min-h-screen bg-synvra-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient mb-4">Get Started</h1>
            <p className="text-xl text-synvra-gray-300">
              Calculate your project cost and start your journey with Synvra
            </p>
          </div>
          <ProjectProposalForm />
        </div>
      </div>
    </main>
  );
} 