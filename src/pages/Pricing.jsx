import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaStar, 
  FaCheck, 
  FaTimes, 
  FaStarHalfAlt,
  FaAngleRight,
  FaUsers,
  FaBuilding,
  FaChartBar,
  FaClock,
  FaMoneyBillWave,
  FaUserCheck,
  FaCalculator
} from 'react-icons/fa';
import { 
  PRICING_PLANS, 
  FEATURES_MATRIX, 
  DETAILED_FEATURES_MATRIX 
} from '../utils/constants';

const Pricing = () => {
  const [activeTab, setActiveTab] = useState('plans');
  const [hoveredPlan, setHoveredPlan] = useState(null);

  // Get icon component
  const getIcon = (iconName) => {
    const icons = {
      FaStar,
      FaStarHalfAlt,
      FaUsers,
      FaBuilding,
      FaChartBar,
      FaClock,
      FaMoneyBillWave,
      FaUserCheck,
      FaCalculator
    };
    return icons[iconName] || FaStar;
  };

  // Render cell value
  const renderCellValue = (value) => {
    if (value === true) {
      return <FaCheck className="text-green-500 w-5 h-5" />;
    }
    if (value === false) {
      return <FaTimes className="text-red-500 w-5 h-5" />;
    }
    return <span className="text-sm  font-medium">{value}</span>;
  };

  // Get status color
  const getStatusColor = (value) => {
    if (value === true) return 'text-green-500';
    if (value === false) return 'text-red-500';
    return 'text-secondary-light';
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Affordable Payroll Software Plans | Pezzi Softech</title>
        <meta 
          name="description" 
          content="Choose the right payroll software plan for your business. Affordable pricing for all business sizes. Start your free demo today." 
        />
        <link rel="canonical" href="https://www.pezzisoftech.com/pricing/" />
        <meta property="og:title" content="Pricing - Affordable Payroll Software Plans" />
        <meta 
          property="og:description" 
          content="Choose the right payroll software plan for your business. Affordable pricing for all business sizes." 
        />
        <meta property="og:url" content="https://www.pezzisoftech.com/pricing/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Pricing - Affordable Payroll Software Plans",
            "description": "Choose the right payroll software plan for your business.",
            "url": "https://www.pezzisoftech.com/pricing/"
          })}
        </script>
      </Helmet>

      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Plans For You
            </h1>
            <p className="text-xl text-white/90 mb-2">
              Built for Every Industry
            </p>
            <p className="text-lg text-white/80">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRICING_PLANS.map((plan, index) => {
              const IconComponent = getIcon(plan.icon);
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-primary shadow-xl' : ''
                  } ${plan.borderColor} border-2`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                        ★ Popular
                      </div>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="p-6 text-center">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center text-white text-2xl mb-4`}>
                      <IconComponent />
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">
                        {plan.currency}{plan.price}
                      </span>
                      <span className="text-sm text-secondary-light block">
                        {plan.period}
                      </span>
                    </div>

                    {/* Additional Cost */}
                    <p className="text-xs text-secondary-light mb-4">
                      {plan.additionalCost}
                    </p>

                    {/* Best For */}
                    <div className="bg-gray-50 rounded-lg px-4 py-2 mb-4">
                      <p className="text-sm text-secondary-light">
                        <span className="font-semibold">Best For:</span> {plan.bestFor}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-2 mb-6 text-left">
                      {plan.features.slice(0, 5).map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-sm">
                          <FaCheck className="text-primary w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span className="text-secondary-light">{feature}</span>
                        </div>
                      ))}
                      {plan.features.length > 5 && (
                        <div className="text-primary text-sm font-medium">
                          +{plan.features.length - 5} more features
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <Link
                      to={plan.buttonLink}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg'
                          : 'bg-gray-100 text-secondary hover:bg-primary hover:text-white'
                      }`}
                    >
                      {plan.buttonText}
                      <FaAngleRight className="text-sm" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare Features
            </h2>
            <p className="text-lg text-secondary-light">
              Find the perfect plan with all the features you need
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setActiveTab('plans')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'plans'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-secondary-light hover:text-secondary'
                }`}
              >
                Quick Comparison
              </button>
              <button
                onClick={() => setActiveTab('detailed')}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === 'detailed'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-secondary-light hover:text-secondary'
                }`}
              >
                Detailed Features
              </button>
            </div>
          </div>

          {/* Feature Table */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                  {activeTab === 'plans' 
                    ? FEATURES_MATRIX.headers.map((header, idx) => (
                        <th key={idx} className={`px-4 py-3 text-left text-sm font-semibold text-secondary border-b border-gray-200 ${
                          idx === 0 ? 'sticky left-0 bg-inherit min-w-[150px]' : 'min-w-[100px]'
                        }`}>
                          {header}
                        </th>
                      ))
                    : DETAILED_FEATURES_MATRIX.headers.map((header, idx) => (
                        <th key={idx} className={`px-4 py-3 text-left text-sm font-semibold text-secondary border-b border-gray-200 ${
                          idx === 0 ? 'sticky left-0 bg-inherit min-w-[150px]' : 'min-w-[100px]'
                        }`}>
                          {header}
                        </th>
                      ))
                  }
                </tr>
              </thead>
              <tbody>
                {(activeTab === 'plans' ? FEATURES_MATRIX : DETAILED_FEATURES_MATRIX).rows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2, delay: rowIndex * 0.02 }}
                    className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors duration-200`}
                  >
                    <td className="px-4 py-3 text-sm font-medium text-secondary border-b border-gray-200 sticky left-0 bg-inherit">
                      {row.feature}
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-200">
                      <span className={getStatusColor(row.starter)}>
                        {renderCellValue(row.starter)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-200">
                      <span className={getStatusColor(row.essential)}>
                        {renderCellValue(row.essential)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-200 bg-primary/5">
                      <span className={getStatusColor(row.standard)}>
                        {renderCellValue(row.standard)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center border-b border-gray-200">
                      <span className={getStatusColor(row.professional)}>
                        {renderCellValue(row.professional)}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Table Legend */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-sm text-secondary-light">
            <div className="flex items-center gap-2">
              <FaCheck className="text-green-500" />
              <span>Available</span>
            </div>
            <div className="flex items-center gap-2">
              <FaTimes className="text-red-500" />
              <span>Not Available</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">Basic</span>
              <span>Basic Features</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs font-medium">Partial</span>
              <span>Partial Features</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-primary text-white rounded text-xs font-medium">Advanced</span>
              <span>Advanced Features</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Ready to Simplify Your Payroll Process?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              👉 Book a Demo Today
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/contact"
                className="btn-accent inline-flex items-center justify-center gap-2 text-lg group"
              >
                Book Demo
                <FaAngleRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <p className="text-white/80 text-sm">Prefer Email?</p>
              <a
                href="mailto:sales@pezzisoftech.com"
                className="text-white font-semibold hover:text-accent transition-colors"
              >
                sales@pezzisoftech.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;