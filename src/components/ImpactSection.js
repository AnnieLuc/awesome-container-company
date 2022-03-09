import React from "react";
import ImpactCard from "./ImpactCard";
import SectionHeading from "./SectionHeading";
import impacts from "../utils/impacts";

function ImpactSection() {
  return (
    <section>
      <div className=" bg-secondary-200 pt-[120px] mx-auto flex flex-col items-center">
        <SectionHeading align="center" color="primary">
          Impact
        </SectionHeading>
        <div className="grid-card">
          {impacts.map((arrItem, index) => {
            return <ImpactCard cardData={arrItem} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ImpactSection;
