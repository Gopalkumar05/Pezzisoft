import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { CLIENT_LOGOS } from '../../utils/constants';

// Import Swiper styles
import 'swiper/css';

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white border-t border-b border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
            Trusted by Industry Leaders
          </h3>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="py-4"
          >
            {CLIENT_LOGOS.map((client) => (
              <SwiperSlide key={client.id}>
                <div className="flex items-center justify-center h-20 bg-gray-50 rounded-lg px-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos;