import React from "react";
import ImpactSection from "./ImpactSection";
import SustainabilitySection from "./SustainabilitySection";
import PricingSection from "./PricingSection";

function App() {
  return (
    <div className="font-serif text-base font-normal leading-5">
      <main>
        <ImpactSection />
        <SustainabilitySection />
        <PricingSection />
      </main>
    </div>
  );
}

export default App;
