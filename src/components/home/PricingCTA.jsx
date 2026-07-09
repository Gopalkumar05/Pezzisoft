import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const PricingCTA = () => {
  const features = [
    'Attendance Management',
    'Payroll Processing',
    'Shift & Overtime',
    'Leave Management',
    'Compliance Reports',
    'Mobile Access',
    'Employee Self-Service',
    '24/7 Support',
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-white to-accent/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-secondary-light mb-6">
              No hidden charges. No surprises. Pay only for what you need.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <FaCheckCircle className="text-success" />
                  <span className="text-secondary">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Start Free Trial</h3>
              <p className="text-secondary-light">No credit card required</p>
              <div className="mt-4">
                <span className="text-4xl font-bold">₹0</span>
                <span className="text-secondary-light"> / first month</span>
              </div>
              <p className="text-sm text-secondary-light mt-2">
                Then ₹499/employee/month
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-2 text-sm">
                <FaCheckCircle className="text-success text-xs" />
                <span className="text-secondary-light">All features included</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FaCheckCircle className="text-success text-xs" />
                <span className="text-secondary-light">Free onboarding support</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <FaCheckCircle className="text-success text-xs" />
                <span className="text-secondary-light">Cancel anytime</span>
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-primary w-full inline-flex items-center justify-center gap-2 group text-lg"
            >
              Start Free Trial
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>

            <p className="text-center text-xs text-secondary-light mt-4">
              🎁 Special discount for annual plans
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;