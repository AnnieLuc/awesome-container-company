import React              from 'react';
import ImageCompareSlider from './ImageCompareSlider';
import ChatBubble         from './ChatBubble';
import chatMessages       from '../constants/chat-messages';

/**
 * The **HeroSection** component represents the main section of the page where the motto of the company is displayed.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function HeroSection() {
  const renderChat = () => {
    return (
      <div className="px-[50px] flex flex-col gap-[16px]">
        {chatMessages.map((chat, index) => {
          if (index === 0) {
            return (
              <div key={index}>
                <div className="w-[38px] h-[38px] bg-[url('./images/chat-guest.svg')]
                bg-no-repeat bg-center bg-contain relative -left-[40px] top-[10px]"></div>
                <ChatBubble {...chat} />
              </div>
            );
          }
          return (
            <ChatBubble key={index} {...chat} />
          )
        })}
        <div className="w-[38px] h-[38px] bg-[url('./images/chat-admin.svg')]
        bg-no-repeat bg-center bg-contain self-end relative -right-[40px] bottom-[20px]"></div>
      </div>
    );
  }

  return (
    <header id="hero">
      <div className="mx-auto px-[40px] pt-[144px] pb-[40px] max-w-[1440px] flex flex-col">
        <div className="max-w-[859px] text-[44px]">
          <h1 className="sec-heading sec-text-left sec-text-primary">
            Help our environment by eliminating single-use plastics from your delivery with <span className="text-highlight-100">Awesome Container Company</span>
          </h1>
        </div>
        <div className="mt-[85px] w-full flex justify-between">
          <div className="max-w-[626px] w-full rounded-[20px] object-cover">
            <ImageCompareSlider />
            <div className="mt-[13px] w-full flex justify-between text-sm font-normal leading-4">
                <p>Now</p>
                <p>With Awesome Containers</p>
            </div>
          </div>
          <div className="max-w-[491px] w-full">
            {renderChat()}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
