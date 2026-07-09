import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What industries does Pezzi Softech support?',
      answer: 'Pezzi Softech is designed for all major industries including hospitals, manufacturing, IT companies, schools, retail, logistics, corporate offices, and more. Our software is customizable to meet the unique needs of any industry.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required. You can start your trial immediately and see how Pezzi Softech can transform your payroll process.'
    },
    {
      question: 'How does the shift management work?',
      answer: 'Our software allows you to create and manage multiple shifts, handle shift swaps, manage rotational shifts, night shifts, and automatic overtime calculation. Everything is configurable based on your company policies.'
    },
    {
      question: 'Is the software compliant with Indian laws?',
      answer: 'Yes, Pezzi Softech is 100% compliant with all Indian labor laws including PF, ESI, tax regulations, and other statutory requirements. We regularly update the software to stay compliant with changing regulations.'
    },
    {
      question: 'What support do you offer?',
      answer: 'We provide 24/7 email support, phone support during business hours, and a dedicated account manager for enterprise clients. We also offer free onboarding and training for all new clients.'
    },
    {
      question: 'Can we customize the software for our needs?',
      answer: 'Absolutely! We offer customization for enterprise clients. You can configure workflows, add custom fields, integrate with existing systems, and tailor the software to match your specific business processes.'
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQs</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about Pezzi Softech
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <FaChevronDown 
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-600 leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;