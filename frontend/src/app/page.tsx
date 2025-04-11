'use client';

export default function Home() {
  return (
    <div className="bg-[#0a192f] min-h-screen">
      {/* Hamburger Menu */}
      <button className="p-4">
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </button>

      {/* Breadcrumb */}
      <div className="px-4">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
      </div>

      {/* Main Content */}
      <div className="px-4 mt-6">
        <h1 className="text-3xl text-white font-bold">
          Transforming Ideas into Digital Excellence
        </h1>
        
        <p className="text-gray-400 text-sm mt-4">
          Delivering game-changing software solutions that drive measurable business growth. Join industry leaders who trust us to transform their vision into market-leading products.
        </p>

        {/* Stats */}
        <div className="mt-4 space-y-0.5">
          <div>
            <span className="text-white">500+</span>
            <span className="text-gray-400 text-sm ml-2">Enterprise Clients</span>
          </div>
          <div>
            <span className="text-white">99.9%</span>
            <span className="text-gray-400 text-sm ml-2">Success Rate</span>
          </div>
          <div>
            <span className="text-white">2x</span>
            <span className="text-gray-400 text-sm ml-2">Development</span>
          </div>
        </div>
      </div>
    </div>
  );
}
