'use client'
import React, { useState, useCallback, memo, useEffect } from 'react';
import Image from 'next/image'; // Using Next.js Image component for optimization
import SectionHeader from '../ui/SectionHeader';

// Create a memoized service card component to prevent unnecessary re-renders
const ServiceCard = memo(({ 
  category, 
  index, 
  isExpanded, 
  onToggle 
}: { 
  category: any; 
  index: number; 
  isExpanded: boolean; 
  onToggle: (index: number) => void;
}) => {
  // Only re-render this component when props change
  return (
    <div 
      className="bg-white rounded-xl overflow-hidden transition-transform duration-200 hover:-translate-y-2 border border-gray-200 shadow-lg will-change-transform"
    >              
      {/* Image section at top of card with proper loading optimization */}
      <div className="h-48 bg-blue-100 overflow-hidden relative">
        {/* Replace standard img with Next.js Image for performance */}
        <div className="relative h-full w-full">
          <Image 
            src={category.image} 
            alt={`${category.name} services`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index < 2} // Prioritize loading the first two images
            loading={index < 2 ? "eager" : "lazy"}
          />
        </div>
        {/* Overlay with category name */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <h3 className="text-2xl font-bold text-white absolute bottom-4 left-4">
          {category.name}
        </h3>
      </div>
      
      <div className="p-8">
        <p className="text-gray-600 mb-6">
          {category.description}
        </p>
        
        <div className="mb-6">
          <ul className="space-y-3">
            {/* Always show the main services */}
            {category.services.map((service: string, idx: number) => (
              <li 
                key={idx} 
                className="flex items-start"
              >
                <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg 
                    className="h-3 w-3 text-blue-500" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                <span className="ml-3 text-gray-700">{service}</span>
              </li>
            ))}
            
            {/* Show additional services only when the card is expanded */}
            {isExpanded && (
              <div className="animate-fadeIn" style={{ animationDuration: '200ms' }}>
                {category.additionalServices.map((service: string, idx: number) => (
                  <li 
                    key={`additional-${idx}`} 
                    className="flex items-start mt-3"
                  >
                    <div className="flex-shrink-0 h-6 w-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                      <svg 
                        className="h-3 w-3 text-blue-500" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">{service}</span>
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
        
        {/* Toggle button to show/hide additional services - UPDATED TO BLUE WITH WHITE TEXT */}
        <button
          onClick={() => onToggle(index)}
          className="w-full py-2 px-4 bg-blue-700 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 flex items-center justify-center font-medium"
        >
          {isExpanded ? (
            <>
              <span>Show Less</span>
              <svg 
                className="ml-2 h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M5 15l7-7 7 7"
                ></path>
              </svg>
            </>
          ) : (
            <>
              <span>Show More</span>
              <svg 
                className="ml-2 h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </>
          )}
        </button>
      </div>
    </div>
  );
});

// Add display name for debugging purposes
ServiceCard.displayName = 'ServiceCard';

// Main Services Section component
const ServicesSection = () => {
  // Use an array of booleans for better performance than an object
  const [expandedCards, setExpandedCards] = useState<boolean[]>([]);
  
  // Initialize expanded state on mount
  useEffect(() => {
    setExpandedCards(Array(serviceCategories.length).fill(false));
  }, []);

  // Memoize the toggle function to prevent recreating it on every render
  const toggleServices = useCallback((index: number) => {
    setExpandedCards(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }, []);

  const serviceCategories = [
    {
      name: "Staying Connected",
      image: "/connectedW.webp",
      description: "Help with video calls, messaging, and keeping in touch with loved ones digitally.",
      services: [
        "FaceTime and Zoom setup and troubleshooting",
        "WhatsApp and messaging apps assistance",
        "Photo sharing and social media basics"
      ],
      additionalServices: [
        "Email setup and management",
        "Voice assistant setup (Alexa, Google Home, Siri) for hands-free communication",
        "Cloud photo storage",
        "Digital security and privacy guidance for safe online communication"
        
      ]
    },
    {
      name: "Health & Wellbeing",
      image: "/healthW.webp",
      description: "Access telehealth services and health resources from the comfort of your home.",
      services: [
        "Telehealth platform navigation and setup assistance",
        "Medicare app navigation",
        "Health monitoring apps assistance"
      ],
      additionalServices: [
        "Medication reminder apps setup",
        "Health record organization",
        "Fitness tracking apps for seniors",
        "Online pharmacy ordering"
      ]
    },
    {
      name: "Everyday Assistance",
      description: "Navigate essential online services that make daily life easier.",
      image: "/assistanceW.webp",
      services: [
        "Online shopping and delivery services",
        "MyGov and Service NSW assistance",
        "Bill payments and banking support"
      ],
      additionalServices: [
        "Transport and rideshare app setup",
        "Meal delivery service navigation",
        "Online grocery ordering",
        "Calendar and reminder setup",
        "Password management system setup and education",
        "Digital ID and government services navigation (beyond MyGov)",
        "Using ChatGPT and AI assistants for daily help",
        "Voice-to-text and AI dictation for easier communication",
        "Setting up and using Siri, Alexa, or Google Assistant"
      ]
    },
    {
      name: "Leisure & Learning",
      description: "Discover entertainment options and preserve  memories digitally.",
      image: "/tvW.webp",
      services: [
        "Streaming services setup (Netflix, ABC iView)",
        "Digital photo organization and sharing",
        "Audiobooks, podcasts, and online learning"
      ],
      additionalServices: [
        "E-book readers and library apps",
        "Online games for cognitive health",
        "Digital music streaming services and playlist creation"
      ]
    }
  ];

  return (
    <section id='services' className="bg-slate-50">
      {/* Use the reusable SectionHeader component */}
      <SectionHeader 
  title="Services I Provide"
  description="I'm here to help you get comfortable with your technology in a way that makes sense to you. No rush, no pressure - just friendly guidance that focuses on what matters most in your daily life. Together, we'll turn tech frustrations into 'aha!' moments."
/>

      {/* Services section with optimized card rendering */}
      <div className="container mx-auto px-4 max-w-6xl py-24">
        {/* Background pattern - using CSS instead of multiple divs for better performance */}
        <div 
          className="absolute inset-0 z-0 opacity-10"
        
        ></div>
        
        {/* Service Categories as Cards - Using windowing for performance on long lists */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 relative z-10">
          {serviceCategories.map((category, index) => (
            <ServiceCard
              key={index}
              category={category}
              index={index}
              isExpanded={expandedCards[index] || false}
              onToggle={toggleServices}
            />
          ))}
        </div>
        
        {/* Additional services promotion - improved performance */}
        
      </div>
    </section>
  );
};

export default ServicesSection;