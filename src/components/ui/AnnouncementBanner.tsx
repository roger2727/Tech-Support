'use client'
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);
  
  // Check if banner was previously closed in this session
  useEffect(() => {
    const bannerState = sessionStorage.getItem('announcementBannerClosed');
    if (bannerState === 'true') {
      setIsVisible(false);
    }
  }, []);

  const closeBanner = () => {
    setIsVisible(false);
    // Store the closed state in session storage
    sessionStorage.setItem('announcementBannerClosed', 'true');
  };

  // If banner is not visible, don't render anything
  if (!isVisible) return null;

  return (
    <div className="w-full bg-orange-500 text-white fixed top-0 left-0 z-30">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex-1 text-center md:text-left">
        <p className="font-medium text-sm md:text-base">
            <span className="hidden md:inline"> Senior Support: </span>
            <strong>Seniors (50+) save 40% on tech support!</strong>
            <span className="hidden md:inline"> In-home visits $60/hr.</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="#pricing" 
            className="hidden md:inline-block text-sm font-bold underline"
          >
            View Pricing
          </a>
          <button 
            onClick={closeBanner}
            className="p-1 hover:bg-emerald-700 rounded-full"
            aria-label="Close announcement"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}