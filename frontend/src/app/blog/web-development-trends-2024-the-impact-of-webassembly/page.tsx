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
            <div className="text-sm text-synvra-blue mb-4">Web Development</div>
            <h1 className="text-4xl font-bold text-gradient mb-6">
              Web Development Trends 2024: The Impact of WebAssembly
            </h1>
            <div className="flex items-center justify-between text-synvra-gray-400 text-sm">
              <div>March 15, 2024 • 09:45 GMT</div>
              <div>4 min read</div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 glass-card">
            <Image
              src="/blog/webassembly-trends.jpg"
              alt="WebAssembly Trends Visualization"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-synvra-gray-300 mb-8 leading-relaxed">
              WebAssembly (Wasm) is revolutionizing web development by enabling high-performance 
              applications that were previously only possible in native environments. This 
              technology is reshaping how we think about browser-based computing.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              The Evolution of WebAssembly
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              Since its introduction, WebAssembly has grown from a promising experiment to 
              a crucial technology in modern web development. Its ability to run code at 
              near-native speed has opened new possibilities for web applications.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Key Advantages of WebAssembly
            </h2>
            <ul className="list-disc list-inside space-y-4 text-synvra-gray-300 mb-8">
              <li>Near-native performance for web applications</li>
              <li>Support for multiple programming languages</li>
              <li>Improved security through sandboxed execution</li>
              <li>Seamless integration with existing web technologies</li>
              <li>Reduced load times and better user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Real-World Applications
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              WebAssembly is finding applications across various domains, from gaming and 
              multimedia processing to scientific computing and data visualization. Major 
              companies are increasingly adopting Wasm for performance-critical applications.
            </p>

            <div className="glass-card p-6 my-8">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Performance Improvements
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li>• Up to 20x faster execution compared to JavaScript</li>
                <li>• 50% reduction in load times for complex applications</li>
                <li>• 30% improvement in memory efficiency</li>
                <li>• Near-instant startup times</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Future Prospects
            </h2>
            <p className="text-synvra-gray-300 mb-8">
              The future of WebAssembly looks promising, with ongoing developments in 
              garbage collection, direct DOM access, and multi-threading support. These 
              advancements will further expand its capabilities and use cases.
            </p>

            <div className="glass-card p-8 my-12">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Key Takeaways
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  WebAssembly is transforming web application performance
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Multi-language support enables broader adoption
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Security and integration capabilities are improving
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Future developments will expand its potential
                </li>
              </ul>
            </div>
          </div>

          {/* Author */}
          <div className="glass-card p-6 mt-12">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/team/web-expert.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-synvra-white">Sarah Chen</h3>
                <p className="text-synvra-gray-300">Web Technologies Expert</p>
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