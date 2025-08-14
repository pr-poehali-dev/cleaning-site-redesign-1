import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CalculatorSection from '@/components/CalculatorSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <CalculatorSection />
      <ReviewsSection />
      <ContactsSection />
    </div>
  );
};

export default Home;