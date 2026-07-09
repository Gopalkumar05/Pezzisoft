// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaQuoteLeft } from 'react-icons/fa';
// import { TESTIMONIALS } from '../../utils/constants';

// const Testimonials = () => {
//   return (
//     <section className="section-padding bg-background-light">
//       <div className="container-custom">
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-secondary-light">
//             Real experiences from businesses that transformed their payroll process
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {TESTIMONIALS.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-white rounded-xl p-8 shadow-sm card-hover"
//             >
//               <FaQuoteLeft className="text-primary/20 text-4xl mb-4" />
//               <p className="text-secondary-light leading-relaxed mb-6">
//                 "{testimonial.quote}"
//               </p>
//               <div>
//                 <p className="font-semibold text-secondary">{testimonial.name}</p>
//                 <p className="text-sm text-secondary-light">
//                   {testimonial.position}, {testimonial.company}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaQuoteLeft, FaStar } from 'react-icons/fa';
// import { TESTIMONIALS } from '../../utils/constants';

// const Testimonials = () => {
//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="text-center max-w-3xl mx-auto mb-16"
//         >
//           <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
//           <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-secondary-light">
//             Don't just take our word for it. Here's what our clients have to say.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {TESTIMONIALS.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.id}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="bg-background-light rounded-xl p-8 card-hover border border-gray-100"
//             >
//               <div className="flex items-center mb-4">
//                 <div className="flex items-center text-yellow-400">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar key={i} className="w-4 h-4" />
//                   ))}
//                 </div>
//               </div>
//               <FaQuoteLeft className="text-primary/10 text-3xl mb-3" />
//               <p className="text-secondary leading-relaxed mb-6 min-h-[80px]">
//                 "{testimonial.quote}"
//               </p>
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-lg">
//                   {testimonial.name.charAt(0)}
//                 </div>
//                 <div>
//                   <p className="font-semibold text-secondary">{testimonial.name}</p>
//                   <p className="text-sm text-secondary-light">
//                     {testimonial.position}, {testimonial.company}
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaStar, FaQuoteLeft } from 'react-icons/fa';

// const Testimonials = () => {
//   const testimonials = [
//     {
//       quote: 'Pezzi Softech transformed our payroll process. We save 20+ hours monthly!',
//       name: 'Rajesh Kumar',
//       role: 'HR Manager',
//       company: 'Ram Snehi Hospital'
//     },
//     {
//       quote: 'The shift management feature is a game-changer for our manufacturing unit.',
//       name: 'Priya Sharma',
//       role: 'Operations Head',
//       company: 'Assess Infra'
//     },
//     {
//       quote: 'Accurate, fast, and compliant. Best investment we made for our HR team.',
//       name: 'Amit Patel',
//       role: 'CEO',
//       company: 'Perfality'
//     },
//   ];

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             What Our Clients Say
//           </h2>
//           <p className="text-lg text-slate-600">Trusted by 500+ businesses across India</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {testimonials.map((t, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.1 }}
//               className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition"
//             >
//               <div className="flex text-yellow-400 text-sm mb-3">
//                 {[...Array(5)].map((_, j) => <FaStar key={j} />)}
//               </div>
//               <FaQuoteLeft className="text-slate-200 text-2xl mb-3" />
//               <p className="text-slate-700 mb-4">"{t.quote}"</p>
//               <div>
//                 <p className="font-bold text-slate-900">{t.name}</p>
//                 <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;

import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      quote: 'Pezzi Softech transformed our payroll process. We save 20+ hours monthly!',
      name: 'Rajesh Kumar',
      role: 'HR Manager',
      company: 'Ram Snehi Hospital'
    },
    {
      quote: 'The shift management feature is a game-changer for our manufacturing unit.',
      name: 'Priya Sharma',
      role: 'Operations Head',
      company: 'Assess Infra'
    },
    {
      quote: 'Accurate, fast, and compliant. Best investment for our HR team.',
      name: 'Amit Patel',
      role: 'CEO',
      company: 'Perfality'
    },
  ];

  return (
    <section className="py-16 bg-background-light">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-secondary-light">Trusted by 500+ businesses across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm card-hover border border-gray-100"
            >
              <div className="flex text-accent text-sm mb-3">
                {[...Array(5)].map((_, j) => <FaStar key={j} />)}
              </div>
              <FaQuoteLeft className="text-primary/10 text-3xl mb-3" />
              <p className="text-secondary-light mb-4">"{t.quote}"</p>
              <div>
                <p className="font-bold text-secondary">{t.name}</p>
                <p className="text-sm text-secondary-light">{t.role}, {t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;