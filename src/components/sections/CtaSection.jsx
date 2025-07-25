import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = ({ onWhatsAppClick }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Ready to Transform Your Perth Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Join 500+ Perth businesses already growing with our $100 digital marketing campaigns. 
            Your competition is already ahead - don't wait any longer.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={onWhatsAppClick}
              className="whatsapp-pulse bg-white text-green-600 hover:bg-gray-100 px-10 py-6 text-xl font-bold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Get Started Now - $100/Month
            </Button>
          </div>

          <div className="text-white text-sm space-y-2">
            <p>✅ Campaign live in 24 hours</p>
            <p>✅ No contracts or hidden fees</p>
            <p>✅ Perth-focused targeting</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;