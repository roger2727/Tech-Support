'use client'
import React from 'react';
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 max-w-6xl py-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <Image 
              width={150}
              height={150} 
              src="/justName.png" 
              alt="TechForSeniors Logo"
            />
            <p className="text-slate-300 mt-2">
              Technology support for seniors in Lake Macquarie.
            </p>
          </div>
          
          {/* Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="h-10 w-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z" />
              </svg>
            </a>
            <a href="#" aria-label="Email" className="h-10 w-10 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href="#" aria-label="Phone" className="h-10 w-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-200">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Horizontal Divider */}
        <div className="border-t border-slate-700 my-6"></div>
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} TechForSeniors. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-300 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;