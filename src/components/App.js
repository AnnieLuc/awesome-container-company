import React from "react";

import HeroSection from "./HeroSection";
import BadEffects from "./BadEffects";
import SustainabilitySection from "./SustainabilitySection";
import ImpactSection from "./ImpactSection";
import CompetitionSection from "./CompetitionSection";
import PricingSection from "./PricingSection";
import Footer from "./Footer";
import AwesomeTeam from "./AwesomeTeam";

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <HeroSection />
        <BadEffects />
        <CompetitionSection />
        <SustainabilitySection />
        <ImpactSection />
        <PricingSection />
        <AwesomeTeam />
        <Footer />
      </main>
    </div>
  );
}

export default App;
