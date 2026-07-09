import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="gradient-hero py-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="bg-accent/20 backdrop-blur-sm text-accent px-4 py-1.5 rounded-full text-sm font-medium border border-accent/20">
              🚀 Book a Demo Today
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4"
          >
            Ready to Simplify Your Payroll Process?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90 mb-8"
          >
            👉 Book a Demo Today
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center justify-center gap-2 text-lg group hover:scale-105"
            >
              Book Demo
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <p className="text-white/60 text-sm">Prefer Email?</p>
            <a
              href="mailto:sales@pezzisoftech.com"
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              sales@pezzisoftech.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-white/40 text-sm"
          >
            <span className="flex items-center gap-2">
              <span>✅</span> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span>🆓</span> Free 14-day trial
            </span>
            <span className="flex items-center gap-2">
              <span>🛡️</span> 100% secure
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;