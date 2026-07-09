import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { CONTACT_INFO, SOCIAL_LINKS, NAVIGATION } from '../../utils/constants';
import pezziLogo from '../../assets/logos/pezzi-logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src={pezziLogo} alt="Pezzi Softech" className="h-12 w-auto mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed">
              Pezzi Softech India LLP.
            </p>
            <p className="text-gray-300 text-sm mt-2">
              {CONTACT_INFO.address}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-300 hover:text-white transition-colors duration-200">
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="YouTube"
              >
                <FaYoutube size={24} />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <p className="text-center text-gray-300 text-sm">
            Copyright &copy; {new Date().getFullYear()} | Pezzi Softech India LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;