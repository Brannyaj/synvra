'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AffiliatePage() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    paymentMethod: 'paypal',
    paymentDetails: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit affiliate application
    console.log('Affiliate application:', formData);
    alert('Thank you for your application! We will review it and get back to you within 24 hours.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="min-h-screen bg-synvra-black">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-4 nav-blur' : 'py-6'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-gradient">Synvra</span>
            </Link>
            <Link href="/" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">💰</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-synvra-white">
              Synvra Affiliate Program
            </h1>
            <p className="text-xl text-synvra-gray-300 max-w-3xl mx-auto">
              Earn 4% commission for every client you refer. Join our affiliate program and 
              start earning money by promoting our premium web development services.
            </p>
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-synvra-white">
              Why Join Our Affiliate Program?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">💵</div>
              <h3 className="text-xl font-bold mb-4 text-synvra-white">High Commission</h3>
              <p className="text-synvra-gray-300">
                Earn 4% commission on every deposit payment. That's $1.00 for every $25 deposit!
              </p>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4 text-synvra-white">Instant Tracking</h3>
              <p className="text-synvra-gray-300">
                Real-time tracking of clicks, conversions, and earnings with detailed analytics.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-4 text-synvra-white">Monthly Payouts</h3>
              <p className="text-synvra-gray-300">
                Get paid monthly via PayPal or bank transfer. Minimum payout threshold: $50.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-synvra-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-synvra-white">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-synvra-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold mb-2 text-synvra-white">Sign Up</h3>
              <p className="text-synvra-gray-300">
                Join our affiliate program with a simple application form.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-synvra-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold mb-2 text-synvra-white">Get Your Link</h3>
              <p className="text-synvra-gray-300">
                Receive your unique tracking link and marketing materials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-synvra-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold mb-2 text-synvra-white">Promote</h3>
              <p className="text-synvra-gray-300">
                Share your link on social media, blogs, or with your network.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-synvra-blue w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold mb-2 text-synvra-white">Earn Money</h3>
              <p className="text-synvra-gray-300">
                Get paid 4% commission when referred clients pay their deposit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-synvra-white">
                Join Our Program
              </h2>
              <p className="text-synvra-gray-300">
                Fill out the form below to apply for our affiliate program. We'll review your application and get back to you within 24 hours.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="glass-card p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-synvra-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-synvra-white mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-synvra-white mb-2">Website/Social Media (Optional)</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                  placeholder="https://your-website.com"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-synvra-white mb-2">Payment Method *</label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white focus:outline-none focus:border-synvra-blue"
                  >
                    <option value="paypal">PayPal</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-synvra-white mb-2">
                    {formData.paymentMethod === 'paypal' ? 'PayPal Email' : 'Bank Account Details'} *
                  </label>
                  <input
                    type={formData.paymentMethod === 'paypal' ? 'email' : 'text'}
                    name="paymentDetails"
                    value={formData.paymentDetails}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                    placeholder={formData.paymentMethod === 'paypal' ? 'paypal@email.com' : 'Account details'}
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full button-primary text-lg py-4"
              >
                Apply Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-synvra-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-synvra-white">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-synvra-white">How much can I earn?</h3>
              <p className="text-synvra-gray-300">
                You earn 4% commission on every deposit payment. Our minimum project cost is $100, 
                so the 25% deposit ($25) earns you $1.00 per referral. With 50 referrals per month, 
                you can earn $50+.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-synvra-white">When do I get paid?</h3>
              <p className="text-synvra-gray-300">
                Payments are processed monthly via PayPal or bank transfer. The minimum payout 
                threshold is $50 to cover transaction fees.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-synvra-white">How long does the tracking last?</h3>
              <p className="text-synvra-gray-300">
                Our tracking cookies last for 60 days, giving your referrals plenty of time to 
                make a decision and book our services.
              </p>
            </div>
            
            <div className="glass-card p-6">
              <h3 className="text-lg font-bold mb-3 text-synvra-white">What marketing materials do you provide?</h3>
              <p className="text-synvra-gray-300">
                We provide banners, social media templates, email templates, and detailed 
                information about our services to help you promote effectively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 