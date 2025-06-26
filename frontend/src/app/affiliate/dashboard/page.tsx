'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ReferralStats {
  totalReferrals: number;
  successfulReferrals: number;
  totalEarnings: number;
  pendingEarnings: number;
  availableForPayout: number;
  clickThroughRate: number;
}

export default function AffiliateDashboard() {
  const [scrolled, setScrolled] = useState(false);
  const [stats, setStats] = useState<ReferralStats>({
    totalReferrals: 12,
    successfulReferrals: 3,
    totalEarnings: 450.00,
    pendingEarnings: 150.00,
    availableForPayout: 300.00,
    clickThroughRate: 8.5
  });
  const [affiliateCode] = useState('SYN-AF-2024-001');
  const [copySuccess, setCopySuccess] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(`${type} copied!`);
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const generateReferralLink = (page = '') => {
    const baseUrl = 'https://synvra.com';
    return `${baseUrl}${page}?ref=${affiliateCode}`;
  };

  const handlePayout = () => {
    if (stats.availableForPayout >= 50) {
      alert('Payout request submitted! You will receive payment within 5-7 business days.');
      // TODO: Submit payout request to backend
    } else {
      alert('Minimum payout amount is $50. Keep promoting to reach the threshold!');
    }
  };

  const handlePaymentSave = () => {
    if (paymentMethod && paymentDetails) {
      // TODO: Save to backend
      alert('Payment method saved successfully!');
      setShowPaymentForm(false);
    } else {
      alert('Please fill in all payment details.');
    }
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
            <div className="flex items-center space-x-6">
              <span className="text-synvra-gray-300">Welcome, Affiliate!</span>
              <Link href="/affiliate/auth" className="text-synvra-blue hover:text-synvra-white transition-colors">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-synvra-white mb-4">Affiliate Dashboard</h1>
            <p className="text-synvra-gray-300 text-lg">Track your referrals and earnings</p>
            <div className="mt-4 p-4 bg-synvra-white/10 rounded-lg inline-block">
              <span className="text-synvra-gray-300">Your Affiliate Code: </span>
              <span className="text-synvra-blue font-mono text-lg">{affiliateCode}</span>
              <button
                onClick={() => copyToClipboard(affiliateCode, 'Code')}
                className="ml-2 text-synvra-white hover:text-synvra-blue transition-colors"
              >
                📋
              </button>
            </div>
            {copySuccess && (
              <div className="mt-2 text-green-400 text-sm">{copySuccess}</div>
            )}
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-synvra-blue mb-2">{stats.totalReferrals}</div>
              <div className="text-synvra-gray-300">Total Referrals</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{stats.successfulReferrals}</div>
              <div className="text-synvra-gray-300">Successful Referrals</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-synvra-white mb-2">${stats.totalEarnings.toFixed(2)}</div>
              <div className="text-synvra-gray-300">Total Earnings</div>
            </div>
            
            <div className="glass-card p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">{stats.clickThroughRate}%</div>
              <div className="text-synvra-gray-300">Click Through Rate</div>
            </div>
          </div>

          {/* Earnings Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-synvra-white mb-6">Earnings Breakdown</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-synvra-gray-300">Pending Earnings</span>
                  <span className="text-yellow-400 font-bold">${stats.pendingEarnings.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-synvra-gray-300">Available for Payout</span>
                  <span className="text-green-400 font-bold">${stats.availableForPayout.toFixed(2)}</span>
                </div>
                <div className="pt-4 border-t border-synvra-white/20">
                  <button
                    onClick={handlePayout}
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                      stats.availableForPayout >= 50 && paymentMethod
                        ? 'button-primary'
                        : 'bg-synvra-white/10 text-synvra-gray-400 cursor-not-allowed'
                    }`}
                    disabled={stats.availableForPayout < 50 || !paymentMethod}
                  >
                    Request Payout (Min. $50)
                  </button>
                  {!paymentMethod && (
                    <p className="text-sm text-synvra-gray-400 mt-2 text-center">
                      Add payment method first
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-synvra-white mb-6">Payment Settings</h3>
              {!paymentMethod || showPaymentForm ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-synvra-white mb-2">Payment Method</label>
                    <select
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white focus:outline-none focus:border-synvra-blue"
                    >
                      <option value="">Select payment method</option>
                      <option value="paypal">PayPal</option>
                      <option value="bank">Bank Transfer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-synvra-white mb-2">
                      {paymentMethod === 'paypal' ? 'PayPal Email' : 'Bank Account Details'}
                    </label>
                    <input
                      type={paymentMethod === 'paypal' ? 'email' : 'text'}
                      value={paymentDetails}
                      onChange={(e) => setPaymentDetails(e.target.value)}
                      className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                      placeholder={paymentMethod === 'paypal' ? 'paypal@email.com' : 'Account details'}
                    />
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={handlePaymentSave}
                      className="flex-1 button-primary py-2"
                    >
                      Save
                    </button>
                    {paymentMethod && (
                      <button
                        onClick={() => setShowPaymentForm(false)}
                        className="flex-1 bg-synvra-white/10 text-synvra-white py-2 px-4 rounded-lg hover:bg-synvra-white/20 transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-synvra-white/5 rounded-lg">
                    <div className="text-synvra-white font-medium">
                      {paymentMethod === 'paypal' ? 'PayPal' : 'Bank Transfer'}
                    </div>
                    <div className="text-synvra-gray-400 text-sm">
                      {paymentMethod === 'paypal' ? paymentDetails : '••••••••'}
                    </div>
                  </div>
                  <button
                    onClick={() => setShowPaymentForm(true)}
                    className="w-full py-2 px-4 bg-synvra-white/10 text-synvra-white rounded-lg hover:bg-synvra-white/20 transition-colors"
                  >
                    Update Payment Method
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-synvra-white mb-6">Quick Actions</h3>
            <div className="space-y-4">
              <button
                onClick={() => copyToClipboard(generateReferralLink(), 'Homepage link')}
                className="w-full p-4 bg-synvra-white/10 hover:bg-synvra-white/20 rounded-lg text-left transition-colors"
              >
                <div className="font-medium text-synvra-white">Copy Homepage Link</div>
                <div className="text-sm text-synvra-gray-400">Share the main website</div>
              </button>
              
              <button
                onClick={() => copyToClipboard(generateReferralLink('/services'), 'Services link')}
                className="w-full p-4 bg-synvra-white/10 hover:bg-synvra-white/20 rounded-lg text-left transition-colors"
              >
                <div className="font-medium text-synvra-white">Copy Services Link</div>
                <div className="text-sm text-synvra-gray-400">Direct to services page</div>
              </button>
              
              <button
                onClick={() => copyToClipboard(generateReferralLink('/contact'), 'Contact link')}
                className="w-full p-4 bg-synvra-white/10 hover:bg-synvra-white/20 rounded-lg text-left transition-colors"
              >
                <div className="font-medium text-synvra-white">Copy Contact Link</div>
                <div className="text-sm text-synvra-gray-400">Direct to contact form</div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold text-synvra-white mb-6">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-synvra-white/5 rounded-lg">
                <div>
                  <div className="text-synvra-white font-medium">New Referral</div>
                  <div className="text-sm text-synvra-gray-400">Client signed up via your link</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400">+$15.00</div>
                  <div className="text-sm text-synvra-gray-400">2 hours ago</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-synvra-white/5 rounded-lg">
                <div>
                  <div className="text-synvra-white font-medium">Project Completed</div>
                  <div className="text-sm text-synvra-gray-400">Referral project finished</div>
                </div>
                <div className="text-right">
                  <div className="text-green-400">+$120.00</div>
                  <div className="text-sm text-synvra-gray-400">1 day ago</div>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-4 bg-synvra-white/5 rounded-lg">
                <div>
                  <div className="text-synvra-white font-medium">Click Through</div>
                  <div className="text-sm text-synvra-gray-400">Visitor clicked your referral link</div>
                </div>
                <div className="text-right">
                  <div className="text-synvra-gray-400">No earnings</div>
                  <div className="text-sm text-synvra-gray-400">3 days ago</div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Materials */}
          <div className="glass-card p-8 mt-8">
            <h3 className="text-2xl font-bold text-synvra-white mb-6">Marketing Materials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-synvra-white">Sample Posts</h4>
                <div className="bg-synvra-white/5 p-4 rounded-lg">
                  <p className="text-synvra-gray-300 text-sm mb-2">
                    "Just discovered Synvra - they create amazing websites and apps! Check them out: {generateReferralLink()}"
                  </p>
                  <button
                    onClick={() => copyToClipboard(`Just discovered Synvra - they create amazing websites and apps! Check them out: ${generateReferralLink()}`, 'Post')}
                    className="text-synvra-blue hover:text-synvra-white text-sm"
                  >
                    Copy Post
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-synvra-white">Email Templates</h4>
                <div className="bg-synvra-white/5 p-4 rounded-lg">
                  <p className="text-synvra-gray-300 text-sm mb-2">
                    "Hi [Name], I found this great web development company that might help with your project: {generateReferralLink()}"
                  </p>
                  <button
                    onClick={() => copyToClipboard(`Hi [Name], I found this great web development company that might help with your project: ${generateReferralLink()}`, 'Email template')}
                    className="text-synvra-blue hover:text-synvra-white text-sm"
                  >
                    Copy Template
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 