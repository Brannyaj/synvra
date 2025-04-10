'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const technologies = {
  frontend: [
    { name: 'React', icon: '/tech/react.svg', level: 95 },
    { name: 'Next.js', icon: '/tech/nextjs.svg', level: 90 },
    { name: 'TypeScript', icon: '/tech/typescript.svg', level: 92 },
    { name: 'Tailwind CSS', icon: '/tech/tailwind.svg', level: 88 },
  ],
  backend: [
    { name: 'Node.js', icon: '/tech/nodejs.svg', level: 94 },
    { name: 'Python', icon: '/tech/python.svg', level: 96 },
    { name: 'Go', icon: '/tech/go.svg', level: 85 },
    { name: 'Java', icon: '/tech/java.svg', level: 88 },
  ],
  cloud: [
    { name: 'AWS', icon: '/tech/aws.svg', level: 93 },
    { name: 'Google Cloud', icon: '/tech/gcp.svg', level: 89 },
    { name: 'Azure', icon: '/tech/azure.svg', level: 87 },
    { name: 'Kubernetes', icon: '/tech/kubernetes.svg', level: 91 },
  ],
  ai: [
    { name: 'TensorFlow', icon: '/tech/tensorflow.svg', level: 92 },
    { name: 'PyTorch', icon: '/tech/pytorch.svg', level: 88 },
    { name: 'OpenAI', icon: '/tech/openai.svg', level: 94 },
    { name: 'Scikit-learn', icon: '/tech/scikit.svg', level: 90 },
  ],
};

export default function TechStackVisualizer() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const controls = useAnimation();

  const categories = {
    frontend: 'Frontend Development',
    backend: 'Backend Systems',
    cloud: 'Cloud Infrastructure',
    ai: 'AI & Machine Learning',
  };

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    });
  }, [activeCategory, controls]);

  const handleCategoryChange = async (category: string) => {
    await controls.start({
      opacity: 0,
      y: 20,
      transition: { duration: 0.3 },
    });
    setActiveCategory(category);
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-400">
            Cutting-edge technologies we use to build exceptional solutions
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleCategoryChange(key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Technology Grid */}
        <motion.div
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {technologies[activeCategory as keyof typeof technologies].map((tech) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredTech(tech.name)}
              onHoverEnd={() => setHoveredTech(null)}
              className="relative bg-gray-800 rounded-xl p-6 group cursor-pointer"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-lg p-2">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {tech.name}
                  </h3>
                  <div className="text-sm text-gray-400">
                    Proficiency: {tech.level}%
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
                />
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredTech === tech.name ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 text-blue-400">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
            10+ Years of Technical Excellence
          </div>
        </motion.div>
      </div>
    </section>
  );
}
