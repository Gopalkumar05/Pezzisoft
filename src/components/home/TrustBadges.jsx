import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaHeadset, FaAward } from 'react-icons/fa';

const TrustBadges = () => {
  const badges = [
    { icon: FaShieldAlt, label: 'ISO Certified' },
    { icon: FaLock, label: 'Bank-Grade Security' },
    { icon: FaHeadset, label: '24/7 Support' },
    { icon: FaAward, label: 'Best Software Award 2025' },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600 font-medium">{badge.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;