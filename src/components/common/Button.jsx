import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  href, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg focus:ring-primary',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
    accent: 'bg-accent text-white hover:bg-accent/90 hover:shadow-lg focus:ring-accent',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus:ring-primary',
    ghost: 'bg-transparent text-secondary hover:bg-gray-100 focus:ring-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    success: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;