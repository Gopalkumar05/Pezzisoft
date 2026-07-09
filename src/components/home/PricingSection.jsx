import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaStar } from 'react-icons/fa';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 499, yearly: 399 },
      features: [
        'Attendance Management',
        'Payroll Processing',
        'Leave Management',
        'Employee Self-Service',
        'Mobile App Access',
        'Email Support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: { monthly: 999, yearly: 799 },
      features: [
        'Everything in Starter',
        'Shift & Roster Management',
        'Overtime Calculation',
        'Night Shift Management',
        'Compliance Reports',
        'Priority Support',
        'API Access',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 'Custom', yearly: 'Custom' },
      features: [
        'Everything in Professional',
        'Custom Workflows',
        'Multi-Branch Management',
        'Advanced Analytics',
        'Dedicated Account Manager',
        '24/7 Phone Support',
        'Custom Integrations',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent" />
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Choose the Perfect Plan
          </h2>
          <p className="text-lg text-gray-600">
            Simple, transparent pricing. No hidden charges. Start with a free trial.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'font-semibold' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-14 h-8 bg-primary/20 rounded-full transition-colors"
            >
              <span 
                className={`absolute top-1 w-6 h-6 bg-primary rounded-full transition-all ${
                  billingCycle === 'yearly' ? 'right-1' : 'left-1'
                }`}
              />
            </button>
            <span className={`text-sm ${billingCycle === 'yearly' ? 'font-semibold' : 'text-gray-400'}`}>
              Yearly <span className="text-green-500 text-xs">Save 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${
                plan.popular 
                  ? 'border-2 border-accent scale-105 md:scale-110' 
                  : 'border border-gray-100 hover:scale-105'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-primary font-bold px-6 py-1 rounded-full text-sm">
                  <div className="flex items-center gap-1">
                    <FaStar className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-4xl font-bold">
                    {typeof plan.price[billingCycle] === 'string' 
                      ? plan.price[billingCycle] 
                      : `₹${plan.price[billingCycle]}`}
                  </span>
                  {typeof plan.price[billingCycle] === 'number' && (
                    <span className="text-gray-500">/employee/mo</span>
                  )}
                </div>
                {billingCycle === 'yearly' && typeof plan.price[billingCycle] === 'number' && (
                  <p className="text-sm text-green-500">Billed annually</p>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={plan.name === 'Enterprise' ? '/contact' : '/contact'}
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-accent hover:bg-accent/90 text-primary shadow-lg hover:shadow-xl'
                    : 'bg-primary hover:bg-primary/90 text-white'
                }`}
              >
                {plan.cta}
                <FaArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-center text-xs text-gray-400 mt-4">
                No credit card required. Cancel anytime.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;