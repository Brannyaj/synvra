'use client';

import { motion } from 'framer-motion';

export default function SystemStatus() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
              <h1 className="text-4xl font-bold text-gray-900">All Systems Operational</h1>
            </div>
            <p className="text-xl text-gray-600">
              Current status and historical uptime data for all Synvra services
            </p>
          </div>

          {/* Current Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                metric: "Uptime",
                value: "99.99%",
                status: "optimal",
                description: "Last 30 days"
              },
              {
                metric: "Response Time",
                value: "45ms",
                status: "good",
                description: "Global average"
              },
              {
                metric: "Error Rate",
                value: "0.01%",
                status: "optimal",
                description: "Last 24 hours"
              }
            ].map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-medium text-gray-500 mb-2">{metric.metric}</h3>
                <div className="flex items-center mb-2">
                  <span className="text-4xl font-bold text-gray-900 mr-2">{metric.value}</span>
                  <div className={`w-3 h-3 rounded-full ${
                    metric.status === 'optimal' ? 'bg-green-500' :
                    metric.status === 'good' ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`}></div>
                </div>
                <p className="text-sm text-gray-500">{metric.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Service Status */}
          <div className="bg-white rounded-xl shadow-lg mb-16">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Status</h2>
              <div className="space-y-4">
                {[
                  {
                    service: "API",
                    status: "operational",
                    latency: "42ms",
                    lastIncident: "None"
                  },
                  {
                    service: "Web Dashboard",
                    status: "operational",
                    latency: "89ms",
                    lastIncident: "3 days ago"
                  },
                  {
                    service: "Database Clusters",
                    status: "operational",
                    latency: "35ms",
                    lastIncident: "7 days ago"
                  },
                  {
                    service: "Authentication",
                    status: "operational",
                    latency: "56ms",
                    lastIncident: "None"
                  },
                  {
                    service: "Storage",
                    status: "operational",
                    latency: "67ms",
                    lastIncident: "14 days ago"
                  },
                  {
                    service: "CDN",
                    status: "operational",
                    latency: "28ms",
                    lastIncident: "None"
                  }
                ].map((service, index) => (
                  <motion.div
                    key={service.service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full ${
                        service.status === 'operational' ? 'bg-green-500' :
                        service.status === 'degraded' ? 'bg-yellow-500' :
                        'bg-red-500'
                      } mr-4`}></div>
                      <span className="font-medium text-gray-900">{service.service}</span>
                    </div>
                    <div className="flex items-center space-x-8">
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Latency:</span> {service.latency}
                      </div>
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Last Incident:</span> {service.lastIncident}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Incident History */}
          <div className="bg-white rounded-xl shadow-lg mb-16">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Incidents</h2>
              <div className="space-y-6">
                {[
                  {
                    date: "April 7, 2025",
                    title: "API Performance Degradation",
                    duration: "23 minutes",
                    description: "Temporary increase in API response times affecting 5% of requests.",
                    status: "resolved"
                  },
                  {
                    date: "April 3, 2025",
                    title: "Database Maintenance",
                    duration: "45 minutes",
                    description: "Scheduled maintenance causing brief connection interruptions.",
                    status: "resolved"
                  },
                  {
                    date: "March 28, 2025",
                    title: "CDN Optimization",
                    duration: "15 minutes",
                    description: "Performance optimization of CDN configuration.",
                    status: "resolved"
                  }
                ].map((incident, index) => (
                  <motion.div
                    key={incident.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-l-4 border-green-500 pl-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{incident.title}</h3>
                      <span className="px-2 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                        {incident.status}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{incident.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-4">{incident.date}</span>
                      <span>Duration: {incident.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to receive notifications about system status and incidents
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
