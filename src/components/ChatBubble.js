import React      from 'react';
import PropTypes  from 'prop-types';
import classnames from 'classnames';

/**
 * The **ChatBubble** component represents each chat bubble in the Chat component.
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function ChatBubble({ sender, color, message }) {
  const chatBubbleClass = (sender === 'guest')? `chat-bubble-left` : `chat-bubble-right`;
  const chatBubbleColorClass = `chat-bubble-${color}`

  const renderChatBubble = () => {
    if (sender === 'guest') {
      return (
        <article className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-sm leading-4 font-normal max-w-[279px] mx-2 order-2 items-start">
              <div>
                <span className={classnames(chatBubbleClass,chatBubbleColorClass)}>
                  {message}
                </span>
              </div>
            </div>
          </div>
        </article>
      );
    }
    if (sender === 'admin') {
      return (
        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-sm leading-4 font-normal max-w-[279px] mx-2 order-1 items-end">
              <div>
                <span className={classnames(chatBubbleClass,chatBubbleColorClass)}>
                  {message}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  return renderChatBubble();
}

ChatBubble.propTypes = {
  sender:     PropTypes.oneOf(['admin', 'guest']),
  color:      PropTypes.oneOf(['default', 'primary', 'highlight']),
  message:    PropTypes.string.isRequired,
};

export default ChatBubble;
