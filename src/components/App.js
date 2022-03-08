import React                  from 'react';
import HeroSection            from './HeroSection';
import BadEffects             from './BadEffects';
import SustainabilitySection  from './SustainabilitySection';
import PricingSection         from './PricingSection';
import Footer                 from './Footer';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <HeroSection />
        <BadEffects />
        <SustainabilitySection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
