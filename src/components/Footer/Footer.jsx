import React from 'react';

const Footer = () => {
  return (
    <div className="p-3 w-100 bg-danger text-center text-light">
      Admin dashboard - {new Date().getFullYear()} 
    </div>
  );
}

export default Footer;
