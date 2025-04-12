export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Navigation */}
      <nav className="fixed w-full z-50 nav-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-gradient">Synvra</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
              <a href="#work" className="text-white hover:text-blue-400 transition-colors">Work</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 float-animation">
            Transforming Ideas into{' '}
            <span className="text-gradient">Digital Excellence</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Delivering game-changing software solutions that drive measurable business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors glow-effect">
              Get Started
            </button>
            <button className="px-8 py-3 gradient-border text-white rounded-lg hover:opacity-80 transition-opacity">
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="w-full py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Web Development',
                description: 'Modern, responsive websites built with cutting-edge technology.',
                icon: '🌐'
              },
              {
                title: 'Mobile Apps',
                description: 'Native and cross-platform mobile applications.',
                icon: '📱'
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable and secure cloud infrastructure.',
                icon: '☁️'
              }
            ].map((service, index) => (
              <div key={index} className="glass-effect p-6 rounded-lg hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-gray-200">Let's discuss how we can help you achieve your goals.</p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-bold">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
