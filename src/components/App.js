import React                          from 'react';
import NavBar                         from './NavBar';
import HeroSection                    from './HeroSection';
import BadEffectsSection              from './BadEffectsSection';
import SustainabilityDeliveredSection from './SustainabilityDeliveredSection';
import ImpactSection                  from "./ImpactSection";
import CompetitionSection             from './CompetitionSection';
import SustainabilitySection          from './SustainabilitySection';
import PricingSection                 from './PricingSection';
import AwesomeTeam                    from './AwesomeTeam';
import AwesomePartners                from './AwesomePartners';
import Footer                         from './Footer';

/**
 * The main React **App** component.
 *
 * @version 1.0.0
 * @author [Alec Drosu](https://github.com/AlecDrosu)
 * @author [Ekaterina Cratcha](https://github.com/cratcha)
 * @author [Shraddha](https://github.com/5hraddha)
 */
function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <NavBar />
        <HeroSection />
        <BadEffectsSection />
        <SustainabilityDeliveredSection />
        <ImpactSection />
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
