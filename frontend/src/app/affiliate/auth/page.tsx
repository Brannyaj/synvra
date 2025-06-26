'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AffiliateAuth() {
  const [scrolled, setScrolled] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    // Sign up fields
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    website: '',
    paymentMethod: 'paypal',
    paymentDetails: '',
    // Sign in fields
    loginEmail: '',
    loginPassword: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // TODO: Submit to backend API
    console.log('Sign up data:', {
      name: formData.name,
      email: formData.email,
      website: formData.website,
      paymentMethod: formData.paymentMethod,
      paymentDetails: formData.paymentDetails
    });
    
    alert('Account created successfully! Your application is pending approval. You will receive an email once approved.');
    
    // Reset form
    setFormData({
      ...formData,
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      website: '',
      paymentDetails: ''
    });
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Submit to backend API
    console.log('Sign in data:', {
      email: formData.loginEmail,
      password: formData.loginPassword
    });
    
    // Simulate login check
    if (formData.loginEmail && formData.loginPassword) {
      // TODO: Check if approved
      alert('Login successful! Redirecting to dashboard...');
      // Redirect to dashboard
      window.location.href = '/affiliate/dashboard';
    }
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
            <Link href="/affiliate" className="text-synvra-gray-200 hover:text-synvra-white transition-colors">
              Back to Affiliate Program
            </Link>
          </div>
        </div>
      </nav>

      {/* Auth Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Toggle Buttons */}
            <div className="flex rounded-lg overflow-hidden mb-8 bg-synvra-white/10">
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-3 px-6 font-medium transition-colors ${
                  isSignUp 
                    ? 'bg-synvra-blue text-white' 
                    : 'text-synvra-gray-300 hover:text-white'
                }`}
              >
                Sign Up
              </button>
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-3 px-6 font-medium transition-colors ${
                  !isSignUp 
                    ? 'bg-synvra-blue text-white' 
                    : 'text-synvra-gray-300 hover:text-white'
                }`}
              >
                Sign In
              </button>
            </div>

            {isSignUp ? (
              /* Sign Up Form */
              <div className="glass-card p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-synvra-white mb-2">Join Our Affiliate Program</h1>
                  <p className="text-synvra-gray-300">Create your account and start earning commissions</p>
                </div>

                <form onSubmit={handleSignUp} className="space-y-6">
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

                  <div>
                    <label className="block text-synvra-white mb-2">Password *</label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      minLength={8}
                      className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                      placeholder="Minimum 8 characters"
                    />
                  </div>

                  <div>
                    <label className="block text-synvra-white mb-2">Confirm Password *</label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                      placeholder="Confirm your password"
                    />
                  </div>

                  <div>
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

                  <button
                    type="submit"
                    className="w-full button-primary text-lg py-4"
                  >
                    Create Account
                  </button>
                </form>
              </div>
            ) : (
              /* Sign In Form */
              <div className="glass-card p-8">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-synvra-white mb-2">Welcome Back</h1>
                  <p className="text-synvra-gray-300">Sign in to access your affiliate dashboard</p>
                </div>

                <form onSubmit={handleSignIn} className="space-y-6">
                  <div>
                    <label className="block text-synvra-white mb-2">Email Address</label>
                    <input
                      type="email"
                      name="loginEmail"
                      value={formData.loginEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-synvra-white mb-2">Password</label>
                    <input
                      type="password"
                      name="loginPassword"
                      value={formData.loginPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                      placeholder="Your password"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full button-primary text-lg py-4"
                  >
                    Sign In
                  </button>
                </form>

                <div className="text-center mt-6">
                  <a href="#" className="text-synvra-blue hover:text-synvra-white transition-colors">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <p className="text-synvra-gray-300">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-synvra-blue hover:text-synvra-white transition-colors ml-2"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 