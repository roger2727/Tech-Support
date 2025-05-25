import Hero from '@/components/sections/Hero';
import NavBar from '../components/NavBar';
import ServicesSection from '@/components/sections/Services';
import PricingSection from '@/components/sections/PricingSection';
import AboutMeSection from '@/components/sections/AboutMeSection';
import { Contact } from 'lucide-react';
import ContactSection from '@/components/sections/ContactSection';
import AnnouncementBanner from '@/components/ui/AnnouncementBanner';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnnouncementBanner />
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <ServicesSection />
        <PricingSection/>
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
      {/* <footer className="bg-gray-100 text-gray-700 py-6 border-t">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Lake Mac Tech Support. Serving the local community.</p>
        </div>
      </footer> */}
    </div>
  );
}