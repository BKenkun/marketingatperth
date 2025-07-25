import React from 'react';
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = ({ onWhatsAppClick, onContactClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <span className="text-2xl font-bold text-white">Xusbyte Digital Marketing</span>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Empowering Perth businesses with professional digital marketing campaigns 
              that drive real results. Transparent pricing, proven processes, guaranteed growth.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button
                onClick={onWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <span className="text-lg font-semibold text-white">Contact Info</span>
            <div className="mt-4 space-y-3">
              <div className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Perth, Western Australia</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2" />
                <span>+61 456 534 558</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                <span>xusbyte@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-divider my-8"></div>
        
        <div className="text-center text-gray-400">
          <p>&copy; 2024 Xusbyte Digital Marketing. All rights reserved. | Proudly serving Perth businesses</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;