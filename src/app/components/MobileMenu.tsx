'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button 
        type="button"
        className="mobile-menu-button p-2"
        aria-label="Menu"
        onClick={toggleMenu}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          {isOpen ? (
            // X icon for close
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          ) : (
            // Hamburger icon
            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          )}
        </svg>
      </button>
      
      {isOpen && (
        <div className="mobile-menu-overlay md:hidden mt-4 py-4 border-t border-gray-100 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <Link href="#search" className="text-sm font-medium hover:text-primary py-2">Search Colleges</Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary py-2">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary py-2">How It Works</Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary py-2">FAQ</Link>
            <Link href="#get-started" className="primary-button text-center mt-2">Get Started</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 