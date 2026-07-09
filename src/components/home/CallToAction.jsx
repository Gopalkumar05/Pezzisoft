// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { FaAngleRight } from 'react-icons/fa';
// import { CONTACT_INFO } from '../../utils/constants';

// const CallToAction = () => {
//   return (
//     <section className="section-padding gradient-hero relative overflow-hidden">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
//       </div>

//       <div className="container-custom relative z-10">
//         <div className="max-w-3xl mx-auto text-center">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold text-white mb-4"
//           >
//             Ready to Simplify Your Payroll Process?
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-xl text-white/90 mb-8"
//           >
//             👉 Book a Demo Today
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-col sm:flex-row justify-center gap-4"
//           >
//             <Link
//               to="/contact"
//               className="btn-accent inline-flex items-center justify-center gap-2 text-lg group"
//             >
//               Book Demo
//               <FaAngleRight className="transition-transform group-hover:translate-x-1" />
//             </Link>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.3 }}
//             viewport={{ once: true }}
//             className="mt-8"
//           >
//             <p className="text-white/80 text-sm">Prefer Email?</p>
//             <a
//               href={`mailto:${CONTACT_INFO.email}`}
//               className="text-white font-semibold hover:text-accent transition-colors"
//             >
//               {CONTACT_INFO.email}
//             </a>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaAngleRight, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { CONTACT_INFO } from '../../utils/constants';

const CallToAction = () => {
  return (
    <section className="section-padding gradient-hero relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-5" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-10" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Get Started Today</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Ready to Transform Your
            <br className="hidden sm:block" />
            Payroll Process?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"
          >
            Join 500+ companies saving time, reducing errors, and ensuring compliance with Pezzi Softech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center justify-center gap-2 text-lg group px-8 py-4"
            >
              🚀 Book Free Demo
              <FaAngleRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary px-8 py-4"
            >
              <FaPhone />
              Call Now
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4 text-white/80"
          >
            <div className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400 text-xl" />
              <a
                href={`https://wa.me/${CONTACT_INFO.phone}`}
                className="hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
            <span className="hidden sm:block opacity-30">|</span>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-accent" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="hover:text-accent transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-10 pt-8 border-t border-white/10"
          >
            <div className="flex justify-center items-center gap-6 text-white/50 text-sm">
              <span>✅ No credit card required</span>
              <span>🆓 Free 14-day trial</span>
              <span>🛡️ 100% secure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;