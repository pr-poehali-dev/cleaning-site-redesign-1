import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CalculatorSection from '@/components/CalculatorSection';
import ShopRentalSection from '@/components/ShopRentalSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        cartItems={cartItems} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />
      <HeroSection />
      <ServicesSection />
      <CalculatorSection />
      <ShopRentalSection 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
      />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;