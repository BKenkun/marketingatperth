import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { handleWhatsAppClick } from '@/lib/utils';
import HeroSection from '@/components/sections/HeroSection';
import SocialProofSection from '@/components/sections/SocialProofSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TransparencySection from '@/components/sections/TransparencySection';
import PricingSection from '@/components/sections/PricingSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/sections/Footer';

function App() {
  const { toast } = useToast();

  const handleContactClick = () => {
    toast({
      title: "🚧 Contact form coming soon!",
      description: "For now, please use WhatsApp to get in touch instantly! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Xusbyte Digital Marketing - $100 Professional Campaigns for Perth Businesses</title>
        <meta name="description" content="Transform your Perth business with professional digital marketing campaigns for just $100/month. Get more customers, increase traffic, and grow your business with our proven 3-step process." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <HeroSection onWhatsAppClick={handleWhatsAppClick} />
        <SocialProofSection />
        <HowItWorksSection onWhatsAppClick={handleWhatsAppClick} />
        <FeaturesSection />
        <TransparencySection />
        <PricingSection onWhatsAppClick={handleWhatsAppClick} />
        <CtaSection onWhatsAppClick={handleWhatsAppClick} />
        <Footer onWhatsAppClick={handleWhatsAppClick} onContactClick={handleContactClick} />
        <Toaster />
      </div>
    </>
  );
}

export default App;