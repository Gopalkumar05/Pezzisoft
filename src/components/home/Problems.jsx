

import React from 'react';
import { motion } from 'framer-motion';
import hrIssueImage from '../../assets/images/HR-issue.png';
const Problems = () => {
  const problems = [
    'Manual attendance mistakes',
    'Wrong overtime calculation',
    'Night shift salary issues',
    'Shift changes not updated',
    'Complex roster management'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <div className="flex justify-center">
              <img 
                src={hrIssueImage} 
                alt="HR Issues" 
                className="max-w-sm rounded-2xl shadow-lg"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              Facing Attendance & Payroll Errors?
            </h2>
            <div className="space-y-3">
              {problems.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100"
                >
                  <span className="text-red-500 font-bold text-lg">✕</span>
                  <span className="text-secondary-light">{p}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
