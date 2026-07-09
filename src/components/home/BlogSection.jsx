import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCalendar, FaClock } from 'react-icons/fa';

const BlogSection = () => {
  const posts = [
    {
      title: 'How to Choose the Right Payroll Software for Your Business',
      excerpt: 'Learn the key factors to consider when selecting payroll software for your organization.',
      date: 'January 15, 2025',
      readTime: '5 min read',
      image: '/images/blog-payroll-software.jpg',
      slug: 'choose-right-payroll-software',
    },
    {
      title: 'Top 5 Benefits of Automating Attendance Tracking',
      excerpt: 'Discover how automated attendance tracking can save time and reduce errors.',
      date: 'January 10, 2025',
      readTime: '4 min read',
      image: '/images/blog-attendance-tracking.jpg',
      slug: 'benefits-automated-attendance',
    },
    {
      title: 'Understanding Indian Payroll Compliance: A Complete Guide',
      excerpt: 'A comprehensive guide to understanding and managing payroll compliance in India.',
      date: 'January 5, 2025',
      readTime: '8 min read',
      image: '/images/blog-compliance-guide.jpg',
      slug: 'indian-payroll-compliance-guide',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Latest Insights & Resources
          </h2>
          <p className="text-lg text-gray-600">
            Stay updated with the latest trends in HR and payroll management
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <FaCalendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Read More
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            View All Posts
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;