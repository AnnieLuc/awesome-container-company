import React                  from 'react';
import SectionHeading         from './SectionHeading';
import SectionPara            from './SectionPara';
import Carousel               from './Carousel';
import logisticsSupportImage  from '../images/backend-logistics-support.svg';
import saveCostImage          from '../images/save-costs.svg';
import saveStorageImage       from '../images/save-storage.svg';

/**
 * The **SustainabilityDeliveredSection** component discusses replaces how the company replaces single-use packaging with reusable stainless steel containers.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function SustainabilityDeliveredSection() {
  return (
    <section id="sustainability-delivered" className="bg-secondary-200">
      <div className="mx-auto py-[120px] px-[50px] max-w-[1440px]">
        <div className="flex flex-col items-center">
          <SectionHeading align="center" color="primary">Sustainability Delivered</SectionHeading>
          <div className="my-[40px] w-full max-w-[598px]">
            <SectionPara align="center" color="primary" lineHeight="6">
              <span className="text-highlight-100">Awesome Container Company</span> replaces single-use packaging with reusable stainless steel containers
            </SectionPara>
          </div>
        </div>
        <Carousel />
        <div className="mt-[100px] px-[100px]">
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[152.73px]">
                <img src={logisticsSupportImage} alt="logistics support" className="w-full object-contain object-center text-center" />
              </div>
              <p className="mt-[30px] text-lg font-normal leading-7 text-primary">Backend logistics support</p>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-col items-center max-w-[380px]">
              <div className="w-full max-w-[152.73px]">
                <img src={saveCostImage} alt="save cost" className="w-full object-contain object-center" />
              </div>
              <p className="mt-[30px] text-lg font-normal leading-7 text-primary text-center">Save at least 50% on supply cost and time on inventory tracking / re-orders</p>
            </div>
          </div>
          <div className="flex">
            <div className="ml-[150px] flex flex-col items-center max-w-[543px]">
              <div className="w-full max-w-[152.73px]">
                <img src={saveStorageImage} alt="save storage" className="w-full object-contain object-center" />
              </div>
              <p className="mt-[30px] text-lg font-normal leading-7 text-primary text-center">Save storage space while removing tons of waste from our oceans and landfills</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SustainabilityDeliveredSection;
