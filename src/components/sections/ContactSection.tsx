'use client'
import React, { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    preferredContact: 'email',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error message when user starts typing again
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({
          name: '',
          email: '',
          message: '',
          phone: '',
          preferredContact: 'email',
        });
        
        // Reset submitted state after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-slate-50" id="contact">
      <SectionHeader 
        title="Get In Touch"
        description="Have a technology question or need assistance? I'm here to help you navigate the digital world with confidence."
      />

      <div className="container mx-auto px-4 max-w-6xl py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left column - Contact information */}
          <div className="lg:w-5/12">
            <h3 className="text-3xl font-bold text-blue-600 mb-8">Contact Information</h3>
            
            <div className="space-y-8 mb-12">
              {/* Phone */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">Call or text for a quick response</p>
                  <a href="tel:+61400123456" className="text-blue-600 font-medium hover:underline">0400 123 456</a>
                </div>
              </div>
              
              {/* Email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">Send a detailed message anytime</p>
                  <a href="mailto:help@yourdomain.com" className="text-blue-600 font-medium hover:underline">help@yourdomain.com</a>
                </div>
              </div>
              
              {/* Location */}
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">Service Area</h4>
                  <p className="text-gray-600">Serving clients throughout</p>
                  <p className="text-gray-700">Lake Macquarie</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Hours of Availability</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
              <p className="mt-4 text-gray-600 text-sm">* Special arrangements can be made for urgent needs</p>
            </div>
          </div>
          
          {/* Right column - Contact form */}
          <div className="lg:w-7/12">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="h-8 w-8 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your message has been sent successfully. I'll be in touch with you shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-3xl font-bold text-blue-600 mb-8">Send Me a Message</h3>
                
                {/* Error message display */}
                {errorMessage && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <div className="flex items-center">
                      <svg className="h-5 w-5 text-red-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <span>{errorMessage}</span>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name field */}
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="John Smith"
                      />
                    </div>
                    
                    {/* Email field */}
                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  {/* Phone field */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="0400 123 456"
                    />
                  </div>
                  
                  {/* Improved Preferred contact method section */}
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">How Would You Like Me to Respond?</label>
                    <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 bg-gray-50 p-4 rounded-lg">
                      <label className={`flex items-center p-3 border rounded-md ${formState.preferredContact === 'phone' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:bg-blue-50'}`}>
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formState.preferredContact === 'phone'}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="h-5 w-5 text-blue-600 disabled:cursor-not-allowed"
                        />
                        <div className="ml-3">
                          <span className="block font-medium text-gray-800">By Phone</span>
                          <span className="text-sm text-gray-600">I'll call you back as soon as possible</span>
                        </div>
                      </label>
                      <label className={`flex items-center p-3 border rounded-md ${formState.preferredContact === 'email' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'} ${isSubmitting ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:bg-blue-50'}`}>
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formState.preferredContact === 'email'}
                          onChange={handleChange}
                          disabled={isSubmitting}
                          className="h-5 w-5 text-blue-600 disabled:cursor-not-allowed"
                        />
                        <div className="ml-3">
                          <span className="block font-medium text-gray-800">By Email</span>
                          <span className="text-sm text-gray-600">I'll send a detailed reply to your inbox</span>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="Tell me about the technology challenge you're facing or how I can help..."
                    ></textarea>
                  </div>
                  
                  {/* Submit button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-300 shadow-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center">
                    I'll get back to you as soon as possible, usually within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;