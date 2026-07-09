import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaBuilding,
  FaUser,
  FaComment,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import { 
  CONTACT_INFO, 
  CONTACT_INTERESTS, 
  SOCIAL_LINKS ,
  CONTACT_SECTIONS
} from '../utils/constants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Attendance Software',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (formData.phone.trim().length < 10) newErrors.phone = 'Phone number must be at least 10 digits';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'Attendance Software',
      message: ''
    });
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Pezzi Softech - Get Free Demo & Support</title>
        <meta 
          name="description" 
          content="Contact Pezzi Softech for a free demo or support. Call, email, or visit us to learn about our attendance and payroll software." 
        />
        <link rel="canonical" href="https://www.pezzisoftech.com/contact/" />
        <meta property="og:title" content="Contact Pezzi Softech - Get Free Demo & Support" />
        <meta 
          property="og:description" 
          content="Contact Pezzi Softech for a free demo or support. Call, email, or visit us to learn about our payroll software." 
        />
        <meta property="og:url" content="https://www.pezzisoftech.com/contact/" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Pezzi Softech",
            "description": "Contact Pezzi Softech for payroll software demos and support",
            "url": "https://www.pezzisoftech.com/contact/",
            "mainEntity": {
              "@type": "Organization",
              "name": CONTACT_INFO.company,
              "email": CONTACT_INFO.email,
              "telephone": CONTACT_INFO.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": CONTACT_INFO.address,
                "addressLocality": "Ghaziabad",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "201014",
                "addressCountry": "India"
              }
            }
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
              {CONTACT_SECTIONS?.header?.title || 'Contact Us'}
            </h1>
            <p className="text-xl text-white/90">
              {CONTACT_SECTIONS?.header?.subtitle || 'Have questions about attendance or payroll? Our team is here to help.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-8 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-secondary">
              {CONTACT_SECTIONS?.location?.title || 'Our Location'}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pezzi Softech Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h2 className="text-3xl font-bold text-secondary mb-6">Get in Touch</h2>
              
              {/* Company Info */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaBuilding className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Company</h3>
                  <p className="text-secondary-light">{CONTACT_INFO.company}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaEnvelope className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Email</h3>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="text-primary hover:underline transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaPhone className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                  <a 
                    href={`tel:${CONTACT_INFO.phone}`} 
                    className="text-primary hover:underline transition-colors"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start space-x-4 group">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <FaClock className="text-primary text-2xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-1">Office Hours</h3>
                  <p className="text-secondary-light">{CONTACT_INFO.officeHours}</p>
                </div>
              </div>

              {/* Address */}
             <div className="flex items-start space-x-4 group">
  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
    <FaMapMarkerAlt className="text-primary text-2xl" />
  </div>
  <div>
    <h3 className="font-semibold text-secondary mb-1">Address</h3>
    {CONTACT_INFO.addressLines && Array.isArray(CONTACT_INFO.addressLines) ? (
      CONTACT_INFO.addressLines.map((line, idx) => (
        <p key={idx} className="text-secondary-light">{line}</p>
      ))
    ) : (
      <p className="text-secondary-light">{CONTACT_INFO.address || 'Address not available'}</p>
    )}
  </div>
</div>

              {/* Demo Request Note */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 mt-8">
                <p className="text-secondary-light">
                  Looking for a demo or custom pricing?<br />
                  <strong className="text-secondary">Fill the form and our team will contact you shortly.</strong>
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-background-light rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                  >
                    <FaCheckCircle className="text-green-500 text-4xl mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Message Sent!</h3>
                    <p className="text-green-600">
                      Thank you for contacting us. Our team will get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1.5">
                        <FaUser className="inline mr-2 text-primary" />
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                        placeholder="Enter your full name"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1.5">
                        <FaEnvelope className="inline mr-2 text-primary" />
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                        placeholder="Enter your email address"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-1.5">
                        <FaPhone className="inline mr-2 text-primary" />
                        Contact No. <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${
                          errors.phone ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors`}
                        placeholder="Enter your phone number"
                        disabled={isSubmitting}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Interest Dropdown */}
                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-secondary mb-1.5">
                        Select Interest
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors bg-white"
                        disabled={isSubmitting}
                      >
                        {CONTACT_INTERESTS.map((interest) => (
                          <option key={interest} value={interest}>
                            {interest}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1.5">
                        <FaComment className="inline mr-2 text-primary" />
                        Your Message <span className="text-gray-400">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your requirements..."
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary flex items-center justify-center gap-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Submit
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12 bg-background-light border-t border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold text-secondary mb-6">Connect With Us</h3>
            <div className="flex justify-center space-x-6">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#1877f2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Facebook"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#dc2743] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="Instagram"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#ff0000] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="YouTube"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#0a66c2] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;