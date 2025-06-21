'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-synvra-black pt-24">
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-12">
            <div className="text-sm text-synvra-blue mb-4">Cybersecurity</div>
            <h1 className="text-4xl font-bold text-gradient mb-6">
              Cybersecurity in 2024: Zero Trust Architecture Adoption
            </h1>
            <div className="flex items-center justify-between text-synvra-gray-400 text-sm">
              <div>March 8, 2024 • 16:15 GMT</div>
              <div>7 min read</div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 glass-card">
            <Image
              src="/blog/zero-trust-security.jpg"
              alt="Zero Trust Security Architecture Visualization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-synvra-gray-300 mb-8 leading-relaxed">
              As cyber threats continue to evolve, organizations are rapidly adopting 
              Zero Trust Architecture (ZTA) as their primary security framework. This 
              paradigm shift is transforming how businesses approach cybersecurity.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Understanding Zero Trust Architecture
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              Zero Trust Architecture operates on the principle of "never trust, always 
              verify." This approach requires all users, whether inside or outside the 
              organization's network, to be authenticated, authorized, and continuously 
              validated before being granted access to applications and data.
            </p>

            <div className="glass-card p-6 my-8">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Core Principles of Zero Trust
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li>• Verify explicitly - Always authenticate and authorize</li>
                <li>• Use least privilege access - Limit user access rights</li>
                <li>• Assume breach - Plan as if the network is already compromised</li>
                <li>• Enable micro-segmentation - Isolate resources and access</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Implementation Challenges
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              While the benefits of Zero Trust are clear, organizations face several 
              challenges during implementation. These include legacy system integration, 
              user experience concerns, and the need for comprehensive identity management.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-synvra-white mb-4">
                  Security Improvements
                </h3>
                <ul className="space-y-2 text-synvra-gray-300">
                  <li>• 85% reduction in breach impact</li>
                  <li>• 75% faster threat detection</li>
                  <li>• 90% better visibility into access patterns</li>
                </ul>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold text-synvra-white mb-4">
                  Operational Benefits
                </h3>
                <ul className="space-y-2 text-synvra-gray-300">
                  <li>• 60% reduction in IT overhead</li>
                  <li>• 40% faster access provisioning</li>
                  <li>• 50% decrease in security incidents</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Best Practices for Implementation
            </h2>
            <ol className="list-decimal list-inside space-y-4 text-synvra-gray-300 mb-8">
              <li>Start with identity and access management</li>
              <li>Implement strong authentication methods</li>
              <li>Deploy network segmentation</li>
              <li>Enable continuous monitoring</li>
              <li>Establish automated response protocols</li>
            </ol>

            <div className="glass-card p-8 my-12">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Key Takeaways
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Zero Trust is becoming the new security standard
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Implementation requires careful planning
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Benefits outweigh implementation challenges
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Continuous monitoring is essential
                </li>
              </ul>
            </div>
          </div>

          {/* Author */}
          <div className="glass-card p-6 mt-12">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/team/security-expert.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-synvra-white">Alex Rodriguez</h3>
                <p className="text-synvra-gray-300">Security Solutions Architect</p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-synvra-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                href="/blog/ai-revolution-in-software-development-the-rise-of-code-generation"
                className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
              >
                <span className="text-sm text-synvra-blue">Artificial Intelligence</span>
                <h3 className="text-xl font-bold text-synvra-white mt-2 group-hover:text-synvra-blue transition-colors">
                  AI Revolution in Software Development: The Rise of Code Generation
                </h3>
              </Link>
              <Link 
                href="/blog/the-future-of-cloud-computing-edge-computing-takes-center-stage"
                className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
              >
                <span className="text-sm text-synvra-blue">Cloud Computing</span>
                <h3 className="text-xl font-bold text-synvra-white mt-2 group-hover:text-synvra-blue transition-colors">
                  The Future of Cloud Computing: Edge Computing Takes Center Stage
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 