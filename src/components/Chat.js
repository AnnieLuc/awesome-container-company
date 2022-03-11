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
              <div className="chat-guest"></div>
              <ChatBubble {...chat} />
            </div>
          );
        }
        return (
          <ChatBubble key={index} {...chat} />
        )
      })}
      <div className="chat-admin"></div>
    </div>
  );
}

export default Chat;