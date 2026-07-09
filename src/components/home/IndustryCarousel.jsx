import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { INDUSTRIES } from '../../utils/constants';

// Import Swiper styles
import 'swiper/css';

const IndustryCarousel = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Best Payroll Software for All Industries
          </h2>
          <p className="text-lg text-secondary-light font-semibold">
            "Suitable for all major industries including IT, manufacturing, healthcare, 
            education, retail, logistics and more."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary/5 border border-primary/20 rounded-lg px-6 py-3 text-primary font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryCarousel;