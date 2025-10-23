"use client";

import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Map() {
  const [mapRef, isMapVisible] = useScrollAnimation(0.1);
  return (
    <section className="bg-white py-16 px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12" ref={mapRef}>
          <h2 className={`text-3xl lg:text-4xl font-bold mb-4 transition-all duration-1000 ${isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#535466', transitionDelay: '0.2s'}}>
            Visit Our Office
          </h2>
          <p className={`text-lg max-w-2xl mx-auto transition-all duration-1000 ${isMapVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#716d73', transitionDelay: '0.4s'}}>
            Located in the heart of the business district, our office provides a professional 
            environment for all your accounting needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg">
              {/* Map Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{backgroundColor: '#535466'}}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2" style={{color: '#535466'}}>Interactive Map</h3>
                  <p style={{color: '#716d73'}}>Ready for Google Maps integration</p>
                </div>
              </div>
              
              {/* Map Overlay Elements */}
              <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md">
                <span className="text-sm font-medium" style={{color: '#535466'}}>📍 Our Location</span>
              </div>
              
              {/* Zoom Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center">
                  <span className="font-bold" style={{color: '#535466'}}>+</span>
                </button>
                <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center">
                  <span className="font-bold" style={{color: '#535466'}}>−</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Office Hours */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center" style={{color: '#535466'}}>
                  <svg className="w-5 h-5 mr-3" style={{color: '#535466'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                  Office Hours
                </h3>
                <div className="space-y-2" style={{color: '#716d73'}}>
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{color: '#535466'}} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span style={{color: '#716d73'}}>123 Business Plaza, Suite 456, Financial District</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{color: '#535466'}} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span style={{color: '#716d73'}}>(555) 123-4567</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3" style={{color: '#535466'}} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span style={{color: '#716d73'}}>info@accountant.com</span>
                </div>
              </div>

              {/* Get Directions Button */}
              <button className="w-full text-white py-3 px-6 rounded-lg font-medium transition-colors flex items-center justify-center" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#716d73'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
