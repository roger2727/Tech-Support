'use client'
import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('seniors'); // Default to seniors tab
  
  const seniorPricingPlans = [
    {
      name: "In-Home Visit",
      price: "$60",
      duration: "per hour",
      description: "Personalized in-home support to solve your tech problems.",
      features: [
        "Face-to-face assistance at your home",
        "Patient, jargon-free explanations",
        "No fix, no fee guarantee",
        "Written instructions to refer back to",
        "Follow-up support via phone (if needed) for only $40",
      ],
      popular: true,
      buttonText: "Book a Home Visit"
    }
  ];
  
  const regularPricingPlans = [
    {
      name: "In-Home Visit",
      price: "$100",
      duration: "per hour",
      description: "Personalized in-home support to solve your tech problems.",
      features: [
        "Face-to-face assistance at your home",
        "Patient, jargon-free explanations",
        "No fix, no fee guarantee",
        "Written instructions to refer back to",
        "Follow-up support via email"
      ],
      popular: true,
      buttonText: "Book a Home Visit"
    },
    {
      name: "Remote Support",
      price: "$65",
      duration: "per hour",
      description: "Get help over the phone or via video call from the comfort of your home.",
      features: [
        "Phone or video call assistance",
        "Screen sharing when possible",
        "Step-by-step guidance",
        "Email summary after the call",
        "No fix, no fee guarantee"
      ],
      popular: false,
      buttonText: "Schedule Remote Help"
    }
  ];

  const pricingPlans = activeTab === 'seniors' ? seniorPricingPlans : regularPricingPlans;

  return (
    <section id='pricing' className="bg-slate-50">
      {/* Use the reusable SectionHeader component */}
      <SectionHeader 
        title="Simple, Transparent Pricing"
        description="Choose the support option that works best for you. All plans include patient, personalized guidance with no technical jargon."
      />

      <div className="container mx-auto px-4 max-w-6xl py-12">
        {/* Pricing Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm p-1 bg-gray-100">
            <button
              onClick={() => setActiveTab('seniors')}
              className={`px-6 py-3 text-base font-medium rounded-md ${
                activeTab === 'seniors'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-all duration-200 ease-in-out`}
            >
              Seniors (50+)
            </button>
            <button
              onClick={() => setActiveTab('regular')}
              className={`px-6 py-3 text-base font-medium rounded-md ${
                activeTab === 'regular'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              } transition-all duration-200 ease-in-out`}
            >
              Standard Pricing
            </button>
          </div>
        </div>

     

        {/* Pricing cards grid - conditional based on which tab is active */}
        <div className={`grid ${activeTab === 'seniors' ? 'md:grid-cols-1 max-w-2xl mx-auto' : 'md:grid-cols-2'} gap-8`}>
          {pricingPlans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 relative ${
                plan.popular 
                  ? 'border-2 border-blue-500 shadow-xl' 
                  : 'border border-gray-200 shadow-lg'
              }`}
            >
          
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-1">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.duration}</span>
                </div>
                <p className="text-xs text-gray-500 italic mb-4">Standard hourly rate - You only pay if we resolve your issue</p>
                
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <p className="font-semibold text-gray-800 mb-3">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
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
                        <span className="ml-3 text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <a 
                    href="#contact" 
                    className={`block text-center py-3 px-6 rounded-lg transition duration-300 font-bold ${
                      plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                        : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
                    }`}
                  >
                    {plan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
    
      </div>
    </section>
  );
};

export default PricingSection;