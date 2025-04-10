'use client';

import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, trends, and expert perspectives on technology and innovation
            </p>
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="text-blue-600 font-semibold mb-4">Featured Article</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  The Future of AI in Enterprise: 2025 and Beyond
                </h2>
                <p className="text-gray-600 mb-6">
                  Explore how artificial intelligence is reshaping enterprise operations and what business leaders need to know to stay ahead.
                </p>
                <div className="flex items-center mb-8">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/team/john-doe.jpg"
                    alt="Author"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">John Doe</p>
                    <p className="text-sm text-gray-500">April 8, 2025 · 10 min read</p>
                  </div>
                </div>
                <a
                  href="/blog/future-of-ai-enterprise"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Read Full Article
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
              <div className="bg-gray-900 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl font-bold mb-4">2025</div>
                  <div className="text-xl">AI Trends</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap gap-4 mb-12">
            {[
              "All",
              "AI & ML",
              "Cloud Computing",
              "Cybersecurity",
              "Web Development",
              "Mobile",
              "DevOps",
              "Innovation"
            ].map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category === "All"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "10 DevOps Best Practices for 2025",
                excerpt: "Learn the latest DevOps practices that are revolutionizing software development and deployment.",
                author: "Jane Smith",
                date: "April 7, 2025",
                readTime: "8 min read",
                category: "DevOps"
              },
              {
                title: "The Rise of Edge Computing",
                excerpt: "How edge computing is transforming data processing and improving application performance.",
                author: "Mike Johnson",
                date: "April 6, 2025",
                readTime: "6 min read",
                category: "Cloud Computing"
              },
              {
                title: "Securing Your Cloud Infrastructure",
                excerpt: "Essential security measures to protect your cloud-based applications and data.",
                author: "Sarah Wilson",
                date: "April 5, 2025",
                readTime: "12 min read",
                category: "Cybersecurity"
              },
              {
                title: "Web3 Development Guide",
                excerpt: "A comprehensive guide to building decentralized applications for the future web.",
                author: "Alex Chen",
                date: "April 4, 2025",
                readTime: "15 min read",
                category: "Web Development"
              },
              {
                title: "Mobile App Design Trends",
                excerpt: "The latest UI/UX design trends shaping the future of mobile applications.",
                author: "Lisa Brown",
                date: "April 3, 2025",
                readTime: "7 min read",
                category: "Mobile"
              },
              {
                title: "Machine Learning in Production",
                excerpt: "Best practices for deploying and maintaining ML models in production environments.",
                author: "David Kim",
                date: "April 2, 2025",
                readTime: "10 min read",
                category: "AI & ML"
              }
            ].map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-6">{post.excerpt}</p>
                  <div className="flex items-center mb-4">
                    <img
                      className="h-8 w-8 rounded-full"
                      src={`/team/${post.author.toLowerCase().replace(' ', '-')}.jpg`}
                      alt={post.author}
                    />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-500">{post.date} · {post.readTime}</p>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <a
                    href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 font-semibold text-sm hover:text-blue-700"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8 opacity-90">
              Subscribe to our newsletter for the latest insights and trends
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
