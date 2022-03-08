import React from "react";

function Chat() {
  return (
    <div className="px-[50px] pt-[23px] pb-[32px] flex flex-col gap-[16px]">
      <div class="chat-message">
        <div class="flex items-end">
          <div class="flex flex-col space-y-2 text-sm leading-4 font-normal max-w-xs mx-2 order-2 items-start">
            <div><span class="px-[12px] py-[10px] rounded-[10px] inline-block rounded-tl-none bg-secondary-200 text-primary">What do you do?</span></div>
          </div>
        </div>
      </div>
      <div class="chat-message">
        <div class="flex items-end justify-end">
          <div class="flex flex-col space-y-2 text-sm leading-4 font-normal max-w-xs mx-2 order-1 items-end">
            <div><span class="px-[12px] py-[10px] rounded-[10px] inline-block rounded-br-none bg-primary text-secondary-100">We provide reusable containers for restaurants, 
        pick them up from users, clean them and give them 
        back to your restaurant</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;