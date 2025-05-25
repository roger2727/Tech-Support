'use client'
import React from 'react';

type SectionHeaderProps = {
  title: string;
  description: string;
  backgroundFill?: string;
  extraDescription?: string;
};

const SectionHeader = ({ 
  title, 
  description,
  extraDescription,
  backgroundFill = "fill-slate-50" 
}: {
  title: string;
  description: string;
  backgroundFill?: string;
  extraDescription?: string;
}) => {
  return (
    <div className="w-full bg-blue-800 text-white py-20 relative">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-50 drop-shadow-md tracking-wide">
          {title}
        </h2>
        <p className="text-xl max-w-3xl mx-auto text-blue-50 leading-relaxed font-medium">
          {description}
        </p>
        {extraDescription && (
          <p className="text-lg max-w-3xl mx-auto mt-4 text-blue-50 leading-relaxed">
            {extraDescription}
          </p>
        )}
      </div>
      
      {/* Reversed curve with optimized SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16"
          viewBox="0 0 1440 50" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ transform: 'translateY(1px)' }}
        >
          <path 
            d="M0,50 L1440,50 L1440,0 C1288.2,33.4 1018.5,50 719,50 C419.5,50 149.8,33.4 0,0 Z" 
            className={backgroundFill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SectionHeader;