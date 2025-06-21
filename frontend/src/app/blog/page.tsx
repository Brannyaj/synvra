'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogIndex() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blogPosts = [
    {
      slug: 'ai-revolution-in-software-development-the-rise-of-code-generation',
      title: 'AI Revolution in Software Development: The Rise of Code Generation',
      excerpt: 'The landscape of software development is undergoing a dramatic transformation, driven by advanced AI models that are revolutionizing how developers write and maintain code.',
      date: 'March 18, 2024',
      time: '14:30 GMT',
      readTime: '5 min read',
      category: 'Artificial Intelligence',
      image: '/blog/ai-code-generation.jpg',
      author: 'Alex Thompson',
      role: 'Senior Technology Writer'
    },
    {
      slug: 'web-development-trends-2024-the-impact-of-webassembly',
      title: 'Web Development Trends 2024: The Impact of WebAssembly',
      excerpt: 'WebAssembly (Wasm) is revolutionizing web development by enabling high-performance applications that were previously only possible in native environments.',
      date: 'March 15, 2024',
      time: '09:45 GMT',
      readTime: '4 min read',
      category: 'Web Development',
      image: '/blog/webassembly-trends.jpg',
      author: 'Sarah Chen',
      role: 'Web Technologies Expert'
    },
    {
      slug: 'the-future-of-cloud-computing-edge-computing-takes-center-stage',
      title: 'The Future of Cloud Computing: Edge Computing Takes Center Stage',
      excerpt: 'Edge computing is revolutionizing how we process and deliver data in cloud environments. By bringing computation closer to data sources, organizations can achieve unprecedented levels of performance.',
      date: 'March 12, 2024',
      time: '11:20 GMT',
      readTime: '6 min read',
      category: 'Cloud Computing',
      image: '/blog/edge-computing.jpg',
      author: 'Michael Zhang',
      role: 'Cloud Architecture Specialist'
    },
    {
      slug: 'cybersecurity-in-2024-zero-trust-architecture-adoption',
      title: 'Cybersecurity in 2024: Zero Trust Architecture Adoption',
      excerpt: 'As cyber threats continue to evolve, organizations are rapidly adopting Zero Trust Architecture (ZTA) as their primary security framework.',
      date: 'March 8, 2024',
      time: '16:15 GMT',
      readTime: '7 min read',
      category: 'Cybersecurity',
      image: '/blog/zero-trust-security.jpg',
      author: 'Alex Rodriguez',
      role: 'Security Solutions Architect'
    }
  ];

  return (
    <main className="min-h-screen bg-synvra-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <header className="mb-16 text-center">
            <h1 className="text-5xl font-bold text-gradient mb-6">
              Latest Tech Insights
            </h1>
            <p className="text-xl text-synvra-gray-300 max-w-2xl mx-auto">
              Stay updated with the latest trends and developments in technology, 
              software development, and digital innovation.
            </p>
          </header>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {blogPosts.map((post) => (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card group overflow-hidden rounded-xl transition-all duration-300 hover:border-synvra-blue/30"
              >
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-synvra-blue mb-3">{post.category}</div>
                  <h2 className="text-2xl font-bold text-synvra-white mb-4 group-hover:text-synvra-blue transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-synvra-gray-300 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-synvra-gray-400">
                    <div>{post.date} • {post.time}</div>
                    <div>{post.readTime}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 