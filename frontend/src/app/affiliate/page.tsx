'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AffiliatePage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-synvra-white">
              Affiliate Program
            </h1>
            <p className="text-xl text-synvra-gray-300 max-w-3xl mx-auto">
              Earn 4% commission for every client you refer. Join our affiliate program and 
              start earning money by promoting our services.
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
                Earn 4% commission on each referral.
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
                Create your affiliate account and get approved to start earning.
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
                Get paid 4% commission when referred clients purchase our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-synvra-white mb-6">Ready to Start Earning?</h2>
          <p className="text-synvra-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our affiliate program today and start earning commissions on every successful referral.
          </p>
          <a 
            href="https://synvra.firstpromoter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary text-lg px-8 py-4 inline-block"
          >
            Join Affiliate Program
          </a>
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
                You earn 4% commission on every service purchase. Our services start at $2,000 and can range much higher depending on project complexity. 
                For example, a $2,000 project earns you $80, while a $10,000 project earns you $400. Most affiliates earn $200-$1,000+ per month.
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