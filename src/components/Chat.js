import React        from 'react';
import ChatBubble   from './ChatBubble';
import chatMessages from '../utils/chat-messages';

/**
 * The **Chat** component represents the chat box in the HeroSection.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Chat() {
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

export default Chat;