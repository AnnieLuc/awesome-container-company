import React                  from 'react';
import HeroSection            from './HeroSection';
import BadEffects             from './BadEffects';
import SustainabilityDeliveredSection from './SustainabilityDeliveredSection';
import CompetitionSection     from './CompetitionSection';
import SustainabilitySection  from './SustainabilitySection';
import PricingSection         from './PricingSection';
import AwesomeTeam            from './AwesomeTeam';
import Footer                 from './Footer';

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <HeroSection />
        <BadEffects />
        <SustainabilityDeliveredSection />
        <CompetitionSection />
        <SustainabilitySection />
        <PricingSection />
        <AwesomeTeam />
        <Footer />
      </main>
    </div>
  );
}

export default App;
