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
            <div className="text-sm text-synvra-blue mb-4">Cloud Computing</div>
            <h1 className="text-4xl font-bold text-gradient mb-6">
              The Future of Cloud Computing: Edge Computing Takes Center Stage
            </h1>
            <div className="flex items-center justify-between text-synvra-gray-400 text-sm">
              <div>March 12, 2024 • 11:20 GMT</div>
              <div>6 min read</div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 glass-card">
            <Image
              src="/blog/edge-computing.jpg"
              alt="Edge Computing Network Visualization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-synvra-gray-300 mb-8 leading-relaxed">
              Edge computing is revolutionizing how we process and deliver data in cloud 
              environments. By bringing computation closer to data sources, organizations 
              can achieve unprecedented levels of performance and reliability.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              The Rise of Edge Computing
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              As IoT devices proliferate and real-time processing becomes crucial, 
              traditional cloud architectures are evolving to incorporate edge computing. 
              This shift is fundamentally changing how we think about distributed systems.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Key Benefits of Edge Computing
            </h2>
            <ul className="list-disc list-inside space-y-4 text-synvra-gray-300 mb-8">
              <li>Reduced latency for real-time applications</li>
              <li>Improved data privacy and security</li>
              <li>Lower bandwidth costs</li>
              <li>Enhanced reliability and redundancy</li>
              <li>Better support for IoT devices</li>
            </ul>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Industry Applications
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              From manufacturing to healthcare, edge computing is enabling new use cases 
              and improving existing processes. Organizations are leveraging edge 
              capabilities to create more responsive and efficient systems.
            </p>

            <div className="glass-card p-6 my-8">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Performance Metrics
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li>• 90% reduction in data transfer latency</li>
                <li>• 60% decrease in bandwidth usage</li>
                <li>• 40% improvement in application response time</li>
                <li>• 70% reduction in cloud processing costs</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Future Developments
            </h2>
            <p className="text-synvra-gray-300 mb-8">
              The future of edge computing looks promising with developments in 5G 
              networks, AI processing at the edge, and enhanced security protocols. 
              These advancements will further expand the capabilities of edge computing.
            </p>

            <div className="glass-card p-8 my-12">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Key Takeaways
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Edge computing is reshaping cloud architecture
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Real-time processing capabilities are expanding
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Cost and efficiency benefits are significant
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Integration with 5G will drive further innovation
                </li>
              </ul>
            </div>
          </div>

          {/* Author */}
          <div className="glass-card p-6 mt-12">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/team/cloud-expert.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-synvra-white">Michael Zhang</h3>
                <p className="text-synvra-gray-300">Cloud Architecture Specialist</p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-synvra-white mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link 
                href="/blog/web-development-trends-2024-the-impact-of-webassembly"
                className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
              >
                <span className="text-sm text-synvra-blue">Web Development</span>
                <h3 className="text-xl font-bold text-synvra-white mt-2 group-hover:text-synvra-blue transition-colors">
                  Web Development Trends 2024: The Impact of WebAssembly
                </h3>
              </Link>
              <Link 
                href="/blog/cybersecurity-in-2024-zero-trust-architecture-adoption"
                className="glass-card p-6 hover:border-synvra-blue/30 transition-all duration-300 group"
              >
                <span className="text-sm text-synvra-blue">Cybersecurity</span>
                <h3 className="text-xl font-bold text-synvra-white mt-2 group-hover:text-synvra-blue transition-colors">
                  Cybersecurity in 2024: Zero Trust Architecture Adoption
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
} 