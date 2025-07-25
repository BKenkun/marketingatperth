import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const testimonials = [
  {
    name: "Sarah Mitchell",
    business: "Mitchell's Café, Fremantle",
    image: "Professional woman in café setting with warm smile",
    rating: 5,
    text: "Xusbyte transformed our online presence! We went from 5 customers a day to 50+ within just 2 weeks. The $20 investment was the best decision we made!"
  },
  {
    name: "David Chen",
    business: "Chen's Auto Repair, Joondalup",
    image: "Confident mechanic in modern auto shop",
    rating: 5,
    text: "I was skeptical about digital marketing, but Xusbyte's simple 3-step process delivered real results. My phone hasn't stopped ringing!"
  },
  {
    name: "Emma Rodriguez",
    business: "Bella Beauty Salon, Subiaco",
    image: "Stylish salon owner with satisfied expression",
    rating: 5,
    text: "The transparency and fixed pricing gave me confidence. Now I have a waiting list of clients thanks to their targeted campaigns!"
  }
];

const TestimonialCard = ({ testimonial, isVisible, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="testimonial-card bg-white p-8 rounded-2xl shadow-lg"
  >
    <div className="flex items-center mb-6">
      {testimonial.name === "Sarah Mitchell" && <img  className="w-16 h-16 rounded-full object-cover mr-4" alt="Sarah Mitchell testimonial photo" src="https://images.unsplash.com/photo-1691334690296-6ace91fd9204" />}
      {testimonial.name === "David Chen" && <img  className="w-16 h-16 rounded-full object-cover mr-4" alt="David Chen testimonial photo" src="https://images.unsplash.com/photo-1599548199555-7994a155bf54" />}
      {testimonial.name === "Emma Rodriguez" && <img  className="w-16 h-16 rounded-full object-cover mr-4" alt="Emma Rodriguez testimonial photo" src="https://images.unsplash.com/photo-1573497161529-95eb65b7a2fb" />}
      <div>
        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.business}</p>
        <div className="flex mt-1">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
          ))}
        </div>
      </div>
    </div>
    <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
  </motion.div>
);

const SocialProofSection = () => {
  const isVisible = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="social-proof" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible['social-proof'] ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">500+ Perth Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real Perth business owners who transformed their growth with our $100 campaigns
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              testimonial={testimonial} 
              isVisible={isVisible['social-proof']} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;