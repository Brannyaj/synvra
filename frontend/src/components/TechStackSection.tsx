'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = {
  frontend: [
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'Next.js', icon: '/tech/nextjs.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Tailwind CSS', icon: '/tech/tailwind.svg' },
  ],
  backend: [
    { name: 'Node.js', icon: '/tech/nodejs.svg' },
    { name: 'Python', icon: '/tech/python.svg' },
    { name: 'Java', icon: '/tech/java.svg' },
    { name: 'Go', icon: '/tech/go.svg' },
  ],
  cloud: [
    { name: 'AWS', icon: '/tech/aws.svg' },
    { name: 'Azure', icon: '/tech/azure.svg' },
    { name: 'Google Cloud', icon: '/tech/gcp.svg' },
    { name: 'Kubernetes', icon: '/tech/kubernetes.svg' },
  ],
  database: [
    { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
    { name: 'MongoDB', icon: '/tech/mongodb.svg' },
    { name: 'Redis', icon: '/tech/redis.svg' },
    { name: 'Elasticsearch', icon: '/tech/elasticsearch.svg' },
  ],
  ai: [
    { name: 'TensorFlow', icon: '/tech/tensorflow.svg' },
    { name: 'PyTorch', icon: '/tech/pytorch.svg' },
    { name: 'OpenAI', icon: '/tech/openai.svg' },
    { name: 'Hugging Face', icon: '/tech/huggingface.svg' },
  ]
};

export default function TechStackSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, secure, and innovative solutions for our clients.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16">
          {(Object.entries(technologies) as [keyof typeof technologies, typeof technologies[keyof typeof technologies]][]).map(([category, techs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-8 capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {techs.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-16 h-16 relative mb-4">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="text-gray-900 font-medium">{tech.name}</h4>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            And many more technologies to meet your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
