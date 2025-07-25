import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Users, TrendingUp, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { number: "500+", label: "Perth Businesses Served", icon: Users },
  { number: "300%", label: "Average Traffic Increase", icon: TrendingUp },
  { number: "24hrs", label: "Campaign Launch Time", icon: Clock },
  { number: "95%", label: "Client Satisfaction Rate", icon: Award }
];

const HeroSection = ({ onWhatsAppClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white text-gray-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-50/50"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-blue-100/50 opacity-50 floating-animation"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-green-100/50 opacity-50 floating-animation" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Grow Your Perth Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500 mt-2">$100 Digital Marketing</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Professional campaigns that drive real customers to your door. 
            <span className="font-semibold text-gray-800"> No contracts. No hidden fees. Just results.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
            <Button
              onClick={onWhatsAppClick}
              className="whatsapp-pulse bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105"
              size="lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Start Your $100 Campaign Now
            </Button>
            
            <div className="text-gray-700 text-center">
              <p className="text-sm font-medium">⚡ Campaign live in 24 hours</p>
              <p className="text-sm font-medium">🎯 Perth-focused targeting</p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-800">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;