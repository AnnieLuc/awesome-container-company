import React                  from 'react';
import BadEffects             from './BadEffects';
import SustainabilitySection  from './SustainabilitySection';
import CompetitionSection     from './CompetitionSection';
import PricingSection         from './PricingSection';
import Footer                 from './Footer';
import AwesomeTeam            from './AwesomeTeam';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <CompetitionSection />
        <BadEffects />
        <SustainabilitySection />
        <PricingSection />
        <AwesomeTeam />
        <Footer />
      </main>
    </div>
  );
}

export default App;
