import React            from 'react';
import foodInContainer  from '../images/food-with-awesome-container.png';
import foodWaste        from '../images/food-waste.png';

/**
 * The **ImageCompareSlider** component represents a custom slider to compare two images.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function ImageCompareSlider() {
  const [imageRevealFraction, setImageRevealFraction] = React.useState(0.75);
  const imageContainer = React.useRef();

  React.useEffect(() => {
    const imageSliderElement = document.querySelector('#imageSlider');
    imageSliderElement.addEventListener('mousedown', handleMouseDown);
    return () => {
      imageSliderElement.removeEventListener('mousedown', handleMouseDown);
      imageSliderElement.removeEventListener('mousemove', handleMouseMove);
    };
  });

  const slide = (xPosition) => {
    const containerBoundingRect = imageContainer.current.getBoundingClientRect();
    setImageRevealFraction(() => {
      if(xPosition < containerBoundingRect.left){
        return 0;
      } else if(xPosition > containerBoundingRect.right){
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  }

  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  }

  const handleMouseMove = (e) => {
    slide(e.clientX);
  }

  const handleMouseDown = () => {
    document.querySelector('#imageSlider').addEventListener('mousemove', handleMouseMove);
  }

  return (
    <div ref={imageContainer} id="imageSlider" className="border border-primary max-w-[626px] w-full rounded-[20px] relative select-none overflow-clip">
      {/* First Image */}
      <img
        src={foodInContainer}
        alt="food in awesome container company's containers"
        className="max-w-[626px] h-[418px] object-cover w-full rounded-[20px] pointer-events-none" />
      {/* Second Image */}
      <img
        src={foodWaste}
        alt="food waste"
        style={{
          clipPath: `polygon(0 0, ${imageRevealFraction * 100}% 0, ${imageRevealFraction * 100}% 100%, 0 100%)`,
        }}
        className="max-w-[626px] h-[418px] object-cover w-full rounded-[20px] absolute inset-0 pointer-events-none" />
      <div style={{ left: `${imageRevealFraction * 100}%` }} className="absolute inset-y-0">
        <div className="relative h-full">
          <div className="absolute inset-y-0 bg-highlight-100 w-[3px] -ml-[1.5px]"></div>
          <div
            style={{ touchAction: "none"}}
            onMouseDown={handleMouseDown}
            onTouchMove={handleTouchMove}
            className="h-[28px] w-[28px] -ml-[14px] -mt-[14px] rounded-full bg-highlight-100 absolute top-1/2
            bg-[url('./images/slider-handler.svg')] bg-no-repeat bg-center bg-contain">
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageCompareSlider;
