import React from 'react';

const NavLink = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="hover:text-blue-400 transition-colors duration-200 ease-in-out"
    >
      {children}
    </a>
  );
};

export default NavLink;