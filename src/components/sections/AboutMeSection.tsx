'use client'
import React from 'react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

const AboutMeSection = () => {
  return (
    <section id='about' className="bg-slate-50">
      <SectionHeader 
        title="About Me"
        description="I bridge the technology gap with clear, patient guidance for seniors."
      />

      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left column - Photo */}
          <div className="lg:w-5/12">
            <div className="relative mb-8 mx-auto max-w-md">
              <div className="absolute -top-3 -left-3 md:-top-6 md:-left-6 w-full h-full bg-blue-100 rounded-tl-3xl z-0"></div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-6 md:-right-6 w-full h-full bg-blue-200 rounded-br-3xl z-0"></div>
              <div className="absolute inset-0 m-auto w-11/12 md:w-4/5 h-11/12 md:h-4/5 bg-blue-500 rounded-full z-10 opacity-10"></div>
              <div className="relative z-20 p-4">
                <Image 
                  src="/me.png" 
                  alt="Mitch - Tech Support Specialist" 
                  className="w-full h-auto mx-auto max-w-xs md:max-w-full"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          
          {/* Right column - Bio and story */}
          <div className="lg:w-7/12">
            <h3 className="text-3xl font-bold text-blue-600 mb-6">Hi! I'm Mitch, Your Tech Support</h3>
            
            <div className="space-y-5 text-gray-700">
              <p className="text-lg">
                As a tech professional based in Lake Macquarie with a Diploma in Information Technology, I bring technical expertise to helping seniors navigate the digital world.
              </p>
              
              <p>
                My background in technology gives me a deep understanding of how digital devices and applications work. This knowledge allows me to provide personalized support for all your digital needs—from smartphones and tablets to video calling and online banking—with clear explanations and no complicated jargon.
              </p>
              
              <h4 className="text-xl font-bold text-blue-600 mt-6 mb-3">My Approach</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="h-3 w-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3">Focus on your specific technology goals</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="h-3 w-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3">Explain technology in plain English</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="h-3 w-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3">Work at your preferred pace</span>
                </li>
              </ul>
              
        
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;