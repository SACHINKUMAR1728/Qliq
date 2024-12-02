import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyles = 'px-4 py-2 rounded-lg transition-all transform hover:scale-105';
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'bg-gray-700 hover:bg-gray-600 text-white',
    outline: 'border-2 border-blue-500 hover:bg-blue-500/10 text-blue-500'
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;