export default function ContractSignedPage() {
  return (
    <div className="min-h-screen bg-synvra-black flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-synvra-black border border-synvra-white/10 rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Contract Signed Successfully!</h1>
        <p className="text-synvra-gray-400 mb-6">
          Thank you for signing the Project Services Agreement. You will receive a copy of the signed contract via email.
        </p>
        <p className="text-synvra-gray-400 mb-8">
          Our team will be in touch with you soon to begin working on your project.
        </p>
        <a
          href="/"
          className="inline-block bg-synvra-primary hover:bg-synvra-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
} 