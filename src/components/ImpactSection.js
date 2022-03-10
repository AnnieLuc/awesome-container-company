import React from "react";
import ImpactCard from "./ImpactCard";
import SectionHeading from "./SectionHeading";
import impacts from "../utils/impacts";
import Ovals from "../images/ovals-impact.svg";
import Rectangles from "../images/rectangles-impact.svg";

function ImpactSection() {
  return (
    <section>
      <div className=" bg-secondary-200 pt-[120px] mx-auto flex flex-col items-center">
        <SectionHeading align="center" color="primary">
          Impact
        </SectionHeading>
        {/* <div className="impact-rectangles h-[118px] w-[249px]"></div> */}
        <div>
          <img src={Rectangles} alt="" />
          <img src={Ovals} alt="" />
        </div>
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
