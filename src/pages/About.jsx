import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaRocket, 
  FaUsers, 
  FaShieldAlt, 
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaAward,
  FaBuilding,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

// About Page Data
const ABOUT_DATA = {
  company: {
    name: 'Pezzi Softech India LLP',
    founded: '2020',
    description: 'Pezzi Softech India LLP is a leading provider of innovative HR and payroll solutions. We help businesses across India streamline their workforce management with cutting-edge technology.',
    mission: 'To empower businesses with intelligent, automated workforce management solutions that save time, reduce errors, and enhance productivity.',
    vision: 'To become India\'s most trusted payroll and attendance software provider, revolutionizing how businesses manage their human resources.'
  },
  stats: [
    { id: 1, value: '500+', label: 'Happy Clients' },
    { id: 2, value: '10,000+', label: 'Employees Managed' },
    { id: 3, value: '4.9/5', label: 'Client Rating' },
    { id: 4, value: '98%', label: 'Client Retention' }
  ],
  values: [
    {
      id: 1,
      icon: 'FaRocket',
      title: 'Innovation',
      description: 'We continuously innovate to provide the most advanced HR solutions.'
    },
    {
      id: 2,
      icon: 'FaUsers',
      title: 'Customer Focus',
      description: 'Our clients are at the heart of everything we do. Their success is our success.'
    },
    {
      id: 3,
      icon: 'FaShieldAlt',
      title: 'Trust & Integrity',
      description: 'We believe in building lasting relationships through honesty and transparency.'
    },
    {
      id: 4,
      icon: 'FaHandshake',
      title: 'Partnership',
      description: 'We work as partners with our clients, growing together and achieving more.'
    }
  ],
  journey: [
    {
      id: 1,
      year: '2020',
      title: 'The Beginning',
      description: 'Pezzi Softech was founded with a vision to revolutionize payroll management in India.',
      icon: 'FaRocket'
    },
    {
      id: 2,
      year: '2021',
      title: 'First 100 Clients',
      description: 'Reached 100+ clients across various industries including healthcare, manufacturing, and IT.',
      icon: 'FaUsers'
    },
    {
      id: 3,
      year: '2022',
      title: 'Product Innovation',
      description: 'Launched advanced features including shift management, overtime calculation, and mobile app.',
      icon: 'FaLightbulb'
    },
    {
      id: 4,
      year: '2023',
      title: 'Expansion & Growth',
      description: 'Expanded to serve 500+ clients with 10,000+ employees across India.',
      icon: 'FaChartLine'
    },
    {
      id: 5,
      year: '2024',
      title: 'Industry Leader',
      description: 'Recognized as a leading payroll software provider with 4.9/5 client rating.',
      icon: 'FaAward'
    }
  ],
  whyChoose: [
    'Easy to Use Interface',
    'Affordable Pricing',
    'Customizable for Any Industry',
    'Dedicated Support Team',
    'Made in India Software',
    '100% Compliance Ready',
    'Real-time Analytics',
    'Secure Data Management'
  ]
};

const About = () => {
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
      FaShieldAlt,
      FaHandshake,
      FaLightbulb,
      FaChartLine,
      FaAward
    };
    return icons[iconName] || FaRocket;
  };

  return (
    <>
      <Helmet>
        <title>About Pezzi Softech - Leading Payroll Software Company in India</title>
        <meta 
          name="description" 
          content="Learn about Pezzi Softech, a leading provider of innovative attendance and payroll software solutions. Trusted by 500+ businesses across India." 
        />
        <link rel="canonical" href="https://www.pezzisoftech.com/about/" />
        <meta property="og:title" content="About Pezzi Softech - Leading Payroll Software Company" />
        <meta 
          property="og:description" 
          content="Learn about Pezzi Softech, a leading provider of innovative attendance and payroll software solutions." 
        />
        <meta property="og:url" content="https://www.pezzisoftech.com/about/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Pezzi Softech",
            "description": ABOUT_DATA.company.description,
            "url": "https://www.pezzisoftech.com/about/",
            "mainEntity": {
              "@type": "Organization",
              "name": ABOUT_DATA.company.name,
              "foundingDate": ABOUT_DATA.company.founded,
              "description": ABOUT_DATA.company.description
            }
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
              About <span className="text-accent">Pezzi Softech</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Transforming Workforce Management with Innovation and Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-secondary-light leading-relaxed mb-4">
                {ABOUT_DATA.company.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-primary text-sm" />
                  </div>
                  <p className="text-secondary-light">
                    <strong className="text-secondary">Mission:</strong> {ABOUT_DATA.company.mission}
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheckCircle className="text-primary text-sm" />
                  </div>
                  <p className="text-secondary-light">
                    <strong className="text-secondary">Vision:</strong> {ABOUT_DATA.company.vision}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {ABOUT_DATA.stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background-light rounded-xl p-6 text-center card-hover"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <p className="text-sm text-secondary-light mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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
              Our Core Values
            </h2>
            <p className="text-lg text-secondary-light">
              The principles that guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {ABOUT_DATA.values.map((value) => {
              const IconComponent = getIcon(value.icon);
              return (
                <motion.div
                  key={value.id}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-8 shadow-sm card-hover text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="text-primary text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-secondary-light text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
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
              Our Journey
            </h2>
            <p className="text-lg text-secondary-light">
              From humble beginnings to industry leader
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block" />

            <div className="space-y-12">
              {ABOUT_DATA.journey.map((item, index) => {
                const IconComponent = getIcon(item.icon);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } items-center gap-8`}
                  >
                    {/* Content */}
                    <div className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}>
                      <div className="bg-background-light rounded-xl p-6 card-hover">
                        <div className="flex items-center gap-3 mb-2 md:justify-end">
                          <span className="text-primary font-bold text-xl">{item.year}</span>
                          <IconComponent className="text-primary text-xl" />
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-secondary-light">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <div className="w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </div>
                    </div>

                    {/* Empty spacer */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Pezzi Softech?
            </h2>
            <p className="text-lg text-secondary-light">
              What makes us the preferred choice for businesses across India
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {ABOUT_DATA.whyChoose.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm card-hover"
              >
                <FaCheckCircle className="text-primary text-lg flex-shrink-0" />
                <span className="text-secondary font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Transform Your Payroll Process?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-white/90 mb-8"
            >
              Join 500+ businesses already using Pezzi Softech
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
                Get Started
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/pricing"
                className="btn-secondary inline-flex items-center justify-center gap-2 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary"
              >
                View Pricing
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;