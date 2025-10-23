"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function Hero() {
  const [heroRef, isHeroVisible] = useScrollAnimation(0.2);
  return (
    <section className="min-h-screen flex">
      {/* Left Column - Content Area */}
      <div className="flex-1 px-8 py-16 lg:px-16 flex flex-col justify-center" style={{backgroundColor: '#c7ae98'}}>
        <div className="max-w-lg" ref={heroRef}>
          {/* Top Label */}
          <p className={`text-sm mb-4 uppercase tracking-wide transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#716d73', transitionDelay: '0.2s'}}>
            Business Accounting Lifestyle
          </p>
          
          {/* Main Heading */}
          <h1 className={`text-4xl lg:text-5xl font-bold leading-tight mb-6 transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#535466', transitionDelay: '0.4s'}}>
            Empowering Your Finances:{" "}
            <span className="" style={{textDecorationColor: '#535466'}}>
            Smarter Bookkeeping
            </span>{" "}
            for Modern Entrepreneurs
          </h1>
          
          {/* Paragraph Text */}
          <p className={`text-lg mb-8 leading-relaxed transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#716d73', transitionDelay: '0.6s'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
            irure dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
          
          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isHeroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{transitionDelay: '0.8s'}}>
            <button className="text-white px-8 py-3 rounded-lg font-medium transition-colors" style={{backgroundColor: '#535466'}} onMouseEnter={(e) => e.target.style.backgroundColor = '#716d73'} onMouseLeave={(e) => e.target.style.backgroundColor = '#535466'}>
              Book for Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Right Column - Image Area */}
      <div className="flex-1 relative">
        {/* Main Image */}
        <div className="h-full relative">
          <Image
            src="/images/book.jpg"
            alt="Professional accounting services"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Bottom Rating Bar */}
        <div className="absolute bottom-0 left-0 right-0 text-white py-4 px-8" style={{backgroundColor: '#535466'}}>
          <div className="text-center">
            <span className="text-lg font-medium">4.9/5: Best-Rated Accounting Services</span>
          </div>
        </div>
      </div>
    </section>
  );
}
