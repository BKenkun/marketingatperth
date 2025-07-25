import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const pricingFeatures = [
  "Professional campaign setup",
  "Perth-targeted advertising",
  "Weekly impact report",
  "WhatsApp support included",
  "24-hour campaign launch",
  "No setup fees or contracts"
];

const PricingSection = ({ onWhatsAppClick }) => {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible['pricing'] ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple, <span className="text-green-600">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            No hidden fees, no long-term contracts. Just professional results for $100/month.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible['pricing'] ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-blue-500 to-green-500 p-1 rounded-3xl shadow-2xl max-w-md mx-auto"
          >
            <div className="bg-white p-8 rounded-3xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Campaign</h3>
                <div className="mb-6">
                  <span className="text-6xl font-bold text-gray-900">$100</span>
                  <span className="text-xl text-gray-600">/month</span>
                </div>
                
                <div className="space-y-4 mb-8 text-left">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={onWhatsAppClick}
                  className="whatsapp-pulse w-full bg-green-500 hover:bg-green-600 text-white py-4 text-lg font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Start Your Campaign Today
                </Button>
              </div>
            </div>
          </motion.div>

          <p className="text-sm text-gray-500 mt-6">
            ⚡ Limited time: No setup fees for Perth businesses
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;