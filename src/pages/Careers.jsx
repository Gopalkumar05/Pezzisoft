import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaUsers, 
  FaLightbulb, 
  FaHandshake,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaGraduationCap,
  FaCode,
  FaChartLine,
  FaRegSmile
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Careers Data
const CAREERS_DATA = {
  header: {
    title: 'Join Our Team',
    subtitle: "We're always looking for talented individuals to join our growing team. Help us build the future of HR technology.",
    description: 'At Pezzi Softech, we believe in creating an environment where innovation thrives and careers flourish.'
  },
  perks: [
    {
      id: 1,
      icon: 'FaRocket',
      title: 'Growth Opportunities',
      description: 'Fast-track your career with continuous learning and advancement opportunities.'
    },
    {
      id: 2,
      icon: 'FaLightbulb',
      title: 'Innovation Culture',
      description: 'Work on cutting-edge technology and be part of groundbreaking solutions.'
    },
    {
      id: 3,
      icon: 'FaUsers',
      title: 'Collaborative Environment',
      description: 'Join a team that values collaboration, creativity, and mutual respect.'
    },
    {
      id: 4,
      icon: 'FaHandshake',
      title: 'Work-Life Balance',
      description: 'Enjoy flexible working hours and a supportive work culture.'
    }
  ],
  values: [
    'Innovation First',
    'Customer Obsession',
    'Integrity Always',
    'Team Spirit',
    'Excellence Driven',
    'Continuous Learning'
  ],
  openings: [
    // Currently no openings, but structure ready for future
  ],
  benefits: [
    {
      id: 1,
      icon: 'FaGraduationCap',
      title: 'Learning & Development',
      description: 'Access to courses, workshops, and conferences to enhance your skills.'
    },
    {
      id: 2,
      icon: 'FaChartLine',
      title: 'Career Growth',
      description: 'Clear career progression paths with regular performance reviews.'
    },
    {
      id: 3,
      icon: 'FaClock',
      title: 'Flexible Hours',
      description: 'Flexible work timings and remote work options available.'
    },
    {
      id: 4,
      icon: 'FaRegSmile',
      title: 'Great Culture',
      description: 'A supportive, inclusive, and fun work environment.'
    }
  ],
  culture: {
    title: 'Our Culture',
    description: 'We foster a culture of innovation, collaboration, and continuous learning. Our team members are empowered to think creatively, take ownership, and make a real impact.'
  }
};

const Careers = () => {
  const [activeTab, setActiveTab] = useState('openings');

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
    viewport: { once: true }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  // Get icon component
  const getIcon = (iconName) => {
    const icons = {
      FaRocket,
      FaUsers,
      FaLightbulb,
      FaHandshake,
      FaGraduationCap,
      FaChartLine,
      FaClock,
      FaRegSmile,
      FaBriefcase,
      FaCode
    };
    return icons[iconName] || FaRocket;
  };

  return (
    <>
      <Helmet>
        <title>Careers at Pezzi Softech - Join Our Dynamic Team</title>
        <meta 
          name="description" 
          content="Explore career opportunities at Pezzi Softech. Join a dynamic team building innovative payroll and attendance solutions. Grow your career with us." 
        />
        <link rel="canonical" href="https://www.pezzisoftech.com/careers/" />
        <meta property="og:title" content="Careers at Pezzi Softech - Join Our Team" />
        <meta 
          property="og:description" 
          content="Explore career opportunities at Pezzi Softech. Join a dynamic team building innovative payroll solutions." 
        />
        <meta property="og:url" content="https://www.pezzisoftech.com/careers/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Careers at Pezzi Softech",
            "description": CAREERS_DATA.header.description,
            "url": "https://www.pezzisoftech.com/careers/"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {CAREERS_DATA.header.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              {CAREERS_DATA.header.subtitle}
            </p>
            <p className="text-lg text-white/80 mt-4">
              {CAREERS_DATA.header.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Why Join Us?
            </h2>
            <p className="text-lg text-secondary-light">
              Discover what makes Pezzi Softech a great place to work
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CAREERS_DATA.perks.map((perk) => {
              const IconComponent = getIcon(perk.icon);
              return (
                <motion.div
                  key={perk.id}
                  variants={fadeInUp}
                  className="bg-background-light rounded-xl p-6 text-center card-hover"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="text-primary text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-secondary-light text-sm">
                    {perk.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              What We Value
            </h2>
            <p className="text-lg text-secondary-light">
              The principles that guide our work and culture
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {CAREERS_DATA.values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-full px-6 py-3 shadow-sm card-hover border border-primary/10"
              >
                <span className="text-secondary font-medium">{value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Employee Benefits
            </h2>
            <p className="text-lg text-secondary-light">
              We take care of our team so they can focus on what matters most
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {CAREERS_DATA.benefits.map((benefit) => {
              const IconComponent = getIcon(benefit.icon);
              return (
                <motion.div
                  key={benefit.id}
                  variants={fadeInUp}
                  className="bg-background-light rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-secondary mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-secondary-light text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <FaUsers className="text-primary text-4xl" />
              </div>
              <h2 className="text-3xl font-bold text-secondary mb-4">
                {CAREERS_DATA.culture.title}
              </h2>
              <p className="text-lg text-secondary-light leading-relaxed">
                {CAREERS_DATA.culture.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <span className="bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  🚀 Innovation
                </span>
                <span className="bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  🤝 Collaboration
                </span>
                <span className="bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  📚 Learning
                </span>
                <span className="bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium">
                  💡 Creativity
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-secondary-light">
              Find your next career opportunity with us
            </p>
          </motion.div>

          {CAREERS_DATA.openings.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {CAREERS_DATA.openings.map((opening) => (
                <motion.div
                  key={opening.id}
                  variants={fadeInUp}
                  className="bg-background-light rounded-xl p-6 card-hover border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary">
                        {opening.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-secondary-light">
                        <span className="flex items-center gap-1">
                          <FaBriefcase className="text-primary" />
                          {opening.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-primary" />
                          {opening.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-primary" />
                          {opening.type}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="btn-primary text-sm py-2 px-6 inline-flex items-center gap-2"
                    >
                      Apply Now
                      <FaArrowRight className="text-sm" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-background-light rounded-2xl p-12 text-center"
            >
              <div className="text-6xl mb-6">📢</div>
              <h3 className="text-2xl font-bold text-secondary mb-3">
                Current Openings Coming Soon
              </h3>
              <p className="text-secondary-light max-w-md mx-auto">
                We're always on the lookout for talented individuals. 
                Stay tuned for exciting opportunities at Pezzi Softech.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="btn-primary text-sm py-2 px-6 inline-flex items-center gap-2"
                >
                  Stay Connected
                  <FaArrowRight className="text-sm" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
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
              Ready to Join Our Team?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Take the next step in your career with Pezzi Softech
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
                Get in Touch
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;