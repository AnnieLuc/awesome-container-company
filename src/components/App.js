import React                  from 'react';
import SustainabilitySection  from './SustainabilitySection';
import PricingSection         from './PricingSection';
import Footer                 from './Footer';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <SustainabilitySection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
