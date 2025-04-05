'use client';

import React from 'react';

interface GetStartedButtonProps {
  label?: string;
  className?: string;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ 
  label = 'Get Started', 
  className = 'primary-button'
}) => {
  const handleClick = () => {
    // Trigger the signup modal
    const signupEvent = new CustomEvent('openAuthModal', { detail: { mode: 'signup' } });
    document.dispatchEvent(signupEvent);
  };

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {label}
    </button>
  );
};

export default GetStartedButton; 