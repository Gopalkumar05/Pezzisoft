import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaBuilding, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    { 
      icon: FaUsers, 
      value: '500+', 
      label: 'Happy Clients',
      suffix: 'Businesses Trust Us'
    },
    { 
      icon: FaBuilding, 
      value: '20K+', 
      label: 'Employees Managed',
      suffix: 'Across Industries'
    },
    { 
      icon: FaClock, 
      value: '20hrs', 
      label: 'Saved Per Month',
      suffix: 'Per HR Manager'
    },
    { 
      icon: FaMoneyBillWave, 
      value: '₹50L+', 
      label: 'Saved in Errors',
      suffix: 'Annual Savings'
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-primary to-primary-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5" />
      
      <div ref={ref} className="container-custom relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group hover:bg-white/20 transition-all">
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <motion.div
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="text-3xl md:text-4xl font-bold text-white mb-1"
                >
                  {stat.value}
                </motion.div>
                <p className="text-white/80 font-medium">{stat.label}</p>
                <p className="text-white/50 text-sm mt-1">{stat.suffix}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;