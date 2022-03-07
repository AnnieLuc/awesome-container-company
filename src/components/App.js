import React                  from 'react';
import BadEffects             from './BadEffects';
import SustainabilitySection  from './SustainabilitySection';
import PricingSection         from './PricingSection';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <BadEffects />
        <SustainabilitySection />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;
