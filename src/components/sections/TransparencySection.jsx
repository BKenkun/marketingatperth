import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, BarChart2, CreditCard } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const TransparencySection = () => {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="transparency" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible['transparency'] ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparency and <span className="text-blue-600">Costs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the importance of clarity. Here's how we manage your investment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible['transparency'] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg flex items-start space-x-6"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Management Fee</h3>
              <p className="text-gray-600 leading-relaxed">
                Our fixed fee of 100AUD/month covers the creation, management, optimization, and tracking of all your advertising campaigns.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible['transparency'] ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-2xl shadow-lg flex items-start space-x-6"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
              <BarChart2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ad Budget</h3>
              <p className="text-gray-600 leading-relaxed">
                You decide how much to invest. The budget for ads on platforms like Facebook, Instagram, or Google is up to you and adapts to your goals.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible['transparency'] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-lg flex items-start space-x-6"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
            <CreditCard className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Campaign Payment</h3>
            <p className="text-gray-600 leading-relaxed">
              For total transparency and control, campaigns are paid directly from your own credit card. From experience, advertising platforms do not accept prepaid cards. We recommend using a virtual card for added security.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TransparencySection;