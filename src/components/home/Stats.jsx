// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaUsers, FaBuilding, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// const Stats = () => {
//   const stats = [
//     { icon: FaUsers, value: '500+', label: 'Happy Clients', color: 'text-blue-500' },
//     { icon: FaBuilding, value: '20K+', label: 'Employees Managed', color: 'text-green-500' },
//     { icon: FaClock, value: '20hrs', label: 'Saved Per Month', color: 'text-purple-500' },
//     { icon: FaMoneyBillWave, value: '₹50L+', label: 'Saved in Errors', color: 'text-orange-500' },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-b from-primary to-primary/95 relative overflow-hidden">
//       <div className="container-custom">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={stat.label}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="text-center"
//               >
//                 <div className="flex justify-center mb-3">
//                   <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
//                     <Icon className={`w-7 h-7 ${stat.color}`} />
//                   </div>
//                 </div>
//                 <motion.div
//                   initial={{ scale: 0.5 }}
//                   whileInView={{ scale: 1 }}
//                   transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
//                   viewport={{ once: true }}
//                   className="text-3xl md:text-4xl font-bold text-white mb-1"
//                 >
//                   {stat.value}
//                 </motion.div>
//                 <p className="text-white/70 text-sm">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaUsers, FaBuilding, FaClock, FaMoneyBillWave } from 'react-icons/fa';

// const Stats = () => {
//   const stats = [
//     { icon: FaUsers, value: '500+', label: 'Happy Clients', color: 'text-blue-400' },
//     { icon: FaBuilding, value: '20K+', label: 'Employees', color: 'text-green-400' },
//     { icon: FaClock, value: '20hrs', label: 'Saved Monthly', color: 'text-purple-400' },
//     { icon: FaMoneyBillWave, value: '₹50L+', label: 'Saved', color: 'text-yellow-400' },
//   ];

//   return (
//     <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {stats.map((stat, i) => {
//             const Icon = stat.icon;
//             return (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1 }}
//                 className="text-center"
//               >
//                 <Icon className={`${stat.color} text-3xl mx-auto mb-3`} />
//                 <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
//                 <div className="text-white/60 text-sm">{stat.label}</div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;

import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBuilding, FaClock, FaMoneyBillWave } from 'react-icons/fa';

const Stats = () => {
  const stats = [
    { icon: FaUsers, value: '500+', label: 'Happy Clients', color: 'text-accent' },
    { icon: FaBuilding, value: '20K+', label: 'Employees Managed', color: 'text-primary-light' },
    { icon: FaClock, value: '20hrs', label: 'Saved Per Month', color: 'text-success' },
    { icon: FaMoneyBillWave, value: '₹50L+', label: 'Saved in Errors', color: 'text-accent' },
  ];

  return (
    <section className="py-12 bg-background-light">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all">
                    <Icon className={`${stat.color} text-xl group-hover:scale-110 transition-transform`} />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-secondary">{stat.value}</div>
                <div className="text-secondary-light/70 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;