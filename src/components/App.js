import React                  from 'react';
import BadEffects             from './BadEffects';
import SustainabilitySection  from './SustainabilitySection';
import PricingSection         from './PricingSection';
import Footer                 from './Footer';
import AwesomePartners            from './AwesomePartners';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <BadEffects />
        <SustainabilitySection />
        <PricingSection />
        <AwesomePartners />
        <Footer />
      </main>
    </div>
  );
}

export default App;
