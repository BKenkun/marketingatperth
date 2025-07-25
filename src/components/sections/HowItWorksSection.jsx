import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const processSteps = [
  {
    step: 1,
    icon: MessageCircle,
    title: "Click WhatsApp",
    description: "Send us a message with your business details and goals"
  },
  {
    step: 2,
    icon: Search,
    title: "Send Materials",
    description: "Share your business info, photos, and target audience preferences"
  },
  {
    step: 3,
    icon: TrendingUp,
    title: "Receive Campaign",
    description: "Get your professional campaign live within 24 hours"
  }
];

const HowItWorksSection = ({ onWhatsAppClick }) => {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible['how-it-works'] ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple <span className="text-green-600">3-Step Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From first contact to live campaign in under 24 hours. No complexity, no confusion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible['how-it-works'] ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center relative"
            >
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              {index < processSteps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-10 -right-6 h-6 w-6 text-gray-400" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible['how-it-works'] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Button
            onClick={onWhatsAppClick}
            className="whatsapp-pulse bg-green-500 hover:bg-green-600 text-white px-10 py-6 text-xl font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
            size="lg"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Get Started Now - Just $100/Month
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;