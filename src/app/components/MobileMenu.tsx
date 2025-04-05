'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type AuthMode = 'login' | 'signup' | 'signup-details';

interface MobileMenuProps {
  onOpenAuth?: (mode: AuthMode) => void;
  isLoggedIn?: boolean;
  onLogout?: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ 
  onOpenAuth = () => {}, 
  isLoggedIn = false,
  onLogout = () => {}
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleAuthClick = (mode: AuthMode) => {
    setIsOpen(false);
    onOpenAuth(mode);
  };

  const handleLogout = () => {
    setIsOpen(false);
    onLogout();
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
        <div className="mobile-menu-overlay md:hidden mt-4 py-4 border-t border-gray-100 transition-all duration-300 absolute right-0 left-0 bg-white z-50">
          <div className="flex flex-col space-y-4 px-4">
            <Link href="#search" className="text-sm font-medium hover:text-primary py-2">Search Colleges</Link>
            <Link href="#features" className="text-sm font-medium hover:text-primary py-2">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary py-2">How It Works</Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary py-2">FAQ</Link>
            
            {isLoggedIn ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="text-sm font-medium hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-sm font-medium hover:text-primary py-2 text-left"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleAuthClick('login')}
                  className="text-sm font-medium hover:text-primary py-2 text-left"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleAuthClick('signup')}
                  className="primary-button text-center mt-2"
                >
                  Create an Account
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 