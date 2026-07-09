import React from 'react';
import { motion } from 'framer-motion';

const Industries = () => {
  const industries = [
    'Hospitals', 'Manufacturing', 'IT Companies', 'Schools', 
    'Retail', 'Logistics', 'Corporate Offices', 'Healthcare'
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            Best Payroll Software for All Industries
          </h2>
          <p className="text-lg text-secondary-light font-semibold">
            "Suitable for all major industries including IT, manufacturing, healthcare, education, retail, logistics and more."
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry, i) => (
            <motion.span
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-primary/5 border border-primary/20 rounded-lg px-5 py-2.5 text-primary font-medium hover:bg-primary hover:text-white transition-all cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;