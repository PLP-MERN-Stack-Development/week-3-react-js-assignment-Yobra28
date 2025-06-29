import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'p-6',
  shadow = 'shadow-md',
  hover = false 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  const classes = `${baseClasses} ${padding} ${shadow} ${hoverClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card; 