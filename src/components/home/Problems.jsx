// import React from 'react';
// import { motion } from 'framer-motion';
// import { PROBLEMS } from '../../utils/constants';
// import hrIssueImage from '../../assets/images/HR-issue.png';

// const Problems = () => {
//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="flex justify-center"
//           >
//             <img
//               src={hrIssueImage}
//               alt="HR Issues and Payroll Challenges"
//               className="max-w-full h-auto rounded-2xl"
//               loading="lazy"
//             />
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold mb-6">
//               Facing Attendance & Payroll Errors?
//             </h2>
//             <div className="space-y-4">
//               {PROBLEMS.map((problem, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-3 p-3 rounded-lg bg-red-50 border border-red-100"
//                 >
//                   <span className="text-red-500 text-xl font-bold">✕</span>
//                   <span className="text-secondary-light font-medium">{problem}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Problems;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
// import { PROBLEMS } from '../../utils/constants';
// import hrIssueImage from '../../assets/images/hr-issue.png';

// const Problems = () => {
//   const solutions = [
//     'Automated attendance tracking',
//     'Error-free payroll calculations',
//     'Smart shift & overtime management',
//     '100% compliance with Indian laws',
//   ];

//   return (
//     <section className="section-padding bg-white">
//       <div className="container-custom">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="flex justify-center order-2 lg:order-1"
//           >
//             <div className="relative">
//               <img
//                 src={hrIssueImage}
//                 alt="HR Issues and Payroll Challenges"
//                 className="max-w-full h-auto rounded-2xl shadow-lg"
//                 loading="lazy"
//               />
//               <div className="absolute -bottom-4 -right-4 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
//                 Save 20+ Hours/Month
//               </div>
//             </div>
//           </motion.div>

//           {/* Content */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="order-1 lg:order-2"
//           >
//             <span className="text-accent font-semibold text-sm uppercase tracking-wider">The Problem</span>
//             <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
//               Still Struggling with Payroll Errors?
//             </h2>
//             <p className="text-lg text-secondary-light mb-8">
//               Manual payroll processes are error-prone, time-consuming, and can cost your business dearly.
//             </p>

//             <div className="space-y-4 mb-8">
//               {PROBLEMS.map((problem, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   viewport={{ once: true }}
//                   className="flex items-center space-x-3 p-4 rounded-lg bg-red-50 border border-red-100"
//                 >
//                   <FaTimesCircle className="text-red-500 text-xl flex-shrink-0" />
//                   <span className="text-secondary font-medium">{problem}</span>
//                 </motion.div>
//               ))}
//             </div>

//             <div className="bg-success/5 border border-success/20 rounded-lg p-4">
//               <p className="text-success font-semibold mb-2">✓ Pezzi Softech Solves Everything</p>
//               <div className="grid grid-cols-2 gap-2">
//                 {solutions.map((solution, index) => (
//                   <div key={index} className="flex items-center space-x-2 text-sm text-secondary">
//                     <FaCheckCircle className="text-success text-xs" />
//                     <span>{solution}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Problems;

// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaTimes, FaCheck } from 'react-icons/fa';

// const Problems = () => {
//   const problems = [
//     'Manual attendance errors',
//     'Wrong overtime calculation',
//     'Night shift salary issues',
//     'Complex roster management',
//     'Payroll compliance headaches'
//   ];

//   const solutions = [
//     'Smart attendance tracking',
//     'Auto payroll calculation',
//     'Shift & overtime management',
//     'Easy rostering',
//     '100% compliance ready'
//   ];

//   return (
//     <section className="py-16 bg-slate-50">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
//               Still Struggling with Payroll?
//             </h2>
//             <div className="space-y-3">
//               {problems.map((p, i) => (
//                 <div key={i} className="flex items-center gap-3 text-red-600 bg-red-50 p-3 rounded-lg">
//                   <FaTimes className="text-red-500" />
//                   <span>{p}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
//               Pezzi Softech Solves It All
//             </h2>
//             <div className="space-y-3">
//               {solutions.map((s, i) => (
//                 <div key={i} className="flex items-center gap-3 text-green-600 bg-green-50 p-3 rounded-lg">
//                   <FaCheck className="text-green-500" />
//                   <span>{s}</span>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Problems;

import React from 'react';
import { motion } from 'framer-motion';
import hrIssueImage from '../../assets/images/hr-issue.png';
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
