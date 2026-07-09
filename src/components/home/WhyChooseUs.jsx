import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaMobileAlt, FaHeadset, FaRocket, FaChartLine, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FaShieldAlt,
      title: '100% Compliance Ready',
      description: 'Stay compliant with Indian labor laws, PF, ESI, and tax regulations automatically.',
    },
    {
      icon: FaMobileAlt,
      title: 'Mobile-First Design',
      description: 'Manage attendance and approvals from anywhere with our intuitive mobile app.',
    },
    {
      icon: FaHeadset,
      title: '24/7 Expert Support',
      description: 'Get instant help from our payroll experts whenever you need it.',
    },
    {
      icon: FaRocket,
      title: '10x Faster Processing',
      description: 'Process payroll for 1000+ employees in just minutes, not days.',
    },
    {
      icon: FaChartLine,
      title: 'Real-Time Analytics',
      description: 'Get actionable insights with powerful dashboards and reports.',
    },
    {
      icon: FaUsers,
      title: 'Employee Self-Service',
      description: 'Empower employees with self-service portal for leave, attendance, and payslips.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Pezzi Softech</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Built Different. Built Better.
          </h2>
          <p className="text-lg text-secondary-light">
            Here's why 500+ companies trust us to handle their most critical HR operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-background-light rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-secondary-light">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;