"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Services() {
  const [servicesRef, isServicesVisible] = useScrollAnimation(0.1);
  return (
    <section className="py-16 px-8 lg:px-16" style={{backgroundColor: '#535466'}}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" ref={servicesRef}>
          <p className={`text-sm uppercase tracking-wide mb-4 transition-all duration-1000 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#c9ccc6', transitionDelay: '0.2s'}}>
            Our Services
          </p>
          <h2 className={`text-4xl lg:text-5xl font-bold text-white leading-tight transition-all duration-1000 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.4s'}}>
            <span className="" style={{textDecorationColor: '#c9ccc6'}}>
              Expert
            </span>{" "}
            Accounting Support At Every Business Stage
          </h2>
        </div>

        {/* Service Cards */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.6s'}}>
          {/* Tax Preparation Card */}
          <div className="rounded-lg p-8 text-center" style={{backgroundColor: '#716d73'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#535466'}}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Bank Reconciliation</h3>
            <p className="leading-relaxed mb-6" style={{color: '#c9ccc6'}}>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet 
              adipiscing sem neque sed ipsum. Proin viverra, ligula sit amet ultrices semper.
            </p>
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#c7ae98'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
              Learn More
            </button>
          </div>

          {/* Bookkeeping Card */}
          <div className="rounded-lg p-8 text-center" style={{backgroundColor: '#716d73'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#535466'}}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Accounts Payable and Accounts Receivable</h3>
            <p className="leading-relaxed mb-6" style={{color: '#c9ccc6'}}>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet 
              adipiscing sem neque sed ipsum. Proin viverra, ligula sit amet ultrices semper.
            </p>
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#c7ae98'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
              Learn More
            </button>
          </div>
 {/* Bookkeeping Card */}
 <div className="rounded-lg p-8 text-center" style={{backgroundColor: '#716d73'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#535466'}}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Generation Inventory management</h3>
            <p className="leading-relaxed mb-6" style={{color: '#c9ccc6'}}>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet 
              adipiscing sem neque sed ipsum. Proin viverra, ligula sit amet ultrices semper.
            </p>
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#c7ae98'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
              Learn More
            </button>
          </div>
           {/* Bookkeeping Card */}
           <div className="rounded-lg p-8 text-center" style={{backgroundColor: '#716d73'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#535466'}}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Contract management</h3>
            <p className="leading-relaxed mb-6" style={{color: '#c9ccc6'}}>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet 
              adipiscing sem neque sed ipsum. Proin viverra, ligula sit amet ultrices semper.
            </p>
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#c7ae98'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
              Learn More
            </button>
          </div>
           {/* Bookkeeping Card */}
           <div className="rounded-lg p-8 text-center" style={{backgroundColor: '#716d73'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#535466'}}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vendor Management</h3>
            <p className="leading-relaxed mb-6" style={{color: '#c9ccc6'}}>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet 
              adipiscing sem neque sed ipsum. Proin viverra, ligula sit amet ultrices semper.
            </p>
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#c7ae98'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
              Learn More
            </button>
          </div>
          {/* Consulting Card */}
          <div className="rounded-lg p-8 text-center" style={{backgroundColor: '#716d73'}}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{backgroundColor: '#535466'}}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Generation
            Financial statement </h3>
            <p className="leading-relaxed mb-6" style={{color: '#c9ccc6'}}>
              Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet 
              adipiscing sem neque sed ipsum. Proin viverra, ligula sit amet ultrices semper.
            </p>
            <button className="text-white px-6 py-3 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#c7ae98'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
