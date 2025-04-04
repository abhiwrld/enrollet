import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./components/MobileMenu";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header/Navigation */}
      <header className="py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/enrollet-logo.svg" alt="Enrollet Logo" width={32} height={32} />
              <span className="text-xl font-bold">enrollet</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#search" className="text-sm font-medium hover:text-primary transition duration-200">Search Colleges</Link>
              <Link href="#features" className="text-sm font-medium hover:text-primary transition duration-200">Features</Link>
              <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition duration-200">How It Works</Link>
              <Link href="#faq" className="text-sm font-medium hover:text-primary transition duration-200">FAQ</Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <MobileMenu />
              </div>
              <Link href="#get-started" className="hidden md:block primary-button">Get Started</Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="gradient-bg py-12 md:py-24">
          <div className="mobile-container">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#0a1033] mb-4 md:mb-6 leading-tight">
                Apply to multiple universities with ease
              </h1>
              <p className="text-base md:text-xl text-[#4b5563] mb-6 md:mb-8 mx-auto max-w-2xl">
                Use one single form to apply to several universities at once.
              </p>
              <Link href="#get-started" className="primary-button">
                Get Started
              </Link>
            </div>

            {/* Dashboard Preview */}
            <div className="card p-2 md:p-4 rounded-xl md:rounded-2xl max-w-5xl mx-auto overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Sidebar */}
                <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-100 p-4">
                  <div className="flex items-center gap-2 mb-8">
                    <Image src="/enrollet-logo.svg" alt="Enrollet Logo" width={24} height={24} />
                    <span className="text-base font-bold">enrollet</span>
                  </div>
                  <p className="text-lg font-medium mb-6">Dashboard</p>
                  <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0">
                    <Link href="#" className="sidebar-link active whitespace-nowrap">
                      <Image src="/overview-icon.svg" alt="Overview" width={24} height={24} />
                      <span>Overview</span>
                    </Link>
                    <Link href="#" className="sidebar-link whitespace-nowrap">
                      <Image src="/applications-icon.svg" alt="Applications" width={24} height={24} />
                      <span>Applications</span>
                    </Link>
                    <Link href="#" className="sidebar-link whitespace-nowrap">
                      <Image src="/messages-icon.svg" alt="Messages" width={24} height={24} />
                      <span>Messages</span>
                    </Link>
                    <Link href="#" className="sidebar-link whitespace-nowrap">
                      <Image src="/settings-icon.svg" alt="Settings" width={24} height={24} />
                      <span>Settings</span>
                    </Link>
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                  <div className="mb-8">
                    <h2 className="text-lg font-medium mb-4">University Applications</h2>
                    <div className="h-32 w-full">
                      <Image src="/graph.svg" alt="Applications Graph" width={400} height={150} className="w-full h-full" />
                    </div>
                  </div>

                  <div>
                    <h2 className="text-lg font-medium mb-4">University Applications</h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image src="/iitd-logo.svg" alt="IIT Delhi" width={32} height={32} />
                          <div>
                            <p className="font-medium">IIT Delhi</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-700 font-medium">Submitted</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image src="/iitb-logo.svg" alt="IIT Bombay" width={32} height={32} />
                          <div>
                            <p className="font-medium">IIT Bombay</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-amber-600 font-medium">In Progress</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Image src="/du-logo.svg" alt="Delhi University" width={32} height={32} />
                          <div>
                            <p className="font-medium">Delhi University</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-green-700 font-medium">Submitted</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Application Form Preview */}
                <div className="w-full lg:w-64 border-t lg:border-t-0 lg:border-l border-gray-100 p-4">
                  <div className="mb-6">
                    <h3 className="text-lg font-medium mb-4">Application Form</h3>
                    <div className="space-y-4">
                      <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                      <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                      <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                    </div>
                    <div className="mt-6">
                      <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium">
                        Continue
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Application Form</h3>
                    <div className="space-y-4">
                      <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                      <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                      <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                      <div className="h-6 bg-gray-200 rounded-md w-full"></div>
                      <div className="h-12 bg-gray-200 rounded-md w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* College Search Section */}
        <section id="search" className="section teal-bg py-12 md:py-20">
          <div className="mobile-container">
            <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
              <div className="mb-8 md:mb-0 md:max-w-lg">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
                  Explore more than 1,000 colleges on Enrollet
                </h2>
                <p className="text-base md:text-lg mb-6 text-center md:text-left">
                  Find the perfect universities for you based on your preferences and requirements.
                </p>
                <div className="hidden md:block">
                  <Link href="#get-started" className="light-button">
                    Start
                  </Link>
                  <Link href="#all-colleges" className="ml-4 inline-flex items-center text-white font-medium">
                    Or view all colleges 
                    <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <div className="search-container">
                  <div className="search-icon">
                    <Image src="/search-icon.svg" alt="Search" width={24} height={24} />
                  </div>
                  <input 
                    type="text"
                    className="search-input"
                    placeholder="Enter college name"
                  />
                </div>

                <div className="mt-6">
                  <p className="text-sm mb-3 text-center md:text-left">Search by filter (optional)</p>
                  <div className="filter-container">
                    <div className="filter-tag">Government</div>
                    <div className="filter-tag">Private</div>
                    <div className="filter-tag">Deemed University</div>
                    <div className="filter-tag">IIT</div>
                    <div className="filter-tag">NIT</div>
                    <div className="filter-tag">IIIT</div>
                    <div className="filter-tag">Medical</div>
                    <div className="filter-tag">Engineering</div>
                    <div className="filter-tag">Management</div>
                    <div className="filter-tag">Arts & Humanities</div>
                    <div className="filter-tag">NIRF Top 100</div>
                    <div className="filter-tag">NAAC A+</div>
                  </div>
                </div>

                <div className="flex justify-center md:justify-start mt-8 md:hidden">
                  <Link href="#get-started" className="light-button">
                    Start
                  </Link>
                  <Link href="#all-colleges" className="ml-4 inline-flex items-center text-white font-medium">
                    Or view all colleges 
                    <svg className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section id="features" className="section bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="section-title">Powerful Features for Seamless Applications</h2>
            <p className="section-subtitle">
              Our comprehensive platform streamlines the college application process with these innovative features
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/feature-unified.svg" alt="Unified Form" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Unified Application</h3>
                <p className="text-gray-600 flex-grow">
                  Fill out a single comprehensive form that intelligently adapts to requirements from all your selected universities.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-primary font-medium">No duplicate entries</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/feature-efficiency.svg" alt="Efficiency" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Save 70% Time</h3>
                <p className="text-gray-600 flex-grow">
                  Our smart form technology reduces application time by 70% compared to applying to each institution individually.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-primary font-medium">Focus on quality, not repetition</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/feature-tracking.svg" alt="Application Tracking" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Tracking</h3>
                <p className="text-gray-600 flex-grow">
                  Monitor application status, deadlines, and requirements in real-time with our intuitive dashboard and notification system.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-primary font-medium">Never miss a deadline</span>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/feature-security.svg" alt="Secure Documents" width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Document Security</h3>
                <p className="text-gray-600 flex-grow">
                  All your personal information and documents are encrypted and securely stored with enterprise-grade protection.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-primary font-medium">Bank-level encryption</span>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Link href="#get-started" className="primary-button">
                Explore All Features
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="how-it-works">
          <div className="mobile-container">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">How Enrollet Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Our streamlined process makes applying to multiple universities simple and stress-free.
              </p>
            </div>
            
            <div className="how-it-works-steps">
              <div className="step-card" data-step="1">
                <div className="text-center">
                  <Image 
                    src="/telescope-icon.svg" 
                    alt="Search & Explore" 
                    width={56} 
                    height={56} 
                    className="mx-auto mb-4 md:mb-6"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Explore Universities</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Browse our database of 1,000+ universities and use advanced filters to find schools that match your preferences.
                  </p>
                </div>
              </div>
              
              <div className="step-connector">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="step-card" data-step="2">
                <div className="text-center">
                  <Image 
                    src="/feature-unified.svg" 
                    alt="Complete Form" 
                    width={56} 
                    height={56} 
                    className="mx-auto mb-4 md:mb-6"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Complete One Form</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Fill out our comprehensive application once, and we&apos;ll intelligently format it for each university&apos;s specific requirements.
                  </p>
                </div>
              </div>
              
              <div className="step-connector">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="step-card" data-step="3">
                <div className="text-center">
                  <Image 
                    src="/feature-tracking.svg" 
                    alt="Track Applications" 
                    width={56} 
                    height={56} 
                    className="mx-auto mb-4 md:mb-6"
                  />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Submit & Track</h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    Submit your applications and track their progress in real-time. Receive notifications for important updates and deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="mobile-container">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                Find answers to common questions about Enrollet and the university application process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">What is Enrollet?</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Enrollet is a comprehensive platform that simplifies the university application process by allowing students to complete one application that can be submitted to multiple universities.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">How much does Enrollet cost?</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Enrollet offers a free basic plan that includes applications to up to 3 universities. Premium plans are available for students who wish to apply to more schools or access additional features.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Which universities accept Enrollet applications?</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Enrollet works with over 1,000 universities across India and internationally. You can check if your preferred universities accept our application by using the search feature on our platform.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Can I track my application status?</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Yes, Enrollet provides real-time tracking for all your applications. You&apos;ll receive notifications about important updates, deadlines, and admission decisions.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Is my information secure?</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Absolutely. Enrollet uses enterprise-grade encryption to protect your personal data. We never share your information without your explicit consent.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Do you offer guidance on university selection?</h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Yes, Enrollet provides personalized university recommendations based on your academic profile, preferences, and career goals. Our advanced matching algorithm helps you find schools where you&apos;re likely to thrive.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="get-started" className="section gradient-bg py-12 md:py-20">
          <div className="mobile-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Ready to simplify your college applications?</h2>
            <p className="text-base md:text-lg text-[#4b5563] mb-6 md:mb-8 max-w-2xl mx-auto">
              Join thousands of students who are saving time and reducing stress with Enrollet
            </p>
            
            <Link href="#" className="primary-button text-base md:text-lg py-3 px-6 md:px-8">
              Get Started Today
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-8 md:py-12">
        <div className="mobile-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Image src="/enrollet-logo.svg" alt="Enrollet Logo" width={28} height={28} />
                <span className="text-lg font-bold">enrollet</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 mb-4">
                Simplifying college applications for students worldwide.
              </p>
              <p className="text-xs md:text-sm text-gray-500">
                © {new Date().getFullYear()} Enrollet. All rights reserved.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Product</h3>
              <ul className="space-y-2">
                <li><Link href="#features" className="text-xs md:text-sm footer-link">Features</Link></li>
                <li><Link href="#how-it-works" className="text-xs md:text-sm footer-link">How It Works</Link></li>
                <li><Link href="#" className="text-xs md:text-sm footer-link">Pricing</Link></li>
                <li><Link href="#search" className="text-xs md:text-sm footer-link">College Search</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-xs md:text-sm footer-link">About</Link></li>
                <li><Link href="#" className="text-xs md:text-sm footer-link">Blog</Link></li>
                <li><Link href="#" className="text-xs md:text-sm footer-link">Careers</Link></li>
                <li><Link href="#" className="text-xs md:text-sm footer-link">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-xs md:text-sm footer-link">Privacy Policy</Link></li>
                <li><Link href="#" className="text-xs md:text-sm footer-link">Terms of Service</Link></li>
                <li><Link href="#" className="text-xs md:text-sm footer-link">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
