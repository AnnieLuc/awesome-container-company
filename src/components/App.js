import React                  from 'react';
import BadEffects             from './BadEffects';
import SustainabilitySection  from './SustainabilitySection';
import CompetitionSection     from './CompetitionSection';
import PricingSection         from './PricingSection';
import Footer                 from './Footer';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <CompetitionSection />
        <BadEffects />
        <SustainabilitySection />
        <PricingSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
