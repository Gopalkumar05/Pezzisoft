import React from 'react';
import Container from './Container';

const Section = ({ 
  children, 
  className = '', 
  containerSize = 'default',
  padding = 'default',
  background = 'white',
  ...props 
}) => {
  const paddings = {
    default: 'py-16 md:py-20 lg:py-24',
    small: 'py-8 md:py-12 lg:py-16',
    large: 'py-24 md:py-32 lg:py-40',
    none: 'py-0',
  };

  const backgrounds = {
    white: 'bg-white',
    light: 'bg-background-light',
    gray: 'bg-gray-50',
    primary: 'bg-primary text-white',
    dark: 'bg-secondary text-white',
    gradient: 'gradient-hero text-white',
  };

  return (
    <section 
      className={`${paddings[padding]} ${backgrounds[background]} ${className}`} 
      {...props}
    >
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;