import React            from 'react';
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from 'react-compare-slider';
import foodInContainer  from '../images/food-with-awesome-container.png';
import foodWaste        from '../images/food-waste.png';

/**
 * The **ImageCompareSlider** component represents a slider to compare two images.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function ImageCompareSlider() {
  const renderHandle = () => {
    return (
      <div className="relative h-full">
        <div className="absolute inset-y-0 bg-highlight-100 w-[3px] -ml-[1.5px]">
          <button
            className="h-[28px] w-[28px] -ml-[14px] -mt-[14px] rounded-full bg-highlight-100 absolute top-1/2
        bg-[url('./images/slider-handler.svg')] bg-no-repeat bg-center bg-contain">
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="imageSlider" className="w-full">
      <ReactCompareSlider
        className="w-full max-w-[626px] max-h-[369px] border border-primary rounded-[20px]"
        handle={renderHandle()}
        itemOne={<ReactCompareSliderImage src={foodWaste} alt="Food Waste" />}
        itemTwo={<ReactCompareSliderImage src={foodInContainer} alt="Food in container" />}
      />
    </div>
  );
}

export default ImageCompareSlider;
