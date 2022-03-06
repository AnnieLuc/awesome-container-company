import React                  from 'react';
import SustainabilitySection  from './SustainabilitySection';
import CompetitionSection     from './CompetitionSection';
import PricingSection         from './PricingSection';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <CompetitionSection />
        <SustainabilitySection />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;
