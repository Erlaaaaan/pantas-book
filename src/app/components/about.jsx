"use client";

import Image from "next/image";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export default function About() {
  const [aboutRef, isAboutVisible] = useScrollAnimation(0.1);
  return (
    <section className="relative py-16 px-8 lg:px-16 overflow-hidden" style={{backgroundColor: '#c7ae98'}}>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Content Area (2/3 width) */}
          <div className="lg:col-span-2 space-y-6" ref={aboutRef}>
            {/* About Us Label */}
            <p className={`text-sm uppercase tracking-wide transition-all duration-1000 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#716d73', transitionDelay: '0.2s'}}>
              About Us
            </p>
            
            {/* Main Title */}
            <h2 className={`text-4xl lg:text-5xl font-bold leading-tight transition-all duration-1000 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#535466', transitionDelay: '0.4s'}}>
              Curabitur At Lacus Ac Velit Ornare Lobortis. Aenean Leo Ligula, Porttitor Fu, Consoque Vitae, Eleifend Ac, Enim. Donec Sodales
            </h2>
            
            {/* Description */}
            <p className={`text-lg leading-relaxed transition-all duration-1000 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{color: '#716d73', transitionDelay: '0.6s'}}>
              Curabitur vel, Vestibulum rutrum, in nec elementum vehicula, orci quam gravida vel, elit ligula tempus sed enim. Donec elit libero, sodales nec, volutpat a suscipit non, lorem. Suspendisse enim eu risus, dictum sed, iaculis a condimentum nec, leo. Quisque eros tortor, suscipit eget, imperdiet eu, imperdiet a eu, ipsum.
            </p>
            
            {/* More With Us Button */}
            <button className={`border-2 px-8 py-3 rounded-lg font-medium transition-colors transition-all duration-1000 ${isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{backgroundColor: 'white', borderColor: '#535466', color: '#535466', transitionDelay: '0.8s'}} onMouseEnter={(e) => {e.target.style.backgroundColor = '#535466'; e.target.style.color = 'white'}} onMouseLeave={(e) => {e.target.style.backgroundColor = 'white'; e.target.style.color = '#535466'}}>
              More With Us
            </button>
          </div>

          {/* Right Column - Image Area (1/3 width) */}
          <div className="lg:col-span-1 relative">
            {/* Overlapping Image - Extends to right edge */}
            <div className="absolute top-0 right-0 w-full h-full">
              <Image
                src="/images/overlay.jpg"
                alt="Professional team member"
                width={500}
                height={400}
                className="object-cover rounded-l-xl"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '400px'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
