'use client'
import React, { useState } from "react";


const ChatBubble = ({ text, isUser }) => (
  <div className={`flex gap-5 justify-between self-end pr-2.5 mt-44 text-sm text-white whitespace-nowrap max-md:mt-10 ${isUser ? 'flex-row-reverse' : ''}`}>
    <div className={`grow justify-center px-3 py-4 bg-blue-600 rounded-xl ${isUser ? 'order-last' : ''}`}>{text}</div>
    <img loading="lazy" src={isUser ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f490efa1a5867354b0a2eb50ea6c0280641e2d91dddbc4fc58d0f651c655f436?apiKey=d1ee9f6275604677bd2583ecebeab853&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/58fdddec8db0b3edab85ad75761b1771431ad747ef69ea8d82c65ddb205e5c5e?apiKey=d1ee9f6275604677bd2583ecebeab853&"} className={`shrink-0 self-start ${isUser ? 'w-10 aspect-square' : 'aspect-[1.41] w-[34px]'}`} alt={isUser ? 'User avatar' : 'Bot avatar'} />
  </div>
);

const CalendarEvent = ({ icon, text, isActive }) => (
  <div className={`flex gap-5 justify-between py-3.5 pr-3 pl-6 mt-3 w-full bg-black max-md:pl-5 ${isActive ? 'z-10' : ''}`}>
    <div className="flex flex-auto gap-4 py-px pr-9">
      <div className="flex justify-center items-center px-3 rounded-lg bg-stone-100 h-[49px] w-[49px]">
        <img loading="lazy" src={icon} className={`${icon.includes('clock') ? 'aspect-[1.04] w-[25px]' : 'w-6 aspect-square'}`} alt={`${text} icon`} />
      </div>
      <div className="grow justify-center self-start pb-5 text-base font-medium leading-6 text-white whitespace-nowrap">{text}</div>
    </div>
    <img loading="lazy" src={isActive ? "https://cdn.builder.io/api/v1/image/assets/TEMP/0887915c04d96a122fcbe28c3ee8c0bdd5bb035b48bde007a8a17e863b8e91b6?apiKey=d1ee9f6275604677bd2583ecebeab853&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/7a4fa50b6a17d3d5eff9f1e678cf9e936143d2b8c5dc20459e85305811647567?apiKey=d1ee9f6275604677bd2583ecebeab853&"} className={`shrink-0 my-auto ${isActive ? 'border-red-600 border-solid aspect-[3.7] border-[6px] stroke-[6px] stroke-red-600 w-[22px]' : 'w-6 aspect-[0.96]'}`} alt={isActive ? 'Active event indicator' : 'Inactive event indicator'} />
  </div>
);

const App = () => {
  const [userInput, setUserInput] = useState("");

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    // You can add logic here to send user input to the chatbot (Dialogflow)
    console.log("User input:", userInput);
    // Clearing input field after sending message
    setUserInput("");
  };


  return (
    <div className="flex justify-center items-center px-16 py-20 bg-black max-md:px-5">
      <div className="flex flex-col w-full max-w-[1277px] max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6f9eea424086d281bca3644b9522f6b1dbdf65eed5ec5a0e26aa12cf1a2b6b8?apiKey=d1ee9f6275604677bd2583ecebeab853&" className="max-w-full aspect-[1.06] w-[219px]" alt="Company logo" />
                <div className="flex z-10 flex-col self-end py-12 mt-0 max-w-full rounded-lg bg-neutral-500 bg-opacity-10 w-[554px]">
                  <div className="self-center text-3xl font-bold tracking-tight leading-6 text-white">"Company name"</div>
                  <div className="flex flex-col px-6 mt-28 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-center font-semibold text-center max-md:flex-wrap">
                      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b040db5a33008fc4a0ac551ecd214a4ad55f60f8761040ec2d18d9590201933?apiKey=d1ee9f6275604677bd2583ecebeab853&" className="shrink-0 self-stretch my-auto aspect-[0.95] w-[43px]" alt="Bot icon" />
                      <div className="justify-center self-stretch p-2.5 my-auto text-sm whitespace-nowrap bg-violet-200 rounded-xl text-zinc-800">Hi, there!</div>
                      <ChatBubble text="Hello chat bot" isUser />
                    </div>
                    {/* <div className="flex flex-col justify-center items-end px-16 py-3 mt-32 bg-violet-200 rounded-xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    <div className="flex  self-end mt-4  font-bold  text-black max-md:mr-2.5">
                    <div className="flex gap-3 self-end mt-4 text-base font-bold tracking-wide leading-6 text-black whitespace-nowrap max-md:mr-2.5"> */}
 <div> <div> <div>
  <div className="flex mt-20 flex-1">
    <input
      type="text"
      className="flex text-black flex-1 justify-center px-5 py-3.5 rounded-xl bg-stone-100"
      placeholder="Type your message..."
      value={userInput}
      onChange={handleInputChange}
    />
    <button
      className="flex justify-center items-center px-5 py-3 bg-green-500 rounded-xl"
      onClick={handleSendMessage}
    >
      Send
    </button>
  </div>
</div>
        </div>
      </div>
      <df-messenger
        intent="WELCOME"
        chat-title="DoctorBot"
        agent-id="b90ace8e-22fe-4608-b689-1d1825c69d10"
        language-code="en"
      ></df-messenger>
    
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-14 max-md:mt-10">
                <header className="flex flex-col px-4 pt-4 pb-2 w-full text-lg font-bold tracking-tight text-white bg-black">
                  <div className="flex gap-5 justify-between py-3.5 pr-7 pl-20 max-md:px-5">
                    <div className="flex-auto">Book a meeting</div>
                    <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6484d55b6ba61b49a0f2f0d0d546b447e2b0c2ec5179b4fbdf291dd9b43c706b?apiKey=d1ee9f6275604677bd2583ecebeab853&" className="shrink-0 w-6 aspect-square" alt="Calendar icon" />
                  </div>
                </header>
                <CalendarEvent icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7d75b4cae0a427f2e84342be3810c66a175d55b151aee3b3710fca447e7a96ee?apiKey=d1ee9f6275604677bd2583ecebeab853&" text="Tuesday, December 14" />
                <CalendarEvent icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d7a7cd3ca7397593a1b7c17aa0e91113b93d6c4525c701478a2798bbd103fc26?apiKey=d1ee9f6275604677bd2583ecebeab853&" text="Tuesday, December 14" />
                <CalendarEvent icon="https://cdn.builder.io/api/v1/image/assets/TEMP/0c55f78643c709f5c98ba3eb298ed81d8229604c8e73a0a42a5a1f00e0f4e71a?apiKey=d1ee9f6275604677bd2583ecebeab853&" text="Wednesday, December 15" />
                <CalendarEvent icon="https://cdn.builder.io/api/v1/image/assets/TEMP/71507ab0e32dadbe266d696374205a7fb07705ac6787269185a4f5a522c946a8?apiKey=d1ee9f6275604677bd2583ecebeab853&" text="Thursday, December 16" />
                <CalendarEvent icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b4269bfcb8e25dc0054294269bdf9c9cdcd94a7a768af96af43640b62a7f9904?apiKey=d1ee9f6275604677bd2583ecebeab853&" text="Friday, December 17" />
                <CalendarEvent icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e42e3e9f2a067149c5b83b4ea282482046ae2bad5b305ae0f1e288728b5dbafe?apiKey=d1ee9f6275604677bd2583ecebeab853&" text="Friday, December 17" isActive />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-3 self-end mt-4 text-base font-bold tracking-wide leading-6 text-black whitespace-nowrap max-md:mr-2.5">
          <button className="flex flex-col flex-1 justify-center px-5 py-3.5 rounded-xl bg-stone-100">Delete all appointments</button>
          <button className="flex flex-col justify-center self-start px-5 py-3 bg-green-500 rounded-xl basis-0">Refresh</button>
        </div>
      </div>
      
    </div>
  );
};

export default App;