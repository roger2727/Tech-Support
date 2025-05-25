'use client';

import { useRef, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <section id='hero' className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Loading State - Use poster image */}
        {!isVideoLoaded && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("/lakePoster.png")' }}
          >
            {/* Loading indicator */}
            <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-white/80 text-sm">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Loading video...</span>
            </div>
          </div>
        )}
        
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload='auto'
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          onCanPlay={() => setIsVideoLoaded(true)}
        >
          <source src="/lakeCompressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl animate-fadeIn">
        {/* Main Headline with strong text shadow */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8" 
            style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
          <span className="text-blue-300">Tech Support</span> Made Simple
        </h1>
        
        {/* Text with strong shadows and better spacing */}
        <div className="">
          <p className="text-xl md:text-2xl text-white leading-relaxed font-medium max-w-4xl mx-auto mb-8"
             style={{textShadow: '1px 1px 6px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)'}}>
            I specialize in helping seniors throughout <span className="text-blue-300 font-semibold">Lake Macquarie</span> navigate 
            technology with patience and care.
          </p>
          
          {/* Mobile Get in Touch Button */}
          <div className="block md:hidden mt-8">
            <button
              onClick={scrollToContact}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
              style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white/80 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}