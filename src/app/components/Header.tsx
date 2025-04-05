'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import MobileMenu from './MobileMenu';
import AuthModal from './AuthModal';

type AuthMode = 'login' | 'signup' | 'signup-details';

const Header: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<AuthMode>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  // Check login status on component mount
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window !== 'undefined') {
      const storedLoginStatus = localStorage.getItem('isLoggedIn');
      const storedUserName = localStorage.getItem('userName');
      
      if (storedLoginStatus === 'true') {
        setIsLoggedIn(true);
        setUserName(storedUserName || 'User');
      }
    }
  }, []);

  // Add event listener for force opening the auth modal
  useEffect(() => {
    const handleForceOpenModal = () => {
      setIsAuthModalOpen(true);
    };

    // Add event listener
    document.addEventListener('forceOpenAuthModal', handleForceOpenModal);

    // Login status change handler
    const handleLoginStatusChange = () => {
      const isUserLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(isUserLoggedIn);
      if (isUserLoggedIn) {
        setUserName(localStorage.getItem('userName') || 'User');
      }
    };

    window.addEventListener('loginStatusChange', handleLoginStatusChange);

    // Remove event listeners on cleanup
    return () => {
      document.removeEventListener('forceOpenAuthModal', handleForceOpenModal);
      window.removeEventListener('loginStatusChange', handleLoginStatusChange);
    };
  }, []);

  const openAuthModal = (mode: AuthMode) => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    // Clear local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    // Update state
    setIsLoggedIn(false);
    setUserName('');
    // Trigger event for other components
    window.dispatchEvent(new Event('loginStatusChange'));
    // Redirect to home page
    router.push('/');
  };

  const getInitial = () => {
    return userName && userName.length > 0 ? userName[0].toUpperCase() : 'U';
  };

  // Conditional navigation links based on pathname
  const getNavigationLinks = () => {
    // If on homepage, show anchor links
    if (pathname === '/') {
      return (
        <>
          <Link href="#search" className="text-sm font-medium hover:text-primary transition duration-200">Search Colleges</Link>
          <Link href="#features" className="text-sm font-medium hover:text-primary transition duration-200">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition duration-200">How It Works</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary transition duration-200">FAQ</Link>
        </>
      );
    }
    
    // If on other pages, show regular links
    return (
      <>
        <Link href="/search" className="text-sm font-medium hover:text-primary transition duration-200">Search Colleges</Link>
        <Link href="/#features" className="text-sm font-medium hover:text-primary transition duration-200">Features</Link>
        <Link href="/#how-it-works" className="text-sm font-medium hover:text-primary transition duration-200">How It Works</Link>
        <Link href="/" className="text-sm font-medium hover:text-primary transition duration-200">Home</Link>
      </>
    );
  };

  return (
    <>
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/enrollet-logo.svg" alt="Enrollet Logo" width={32} height={32} />
              <span className="text-xl font-bold">enrollet</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {getNavigationLinks()}
            </div>
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <MobileMenu 
                  onOpenAuth={openAuthModal}
                  isLoggedIn={isLoggedIn}
                  onLogout={handleLogout}
                />
              </div>
              
              {isLoggedIn ? (
                <div className="hidden md:flex items-center gap-4">
                  <Link 
                    href="/search" 
                    className="text-sm font-medium hover:text-primary transition duration-200"
                  >
                    Search Colleges
                  </Link>
                  <div className="relative">
                    <button 
                      className="flex items-center gap-2"
                      onClick={handleLogout}
                    >
                      <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-medium">
                        {getInitial()}
                      </div>
                      <span className="text-sm font-medium">{userName || 'Account'}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="hidden md:flex items-center gap-3">
                  <button
                    onClick={() => openAuthModal('login')}
                    className="text-sm font-medium hover:text-primary transition duration-200"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => openAuthModal('signup')}
                    className="primary-button"
                  >
                    Create an Account
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={closeAuthModal} 
        initialMode={authMode} 
      />
    </>
  );
};

export default Header; 