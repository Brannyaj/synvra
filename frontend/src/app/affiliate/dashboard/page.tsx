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

interface UserProfile {
  name: string;
  email: string;
  website: string;
  bio: string;
  phone: string;
  experience: string;
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
  
  // Profile and approval status
  const [approvalStatus, setApprovalStatus] = useState('incomplete'); // 'incomplete', 'pending', 'approved', 'rejected'
  const [profileComplete, setProfileComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    email: '',
    website: '',
    bio: '',
    phone: '',
    experience: ''
  });
  const [showProfileForm, setShowProfileForm] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Load user data from localStorage (from signup)
    try {
      const storedUserData = localStorage.getItem('affiliateUserData');
      if (storedUserData) {
        const userData = JSON.parse(storedUserData);
        setProfile(prev => ({
          ...prev,
          name: userData.name || '',
          email: userData.email || '',
          website: userData.website || ''
        }));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
    
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

  const handleProfileSave = () => {
    if (profile.name && profile.bio && profile.experience) {
      setProfileComplete(true);
      setShowProfileForm(false);
      
      // Check if both profile and payment are complete
      if (paymentMethod && paymentDetails) {
        setApprovalStatus('pending');
        alert('Profile and payment method saved! Your application has been submitted for review. You will receive an email once approved.');
        // TODO: Send email notification to admin
      } else {
        alert('Profile saved! Please add your payment method to submit for review.');
      }
    } else {
      alert('Please fill in all required profile fields (Bio and Marketing Experience are required).');
    }
  };

  const handlePaymentSave = () => {
    if (paymentMethod && paymentDetails) {
      setPaymentComplete(true);
      setShowPaymentForm(false);
      
      // Check if both profile and payment are complete
      if (profileComplete) {
        setApprovalStatus('pending');
        alert('Payment method saved! Your application has been submitted for review. You will receive an email once approved.');
        // TODO: Send email notification to admin
      } else {
        alert('Payment method saved! Please complete your profile to submit for review.');
      }
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
              <span className="text-synvra-gray-300">Welcome back!</span>
              <Link href="/affiliate/auth" className="text-synvra-blue hover:text-synvra-white transition-colors">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Approval Status Banner */}
          {approvalStatus === 'incomplete' && (
            <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <div className="text-yellow-400 text-xl mr-3">⚠️</div>
                <div>
                  <h3 className="text-yellow-400 font-bold">Complete Your Profile</h3>
                  <p className="text-yellow-300">Please complete your profile and add payment method to submit for approval.</p>
                </div>
              </div>
            </div>
          )}

          {approvalStatus === 'pending' && (
            <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <div className="text-blue-400 text-xl mr-3">⏳</div>
                <div>
                  <h3 className="text-blue-400 font-bold">Account Under Review</h3>
                  <p className="text-blue-300">Your application is being reviewed. You'll receive an email once approved. This usually takes 1-2 business days.</p>
                </div>
              </div>
            </div>
          )}

          {approvalStatus === 'approved' && (
            <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <div className="text-green-400 text-xl mr-3">✅</div>
                <div>
                  <h3 className="text-green-400 font-bold">Account Approved!</h3>
                  <p className="text-green-300">Congratulations! You can now start sharing your affiliate links and earning commissions.</p>
                </div>
              </div>
            </div>
          )}

          {/* Profile Completion Section */}
          {(!profileComplete || showProfileForm) && (
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-bold text-synvra-white mb-6">Complete Your Profile</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-synvra-white mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(e) => setProfile({...profile, name: e.target.value})}
                    readOnly
                    className="w-full px-4 py-3 bg-synvra-white/5 border border-synvra-white/20 rounded-lg text-synvra-gray-300 cursor-not-allowed"
                    placeholder="Your full name"
                  />
                  <p className="text-xs text-synvra-gray-400 mt-1">From your signup information</p>
                </div>
                
                <div>
                  <label className="block text-synvra-white mb-2">Email *</label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({...profile, email: e.target.value})}
                    readOnly
                    className="w-full px-4 py-3 bg-synvra-white/5 border border-synvra-white/20 rounded-lg text-synvra-gray-300 cursor-not-allowed"
                    placeholder="your@email.com"
                  />
                  <p className="text-xs text-synvra-gray-400 mt-1">From your signup information</p>
                </div>
                
                <div>
                  <label className="block text-synvra-white mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({...profile, phone: e.target.value})}
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-synvra-white mb-2">Website/Social Media</label>
                  <input
                    type="url"
                    value={profile.website}
                    onChange={(e) => setProfile({...profile, website: e.target.value})}
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                    placeholder="https://your-website.com"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-synvra-white mb-2">Bio/About You *</label>
                  <textarea
                    value={profile.bio}
                    onChange={(e) => setProfile({...profile, bio: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                    placeholder="Tell us about yourself, your audience, and how you plan to promote our services..."
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-synvra-white mb-2">Marketing Experience *</label>
                  <select
                    value={profile.experience}
                    onChange={(e) => setProfile({...profile, experience: e.target.value})}
                    className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white focus:outline-none focus:border-synvra-blue"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="experienced">Experienced (3+ years)</option>
                    <option value="expert">Expert (5+ years)</option>
                  </select>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <button
                  onClick={handleProfileSave}
                  className="button-primary px-6 py-3"
                >
                  Save Profile
                </button>
                {profileComplete && (
                  <button
                    onClick={() => setShowProfileForm(false)}
                    className="bg-synvra-white/10 text-synvra-white px-6 py-3 rounded-lg hover:bg-synvra-white/20 transition-colors"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Show dashboard content only for approved users */}
          {approvalStatus === 'approved' && (
            <>
              {/* Affiliate Code Section */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-synvra-white mb-4">Affiliate Dashboard</h1>
                <div className="inline-flex items-center bg-synvra-white/5 rounded-lg p-4">
                  <span className="text-synvra-gray-300 mr-3">Your Affiliate Code:</span>
                  <code className="bg-synvra-blue/20 text-synvra-blue px-3 py-1 rounded font-mono text-lg mr-3">
                    {affiliateCode}
                  </code>
                  <button
                    onClick={() => copyToClipboard(affiliateCode, 'Affiliate code')}
                    className="text-synvra-blue hover:text-synvra-white transition-colors"
                  >
                    📋 Copy
                  </button>
                  {copySuccess && copySuccess.includes('Affiliate code') && (
                    <span className="text-green-400 ml-2">Copied!</span>
                  )}
                </div>
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
                  <div className="text-synvra-gray-300">Click-Through Rate</div>
                </div>
              </div>
            </>
          )}

          {/* Earnings and Payment Section - Show for all users but disable for non-approved */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-synvra-white mb-6">Earnings Breakdown</h3>
              {approvalStatus === 'approved' ? (
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
              ) : (
                <div className="text-center py-8">
                  <div className="text-synvra-gray-400 text-4xl mb-4">💰</div>
                  <p className="text-synvra-gray-400">Earnings will appear here once your account is approved</p>
                </div>
              )}
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
                      <option value="paypal">PayPal (Global)</option>
                      <option value="wise">Wise (International Bank Transfer)</option>
                      <option value="bank">Local Bank Transfer</option>
                      <option value="crypto">Cryptocurrency (USDC/USDT)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-synvra-white mb-2">
                      {paymentMethod === 'paypal' && 'PayPal Email Address'}
                      {paymentMethod === 'wise' && 'Wise Account Email'}
                      {paymentMethod === 'bank' && 'Bank Account Details'}
                      {paymentMethod === 'crypto' && 'Crypto Wallet Address'}
                      {!paymentMethod && 'Payment Details'}
                    </label>
                    {paymentMethod === 'bank' ? (
                      <textarea
                        value={paymentDetails}
                        onChange={(e) => setPaymentDetails(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                        placeholder="Bank Name:&#10;Account Number:&#10;Routing/SWIFT Code:&#10;Account Holder Name:&#10;Address:"
                      />
                    ) : (
                      <input
                        type={paymentMethod === 'paypal' || paymentMethod === 'wise' ? 'email' : 'text'}
                        value={paymentDetails}
                        onChange={(e) => setPaymentDetails(e.target.value)}
                        className="w-full px-4 py-3 bg-synvra-white/10 border border-synvra-white/20 rounded-lg text-synvra-white placeholder-synvra-gray-400 focus:outline-none focus:border-synvra-blue"
                        placeholder={
                          paymentMethod === 'paypal' ? 'your-paypal@email.com' :
                          paymentMethod === 'wise' ? 'your-wise@email.com' :
                          paymentMethod === 'crypto' ? '0x... or wallet address' :
                          'Enter payment details'
                        }
                      />
                    )}
                  </div>
                  
                  {paymentMethod && (
                    <div className="bg-synvra-white/5 p-4 rounded-lg">
                      <div className="text-sm text-synvra-gray-300">
                        {paymentMethod === 'paypal' && '💡 PayPal is available in 200+ countries and supports multiple currencies.'}
                        {paymentMethod === 'wise' && '💡 Wise offers low-fee international transfers to 80+ countries.'}
                        {paymentMethod === 'bank' && '💡 Local bank transfers are available for most countries. Processing may take 3-5 business days.'}
                        {paymentMethod === 'crypto' && '💡 Crypto payments (USDC/USDT) are instant and available globally. Polygon network for low fees.'}
                      </div>
                    </div>
                  )}
                  
                  <div className="flex space-x-3">
                    <button
                      onClick={handlePaymentSave}
                      className="flex-1 button-primary py-2"
                    >
                      Save Payment Method
                    </button>
                    {paymentComplete && (
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
                    <div className="text-synvra-white font-medium mb-1">
                      {paymentMethod === 'paypal' && '💳 PayPal'}
                      {paymentMethod === 'wise' && '🌍 Wise Transfer'}
                      {paymentMethod === 'bank' && '🏦 Bank Transfer'}
                      {paymentMethod === 'crypto' && '₿ Cryptocurrency'}
                    </div>
                    <div className="text-synvra-gray-400 text-sm">
                      {paymentMethod === 'paypal' && paymentDetails}
                      {paymentMethod === 'wise' && paymentDetails}
                      {paymentMethod === 'bank' && '••••••••'}
                      {paymentMethod === 'crypto' && `${paymentDetails.slice(0, 6)}...${paymentDetails.slice(-4)}`}
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

          {/* Show affiliate tools only for approved users */}
          {approvalStatus === 'approved' && (
            <>
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
            </>
          )}
        </div>
      </div>
    </main>
  );
} 