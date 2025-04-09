'use client';

import { motion } from 'framer-motion';
import { 
  RocketLaunchIcon, 
  LightBulbIcon, 
  CpuChipIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Innovative Solutions',
    description: 'We leverage cutting-edge technologies to create innovative solutions that set you apart from the competition.',
    icon: LightBulbIcon,
  },
  {
    name: 'Rapid Development',
    description: 'Our agile development process ensures quick turnaround times without compromising on quality.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Advanced Technology',
    description: 'We use the latest technologies and frameworks to build scalable and future-proof applications.',
    icon: CpuChipIcon,
  },
  {
    name: 'Data-Driven',
    description: 'Make informed decisions with our analytics-driven approach to development and optimization.',
    icon: ChartBarIcon,
  },
];

export default function FeaturesSection() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Choose Us
          </motion.h2>
          <motion.p 
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-500"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We combine technical expertise with creative innovation to deliver exceptional results.
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
