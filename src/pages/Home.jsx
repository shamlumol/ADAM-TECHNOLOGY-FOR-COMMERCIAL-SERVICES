import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import AboutSection from '../components/AboutSection/AboutSection';
import SecondaryAboutSection from '../components/SecondaryAboutSection/SecondaryAboutSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import CollectionSection from '../components/CollectionSection/CollectionSection';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div className="flex-grow-1">
      <HeroSection />
      <AboutSection />
      <SecondaryAboutSection />
      <ServicesSection />
      <CollectionSection />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
