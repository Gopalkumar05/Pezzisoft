import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { NAVIGATION } from '../../utils/constants';

const MobileMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 md:hidden">
      <div className="flex justify-end p-4">
        <button
          onClick={onClose}
          className="text-secondary hover:text-primary transition-colors"
          aria-label="Close menu"
        >
          <FaTimes size={24} />
        </button>
      </div>
      <div className="flex flex-col items-center justify-center h-full space-y-6">
        {NAVIGATION.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={onClose}
            className={`text-xl font-medium transition-colors ${
              location.pathname === item.href
                ? 'text-primary'
                : 'text-secondary hover:text-primary'
            }`}
          >
            {item.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={onClose}
          className="btn-primary text-lg py-3 px-8"
        >
          Call Back Request
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;