'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const handleFilterToggle = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  const filters = [
    'Government', 'Private', 'Deemed University', 'IIT', 'NIT', 'IIIT',
    'Medical', 'Engineering', 'Management', 'Arts & Humanities', 'NIRF Top 100', 'NAAC A+'
  ];

  const collegesList = [
    {
      id: 1,
      name: 'Indian Institute of Technology Delhi',
      location: 'New Delhi, Delhi',
      logo: '/iitd-logo.svg',
      tags: ['Engineering', 'IIT', 'Government', 'NIRF Top 100']
    },
    {
      id: 2,
      name: 'Indian Institute of Technology Bombay',
      location: 'Mumbai, Maharashtra',
      logo: '/iitb-logo.svg',
      tags: ['Engineering', 'IIT', 'Government', 'NIRF Top 100']
    },
    {
      id: 3,
      name: 'Delhi University',
      location: 'New Delhi, Delhi',
      logo: '/du-logo.svg',
      tags: ['Arts & Humanities', 'Government', 'NIRF Top 100']
    },
    {
      id: 4,
      name: 'All India Institute of Medical Sciences',
      location: 'New Delhi, Delhi',
      logo: '/aiims-logo.svg',
      tags: ['Medical', 'Government', 'NIRF Top 100']
    },
    {
      id: 5,
      name: 'Indian Institute of Management Ahmedabad',
      location: 'Ahmedabad, Gujarat',
      logo: '/iima-logo.svg',
      tags: ['Management', 'Government', 'NIRF Top 100']
    },
    {
      id: 6,
      name: 'National Law School of India University',
      location: 'Bangalore, Karnataka',
      logo: '/nlsiu-logo.svg',
      tags: ['Law', 'Government', 'NIRF Top 100']
    }
  ];

  const filteredColleges = collegesList.filter(college => {
    // Filter by search term
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          college.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filter by selected filters
    const matchesFilters = selectedFilters.length === 0 || 
                         selectedFilters.some(filter => college.tags.includes(filter));
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <section className="py-8 md:py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Find Your Perfect College</h1>
            
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
              <div className="search-container w-full md:w-auto md:flex-grow">
                <div className="search-icon">
                  <Image src="/search-icon.svg" alt="Search" width={24} height={24} />
                </div>
                <input 
                  type="text"
                  className="search-input"
                  placeholder="Search by college name or location"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="md:w-auto">
                <p className="text-sm mb-2">Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <button
                      key={filter}
                      className={`filter-tag ${selectedFilters.includes(filter) ? 'active' : ''}`}
                      onClick={() => handleFilterToggle(filter)}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredColleges.map(college => (
                <div key={college.id} className="college-card">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="college-logo">
                      <Image src={college.logo} alt={college.name} width={48} height={48} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{college.name}</h3>
                      <p className="text-gray-600 text-sm">{college.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {college.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="college-tag">{tag}</span>
                    ))}
                    {college.tags.length > 3 && (
                      <span className="college-tag">+{college.tags.length - 3} more</span>
                    )}
                  </div>
                  
                  <div className="flex justify-between mt-4">
                    <Link href={`/college/${college.id}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      View Details
                    </Link>
                    <button className="primary-button-sm">Apply Now</button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredColleges.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No colleges found matching your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedFilters([]);
                  }}
                  className="text-blue-600 font-medium mt-2"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
} 