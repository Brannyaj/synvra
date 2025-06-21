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
            <div className="text-sm text-synvra-blue mb-4">Artificial Intelligence</div>
            <h1 className="text-4xl font-bold text-gradient mb-6">
              AI Revolution in Software Development: The Rise of Code Generation
            </h1>
            <div className="flex items-center justify-between text-synvra-gray-400 text-sm">
              <div>March 18, 2024 • 14:30 GMT</div>
              <div>5 min read</div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-12 glass-card">
            <Image
              src="/blog/ai-code-generation.jpg"
              alt="AI Code Generation Visualization"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-synvra-gray-300 mb-8 leading-relaxed">
              The landscape of software development is undergoing a dramatic transformation, 
              driven by advanced AI models that are revolutionizing how developers write and 
              maintain code. This shift promises to enhance productivity while reducing errors 
              and technical debt.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              The Current State of AI in Development
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              Modern AI-powered development tools are becoming increasingly sophisticated, 
              offering capabilities that range from intelligent code completion to entire 
              function generation. These tools analyze patterns in vast codebases to suggest 
              contextually appropriate solutions.
            </p>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Key Benefits of AI-Assisted Development
            </h2>
            <ul className="list-disc list-inside space-y-4 text-synvra-gray-300 mb-8">
              <li>Increased developer productivity through automated code generation</li>
              <li>Reduced error rates with AI-powered code review and analysis</li>
              <li>Faster prototyping and iteration cycles</li>
              <li>Improved code quality and consistency</li>
              <li>Enhanced documentation and code maintainability</li>
            </ul>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Real-World Applications
            </h2>
            <p className="text-synvra-gray-300 mb-6">
              Companies across the industry are already leveraging AI-powered development 
              tools to accelerate their software delivery pipelines. From startups to 
              enterprise organizations, the adoption of these technologies is showing 
              promising results in terms of efficiency and code quality.
            </p>

            <div className="glass-card p-6 my-8">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Impact Statistics
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li>• 40% reduction in development time</li>
                <li>• 60% decrease in common coding errors</li>
                <li>• 45% improvement in code review efficiency</li>
                <li>• 30% reduction in technical debt</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-synvra-white mt-12 mb-6">
              Looking Ahead
            </h2>
            <p className="text-synvra-gray-300 mb-8">
              As AI technology continues to evolve, we can expect even more advanced 
              capabilities in code generation and analysis. The future of software 
              development will likely see a deeper integration of AI assistants, 
              potentially revolutionizing how we approach software engineering.
            </p>

            <div className="glass-card p-8 my-12">
              <h3 className="text-xl font-bold text-synvra-white mb-4">
                Key Takeaways
              </h3>
              <ul className="space-y-4 text-synvra-gray-300">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  AI is transforming the software development landscape
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Developers are seeing significant productivity gains
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  Code quality and consistency are improving
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-synvra-blue rounded-full mr-3" />
                  The future holds even more potential for AI in development
                </li>
              </ul>
            </div>
          </div>

          {/* Author */}
          <div className="glass-card p-6 mt-12">
            <div className="flex items-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src="/team/tech-writer.jpg"
                  alt="Author"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-synvra-white">Alex Thompson</h3>
                <p className="text-synvra-gray-300">Senior Technology Writer</p>
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