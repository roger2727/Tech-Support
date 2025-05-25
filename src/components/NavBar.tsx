'use client'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bannerVisible, setBannerVisible] = useState(true);

  // Check if banner is visible
  useEffect(() => {
    const checkBannerState = () => {
      const bannerState = sessionStorage.getItem('announcementBannerClosed');
      setBannerVisible(bannerState !== 'true');
    };
    
    // Check initial state
    checkBannerState();
    
    // Set up event listener for storage changes
    window.addEventListener('storage', checkBannerState);
    
    return () => {
      window.removeEventListener('storage', checkBannerState);
    };
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`w-full fixed ${bannerVisible ? 'top-10 md:top-10' : 'top-0'} left-0 z-90 transition-all duration-300 ${
        scrolled ? 'bg-black/40 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="w-full py-4">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
          <div className="flex items-center">
            <Image 
              width={150}
              height={150} 
              src="/justNameW.webp" 
              alt="Hero Logo"
            />
            
            {/* Desktop Navigation Menu - Hidden on mobile */}
            <div className="hidden md:flex ml-8 relative">
              <nav>
                <ul className="flex space-x-1">
                  <li>
                    <a href="#services" className="block px-4 py-2 text-white drop-shadow-md hover:bg-white/20 rounded-md">
                      Services
                    </a>
                  </li>
                  
                  <li>
                    <a href="#pricing" className="block px-4 py-2 text-white drop-shadow-md hover:bg-white/20 rounded-md">
                      Pricing
                    </a>
                  </li>
                  
                  <li>
                    <a href="#about" className="block px-4 py-2 text-white drop-shadow-md hover:bg-white/20 rounded-md">
                      About Me
                    </a>
                  </li>
                  
                  <li>
                    <a href="#contact" className="block px-4 py-2 text-white drop-shadow-md hover:bg-white/20 rounded-md">
                      Contact
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
          {/* Desktop CTA Button - Hidden on mobile */}
          <div className="hidden md:flex">
            <a 
              href="#contact" 
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-lg shadow-md"
            >
       Get In Touch
            </a>
          </div>
          
          {/* Mobile Menu Button - Visible only on mobile */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden text-white p-2 z-30 relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>
        
        {/* Mobile Menu - Slides in from right side when toggled */}
        <div 
          className={`fixed md:hidden bg-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out z-20 inset-0 h-[100dvh] overflow-auto ${
            isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'
          }`}
        >
          <div className="w-full h-full flex flex-col p-4">
            {/* Logo in mobile menu with padding */}
            <div className="flex justify-start mb-8 mt-4">
              <Image 
                width={100}
                height={100} 
                src="/ringW.webp" 
                alt="Hero Logo"
              />
            </div>
            
            <nav className="container mx-auto px-4">
              <ul className="space-y-6">
                <li className="border-b border-white/20 pb-4">
                  <a 
                    href="#services" 
                    className="block text-white text-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                </li>
                
                <li className="border-b border-white/20 pb-4">
                  <a 
                    href="#pricing" 
                    className="block text-white text-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                </li>
                
                <li className="border-b border-white/20 pb-4">
                  <a 
                    href="#about" 
                    className="block text-white text-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Me
                  </a>
                </li>
                
                <li className="border-b border-white/20 pb-4">
                  <a 
                    href="#contact" 
                    className="block text-white text-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
                
                {/* Single CTA Button */}
                <li className="pt-4">
                  <a 
                    href="#contact"
                    className="block w-full px-4 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 text-lg shadow-md text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                     Get In Touch
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}