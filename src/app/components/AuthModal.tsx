'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type AuthMode = 'login' | 'signup' | 'signup-details';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: AuthMode;
}

const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  initialMode = 'login' 
}) => {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  
  // For signup-details form
  const [education, setEducation] = useState('');
  const [currentSchool, setCurrentSchool] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [interests, setInterests] = useState<string[]>([]);

  // Add event listener for external triggers
  useEffect(() => {
    const handleOpenAuthModal = (e: CustomEvent) => {
      if (e.detail && e.detail.mode) {
        setMode(e.detail.mode);
        // Force the modal to open
        if (!isOpen) {
          document.dispatchEvent(new CustomEvent('forceOpenAuthModal'));
        }
      }
    };

    // Add event listener
    document.addEventListener('openAuthModal', handleOpenAuthModal as EventListener);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener('openAuthModal', handleOpenAuthModal as EventListener);
    };
  }, [isOpen]);
  
  // Update mode when initialMode changes
  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log('Login with:', { email, password });
    
    // Simulate successful login
    // In a real app, you would check credentials against a backend
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', email.split('@')[0]);
    
    // Trigger event for other components
    window.dispatchEvent(new Event('loginStatusChange'));
    
    // Close modal after successful login
    onClose();
    
    // Redirect to search page for existing users
    router.push('/search');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Move to the next signup step
    setMode('signup-details');
  };

  const handleSignupDetails = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement signup logic here
    console.log('Sign up with:', { 
      email, 
      password,
      name,
      phone,
      education,
      currentSchool,
      graduationYear,
      interests
    });
    
    // Store user data in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name || email.split('@')[0]);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isNewUser', 'true');
    
    // Trigger event for other components
    window.dispatchEvent(new Event('loginStatusChange'));
    
    // Close modal after successful signup
    onClose();
    
    // Redirect to complete profile page for new users
    router.push('/complete-profile');
  };

  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter(i => i !== interest));
    } else {
      setInterests([...interests, interest]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
        <div className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" onClick={onClose}></div>
        
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="rounded-md bg-white text-gray-400 hover:text-gray-500"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                <div className="flex justify-center mb-6">
                  <div className="flex items-center gap-2">
                    <Image src="/enrollet-logo.svg" alt="Enrollet Logo" width={32} height={32} />
                    <span className="text-xl font-bold">enrollet</span>
                  </div>
                </div>

                {mode === 'login' && (
                  <>
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 text-center mb-6">
                      Sign in to your account
                    </h3>
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">
                        Don&apos;t have an account?{' '}
                        <button
                          type="button"
                          className="text-blue-600 hover:text-blue-500 font-medium"
                          onClick={() => setMode('signup')}
                        >
                          Create an Account
                        </button>
                      </p>
                    </div>
                  </>
                )}

                {mode === 'signup' && (
                  <>
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 text-center mb-6">
                      Create your account
                    </h3>
                    <form onSubmit={handleSignup} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="signup-email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      <div>
                        <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <input
                          type="password"
                          id="signup-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="••••••••"
                          minLength={8}
                        />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="confirm-password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="••••••••"
                          minLength={8}
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">
                        Already have an account?{' '}
                        <button
                          type="button"
                          className="text-blue-600 hover:text-blue-500 font-medium"
                          onClick={() => setMode('login')}
                        >
                          Sign In
                        </button>
                      </p>
                    </div>
                  </>
                )}

                {mode === 'signup-details' && (
                  <>
                    <h3 className="text-2xl font-semibold leading-6 text-gray-900 text-center mb-6">
                      Tell us about yourself
                    </h3>
                    <form onSubmit={handleSignupDetails} className="space-y-4">
                      <div>
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                          Highest Education Level
                        </label>
                        <select
                          id="education"
                          value={education}
                          onChange={(e) => setEducation(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        >
                          <option value="">Select your education level</option>
                          <option value="high_school">High School/12th Standard</option>
                          <option value="undergraduate">Undergraduate</option>
                          <option value="graduate">Graduate</option>
                          <option value="postgraduate">Post Graduate</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="currentSchool" className="block text-sm font-medium text-gray-700">
                          Current School/College
                        </label>
                        <input
                          type="text"
                          id="currentSchool"
                          value={currentSchool}
                          onChange={(e) => setCurrentSchool(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                          placeholder="Enter your current school or college"
                        />
                      </div>
                      <div>
                        <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
                          Expected Graduation Year
                        </label>
                        <select
                          id="graduationYear"
                          value={graduationYear}
                          onChange={(e) => setGraduationYear(e.target.value)}
                          required
                          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                        >
                          <option value="">Select year</option>
                          {[...Array(6)].map((_, i) => {
                            const year = new Date().getFullYear() + i;
                            return (
                              <option key={year} value={year.toString()}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Interested Fields of Study
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            'Engineering', 'Medicine', 'Business', 'Arts', 
                            'Science', 'Law', 'Social Sciences', 'Computer Science'
                          ].map(interest => (
                            <div key={interest} className="flex items-center">
                              <input
                                type="checkbox"
                                id={`interest-${interest}`}
                                checked={interests.includes(interest)}
                                onChange={() => toggleInterest(interest)}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                              />
                              <label htmlFor={`interest-${interest}`} className="ml-2 block text-sm text-gray-700">
                                {interest}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Complete Registration
                        </button>
                      </div>
                    </form>
                    <div className="mt-4 text-center">
                      <button
                        type="button"
                        className="text-blue-600 hover:text-blue-500 font-medium text-sm"
                        onClick={() => setMode('signup')}
                      >
                        Back to previous step
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 