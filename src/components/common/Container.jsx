import React from 'react';

const Container = ({ 
  children, 
  className = '', 
  size = 'default',
  ...props 
}) => {
  const sizes = {
    default: 'max-w-7xl',
    narrow: 'max-w-4xl',
    wide: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div 
      className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;