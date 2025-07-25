import React from 'react';
import { motion } from 'framer-motion';
import { Target, FileText, Shield, Zap, Smartphone, Monitor, Search, HeartHandshake as Handshake } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const features = [
  {
    icon: Target,
    title: "Targeted Local Campaigns",
    description: "Reach Perth customers actively searching for your services"
  },
  {
    icon: FileText,
    title: "Weekly Impact Report",
    description: "Receive a clear weekly report on your campaign's performance and impact."
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description: "No hidden fees - just $100/month for professional campaigns"
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "From WhatsApp message to live campaign in under 24 hours"
  }
];

const FeaturesSection = () => {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible['features'] ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Perth Businesses <span className="text-blue-600">Choose Xusbyte</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional digital marketing made simple, transparent, and affordable for local businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible['features'] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible['features'] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <Handshake className="h-12 w-12 text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Reliability</h3>
            <p className="text-gray-600">Building lasting partnerships with Perth businesses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible['features'] ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="flex justify-center space-x-2 mb-4">
              <Smartphone className="h-8 w-8 text-green-500" />
              <Monitor className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Platform Service</h3>
            <p className="text-gray-600">Reach customers across all digital channels</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible['features'] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="bg-white p-8 rounded-2xl shadow-lg text-center"
          >
            <Search className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Analysis</h3>
            <p className="text-gray-600">Data-driven insights for optimal results</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;