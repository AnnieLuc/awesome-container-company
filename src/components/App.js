import React                  from 'react';
import NavBar                 from './NavBar';
import HeroSection            from './HeroSection';
import BadEffects             from './BadEffects';
import SustainabilityDeliveredSection from './SustainabilityDeliveredSection';
import CompetitionSection     from './CompetitionSection';
import SustainabilitySection  from './SustainabilitySection';
import PricingSection         from './PricingSection';
import AwesomeTeam            from './AwesomeTeam';
import AwesomePartners        from './AwesomePartners';
import Footer                 from './Footer';


function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <NavBar />
        <HeroSection />
        <BadEffects />
        <SustainabilityDeliveredSection />
        <CompetitionSection />
        <SustainabilitySection />
        <PricingSection />
        <AwesomeTeam />
        <AwesomePartners />
        <Footer />
      </main>
    </div>
  );
}

export default App;
