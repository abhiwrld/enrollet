'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Header from '../components/Header';

export default function CompleteProfilePage() {
  const router = useRouter();
  
  // Educational Information
  const [education, setEducation] = useState<string>('');
  const [board, setBoard] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [graduationYear, setGraduationYear] = useState<string>('');
  const [stream, setStream] = useState<string>('');
  
  // Personal Information
  const [dob, setDob] = useState<string>('');
  const [gender, setGender] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  
  // Residential Information
  const [addressLine1, setAddressLine1] = useState<string>('');
  const [addressLine2, setAddressLine2] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  
  // Parent/Guardian Information
  const [parentName, setParentName] = useState<string>('');
  const [parentPhone, setParentPhone] = useState<string>('');
  const [parentEmail, setParentEmail] = useState<string>('');
  const [parentOccupation, setParentOccupation] = useState<string>('');
  
  const [step, setStep] = useState<number>(1);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 4) {
      setStep(step + 1);
    } else {
      // In a real application, you would save this data to a backend
      console.log('Profile completed:', {
        education,
        board,
        school,
        grade,
        graduationYear,
        stream,
        dob,
        gender,
        category,
        addressLine1,
        addressLine2,
        city,
        state,
        pincode,
        parentName,
        parentPhone,
        parentEmail,
        parentOccupation
      });
      
      // Redirect to search page after completion
      router.push('/search');
    }
  };
  
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 
    'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 
    'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 
    'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
    'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 
    'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry'
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-6 pb-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold">Complete Your Profile</h1>
              <p className="text-gray-600 mt-2">
                Help us personalize your college application experience
              </p>
            </div>
            
            <div className="flex justify-between mb-8">
              {[1, 2, 3, 4].map((s) => (
                <div 
                  key={s}
                  className={`step-indicator ${s <= step ? 'active' : ''} ${s < step ? 'completed' : ''}`}
                  onClick={() => s < step && setStep(s)}
                >
                  <span className="step-number">{s}</span>
                  <span className="step-label">
                    {s === 1 ? 'Education' : 
                     s === 2 ? 'Personal' : 
                     s === 3 ? 'Address' : 'Guardian'}
                  </span>
                </div>
              ))}
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Step 1: Educational Information */}
              {step === 1 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Educational Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                        Current Education Level*
                      </label>
                      <select
                        id="education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                        required
                        className="form-select"
                      >
                        <option value="">Select education level</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="undergraduate">Undergraduate</option>
                        <option value="graduate">Graduate</option>
                        <option value="postgraduate">Post Graduate</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="board" className="block text-sm font-medium text-gray-700 mb-1">
                        Board/University*
                      </label>
                      <select
                        id="board"
                        value={board}
                        onChange={(e) => setBoard(e.target.value)}
                        required
                        className="form-select"
                      >
                        <option value="">Select board/university</option>
                        <option value="CBSE">CBSE</option>
                        <option value="ICSE">ICSE</option>
                        <option value="State Board">State Board</option>
                        <option value="IB">IB</option>
                        <option value="IGCSE">IGCSE</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                      School/College Name*
                    </label>
                    <input
                      type="text"
                      id="school"
                      value={school}
                      onChange={(e) => setSchool(e.target.value)}
                      required
                      className="form-input"
                      placeholder="Enter your school or college name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-1">
                        Grade/Percentage*
                      </label>
                      <input
                        type="text"
                        id="grade"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        required
                        className="form-input"
                        placeholder="E.g., 85% or 9.5 CGPA"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
                        Graduation Year*
                      </label>
                      <select
                        id="graduationYear"
                        value={graduationYear}
                        onChange={(e) => setGraduationYear(e.target.value)}
                        required
                        className="form-select"
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
                      <label htmlFor="stream" className="block text-sm font-medium text-gray-700 mb-1">
                        Stream/Field*
                      </label>
                      <select
                        id="stream"
                        value={stream}
                        onChange={(e) => setStream(e.target.value)}
                        required
                        className="form-select"
                      >
                        <option value="">Select stream</option>
                        <option value="Science">Science (PCM)</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Arts">Arts/Humanities</option>
                        <option value="BiPC">Science (BiPC)</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Law">Law</option>
                        <option value="Management">Management</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth*
                      </label>
                      <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                        className="form-input"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender*
                      </label>
                      <select
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        required
                        className="form-select"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer_not_to_say">Prefer not to say</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-select"
                      >
                        <option value="">Select category</option>
                        <option value="general">General</option>
                        <option value="obc">OBC</option>
                        <option value="sc">SC</option>
                        <option value="st">ST</option>
                        <option value="ews">EWS</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 3: Residential Information */}
              {step === 3 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Residential Information</h2>
                  
                  <div>
                    <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 1*
                    </label>
                    <input
                      type="text"
                      id="addressLine1"
                      value={addressLine1}
                      onChange={(e) => setAddressLine1(e.target.value)}
                      required
                      className="form-input"
                      placeholder="House/Flat No., Building Name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700 mb-1">
                      Address Line 2
                    </label>
                    <input
                      type="text"
                      id="addressLine2"
                      value={addressLine2}
                      onChange={(e) => setAddressLine2(e.target.value)}
                      className="form-input"
                      placeholder="Street, Locality"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City/Town*
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                        className="form-input"
                        placeholder="Your city"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State*
                      </label>
                      <select
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                        className="form-select"
                      >
                        <option value="">Select state</option>
                        {indianStates.map(state => (
                          <option key={state} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                        PIN Code*
                      </label>
                      <input
                        type="text"
                        id="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                        pattern="[0-9]{6}"
                        maxLength={6}
                        className="form-input"
                        placeholder="6-digit PIN code"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {/* Step 4: Parent/Guardian Information */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold mb-4">Parent/Guardian Information</h2>
                  
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">
                      Parent/Guardian Name*
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      required
                      className="form-input"
                      placeholder="Full name"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="parentPhone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="parentPhone"
                        value={parentPhone}
                        onChange={(e) => setParentPhone(e.target.value)}
                        required
                        className="form-input"
                        placeholder="+91 9876543210"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="parentEmail" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="parentEmail"
                        value={parentEmail}
                        onChange={(e) => setParentEmail(e.target.value)}
                        className="form-input"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="parentOccupation" className="block text-sm font-medium text-gray-700 mb-1">
                      Occupation
                    </label>
                    <input
                      type="text"
                      id="parentOccupation"
                      value={parentOccupation}
                      onChange={(e) => setParentOccupation(e.target.value)}
                      className="form-input"
                      placeholder="Parent/Guardian occupation"
                    />
                  </div>
                </div>
              )}
              
              <div className="mt-8 flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="secondary-button"
                  >
                    Back
                  </button>
                )}
                {step === 1 && <div></div>}
                
                <button
                  type="submit"
                  className="primary-button"
                >
                  {step < 4 ? 'Continue' : 'Complete Profile'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
} 