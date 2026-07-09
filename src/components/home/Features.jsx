// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaUserCheck, FaCalculator, FaClock, FaMoneyBillWave } from 'react-icons/fa';
// import { FEATURES } from '../../utils/constants';

// const iconMap = {
//   FaUserCheck,
//   FaCalculator,
//   FaClock,
//   FaMoneyBillWave
// };

// const Features = () => {
//   return (
//     <section className="section-padding bg-background-light">
//       <div className="container-custom">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Smart features that simplify your operations
//           </h2>
//           <p className="text-lg text-secondary-light">
//             Easy to use. Stress-free setup. Just let our software handle the rest!
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {FEATURES.map((feature, index) => {
//             const IconComponent = iconMap[feature.icon];
//             return (
//               <motion.div
//                 key={feature.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="gradient-card rounded-xl p-8 shadow-sm card-hover"
//               >
//                 <div className="flex items-start space-x-4">
//                   <div className="flex-shrink-0">
//                     <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
//                       {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
//                     </div>
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
//                     <p className="text-secondary-light mb-4">{feature.description}</p>
//                     <ul className="space-y-2">
//                       {feature.points.map((point, idx) => (
//                         <li key={idx} className="flex items-start space-x-2 text-sm">
//                           <span className="text-success mt-1">✓</span>
//                           <span className="text-secondary-light">{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;


// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaUserCheck, FaCalculator, FaClock, FaMoneyBillWave, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

// const Features = () => {
//   const features = [
//     { 
//       icon: FaUserCheck, 
//       title: 'Smart Attendance',
//       desc: 'Biometric, mobile & GPS tracking with real-time updates'
//     },
//     { 
//       icon: FaCalculator, 
//       title: 'Auto Payroll',
//       desc: 'Error-free salary calculation with tax & compliance auto-compute'
//     },
//     { 
//       icon: FaClock, 
//       title: 'Shift Management',
//       desc: 'Easy roster, shift swaps, night shift & overtime handling'
//     },
//     { 
//       icon: FaMoneyBillWave, 
//       title: 'Cost Saving',
//       desc: 'Reduce payroll errors and save 20+ hours every month'
//     },
//     { 
//       icon: FaShieldAlt, 
//       title: '100% Compliant',
//       desc: 'Fully compliant with Indian labor laws & regulations'
//     },
//     { 
//       icon: FaMobileAlt, 
//       title: 'Mobile Ready',
//       desc: 'Access from anywhere with our intuitive mobile app'
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
//             Why Choose Pezzi Softech?
//           </h2>
//           <p className="text-lg text-slate-600">
//             Everything you need to manage attendance & payroll effortlessly
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((feature, i) => {
//             const Icon = feature.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.05 }}
//                 className="group bg-white p-6 rounded-xl border border-gray-100 hover:border-yellow-400 hover:shadow-xl transition-all"
//               >
//                 <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-400 transition">
//                   <Icon className="text-yellow-500 text-xl group-hover:text-white transition" />
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
//                 <p className="text-slate-600 text-sm">{feature.desc}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import { FaUserCheck, FaCalculator, FaClock, FaMoneyBillWave, FaShieldAlt, FaMobileAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    { 
      icon: FaUserCheck, 
      title: 'Smart Attendance',
      desc: 'Biometric, mobile & GPS tracking with real-time updates',
      points: ['Real-time check-in/out', 'GPS location tracking', 'Reduce buddy punching']
    },
    { 
      icon: FaCalculator, 
      title: 'Auto Payroll',
      desc: 'Error-free salary calculation with tax & compliance',
      points: ['Auto salary calculation', 'Instant payslip', 'Tax & PF computation']
    },
    { 
      icon: FaClock, 
      title: 'Shift Management',
      desc: 'Easy roster, shift swaps & overtime handling',
      points: ['Flexible shift schedules', 'Rotational & night shifts', 'Avoid roster conflicts']
    },
    { 
      icon: FaMoneyBillWave, 
      title: 'Cost Saving',
      desc: 'Reduce errors and save 20+ hours every month',
      points: ['Auto overtime calculation', 'Night shift allowance', 'Rule-based pay']
    },
    { 
      icon: FaShieldAlt, 
      title: '100% Compliant',
      desc: 'Fully compliant with Indian labor laws',
      points: ['PF & ESI auto-compute', 'Tax compliance', 'Regular updates']
    },
    { 
      icon: FaMobileAlt, 
      title: 'Mobile Ready',
      desc: 'Access from anywhere with our mobile app',
      points: ['Employee self-service', 'Real-time updates', 'Leave & attendance']
    },
  ];

  return (
    <section className="py-16 bg-background-light">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            Smart features that simplify your operations
          </h2>
          <p className="text-lg text-secondary-light">
            Easy to use. Stress-free setup. Just let our software handle the rest!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="gradient-card p-6 rounded-xl shadow-sm card-hover border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-all">
                      <Icon className="text-primary text-xl group-hover:text-white transition-all" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-secondary mb-1">{feature.title}</h3>
                    <p className="text-sm text-secondary-light mb-3">{feature.desc}</p>
                    <ul className="space-y-1">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-secondary-light">
                          <span className="text-accent">✓</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;