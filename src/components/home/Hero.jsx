


import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar, FaCheck, FaArrowRight } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  const [industry, setIndustry] = useState(0);
  const industries = ['Hospitals', 'Manufacturing', 'IT Companies', 'Schools', 'Retail'];

  useEffect(() => {
    const timer = setInterval(() => setIndustry(i => (i + 1) % industries.length), 3000);
    return () => clearInterval(timer);
  }, []);

  // Particles initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  return (
    <section className="gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Particles Effect - Spider Web */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
        className="absolute inset-0 w-full h-full"
        style={{ pointerEvents: 'none' }}
      />

      {/* Floating Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-8">
        <div className="w-full max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-white/10"
          >
            <img 
              src="https://cdn-icons-png.flaticon.com/128/9359/9359486.png" 
              alt="Best seller" 
              className="w-4 h-4"
            />
            <span className="text-sm font-medium">WHERE ACCURACY MEETS EFFORTLESS PAYROLL MANAGEMENT</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
           className="w-full text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          >
            Best Attendance &
            &nbsp;
            <span className="relative inline-block">
              <span className="text-accent relative">
                Payroll Software
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent rounded-full" />
              </span>
            </span>
             Payroll Software in India 
            <br />
            <span className="text-white/70 text-5xl md:text-6xl">for All Industries</span>
          </motion.h1>

          {/* Industry Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <div className="flex flex-wrap justify-center gap-2">
              {industries.map((ind, i) => (
                <span 
                  key={i}
                  className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                    i === industry 
                      ? 'bg-accent/20 text-accent border-accent/50' 
                      : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10'
                  }`}
                >
                  {ind}
                </span>
              ))}
              <span className="px-4 py-1.5 rounded-full text-sm bg-accent/10 text-accent border border-accent/30">
                + More
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl max-w-5xl mx-auto text-white/90 leading-relaxed mb-10"
          >
            Pezzi Softech provides smart, automated Attendance and Payroll Software designed to simplify shift management, 
            overtime calculation, and roster planning for hospitals, manufacturing units, offices, and more.
          </motion.p>

          {/* Features Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8"
          >
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <FaCheck className="text-green-400" />
              <span>Error-Free Salary</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <FaCheck className="text-green-400" />
              <span>Shift & Roster Management</span>
            </div>
            <div className="flex items-center gap-2 text-white/90 text-sm">
              <FaCheck className="text-green-400" />
              <span>100% Compliance Ready</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="btn-accent inline-flex items-center justify-center gap-2 text-lg group hover:scale-105"
            >
              Talk to Expert
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/pricing"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-lg bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary hover:scale-105"
            >
              View Pricing
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-white/50 text-sm"
          >
            <span className="flex items-center gap-2">
              <span className="text-2xl">🏥</span> 100+ Hospitals
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">🏭</span> 150+ Manufacturing
            </span>
            <span className="flex items-center gap-2">
              <span className="text-2xl">🏢</span> 250+ Offices
            </span>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float.delay-1 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;