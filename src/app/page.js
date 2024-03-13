'use client'
import React, { useState, useEffect } from "react";
import { FaClock, FaCheckCircle } from 'react-icons/fa';
import Bot from './bot';

const ChatBubble = ({ text, isUser }) => (
  <div className={`flex gap-5 justify-between self-end pr-2.5 mt-44 text-sm text-white whitespace-nowrap max-md:mt-10 ${isUser ? 'flex-row-reverse' : ''}`}>
    <div className={`grow justify-center px-3 py-4 bg-blue-600 rounded-xl ${isUser ? 'order-last' : ''}`}>{text}</div>
    <img loading="lazy" src={isUser ? "https://cdn.builder.io/api/v1/image/assets/TEMP/f490efa1a5867354b0a2eb50ea6c0280641e2d91dddbc4fc58d0f651c655f436?apiKey=d1ee9f6275604677bd2583ecebeab853&" : "https://cdn.builder.io/api/v1/image/assets/TEMP/58fdddec8db0b3edab85ad75761b1771431ad747ef69ea8d82c65ddb205e5c5e?apiKey=d1ee9f6275604677bd2583ecebeab853&"} className={`shrink-0 self-start ${isUser ? 'w-10 aspect-square' : 'aspect-[1.41] w-[34px]'}`} alt={isUser ? 'User avatar' : 'Bot avatar'} />
  </div>
);

const CalendarEvent = ({ slot_start, slot_end, isSlotBooked, slot_id, handleBookSlot }) => (
  <div className={`flex gap-5 justify-between py-3.5 pr-3 pl-6 mt-3 w-full bg-black max-md:pl-5`}>
    <div className="flex flex-auto gap-4 py-px pr-9">
      <div className="flex justify-center items-center px-3 rounded-lg bg-stone-100 h-[49px] w-[49px]">
        {isSlotBooked ? <FaCheckCircle className="w-6 h-6 text-green-500" /> : <FaClock className="w-6 h-6 text-blue-500" />}
      </div>
      <div className="grow justify-center self-start pb-5 text-base font-medium leading-6 text-white whitespace-nowrap">{`${new Date(slot_start).toLocaleTimeString()} - ${new Date(slot_end).toLocaleTimeString()}`}</div>
    </div>
    {isSlotBooked ? (
      <div className="flex items-center">
        <FaCheckCircle className="w-6 h-6 text-green-500" />
      </div>
    ) : (
      <button className="flex items-center" onClick={() => handleBookSlot(slot_id)}>
        Book Slot
      </button>
    )}
  </div>
);

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetchData();
  }, []); // Empty dependency array to fetch data only once on component mount

  const fetchData = () => {
    fetch('https://us-central1-proven-gasket-416318.cloudfunctions.net/doctors/doctors/1/slot')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Update state with fetched data
        setAppointments(data);
      })
      .catch((error) => {
        console.error("Error fetching appointments:", error);
      });
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    // You can add logic here to send user input to the chatbot (Dialogflow)
    console.log("User input:", userInput);
    // Clearing input field after sending message
    setUserInput("");
  };

  const handleDeleteAppointments = () => {
    // Show confirmation dialog
    const confirmation = window.confirm("Are you sure you want to delete all appointments?");
    if (confirmation) {
      // Perform reset
      fetch('https://us-central1-proven-gasket-416318.cloudfunctions.net/doctors/appointments/reset', {
        method: 'POST',
        headers: {
          'Content-Length': '0'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to reset appointments');
        }
        // Handle successful reset, if needed
        setAppointments([]); // Clear appointments state after reset
      })
      .catch(error => {
        console.error('Error resetting appointments:', error);
        // Handle reset error, if needed
      })
      .finally(() => {
        fetchData(); // Fetch fresh data after resetting appointments
      });
    }
  };

  const handleBookSlot = (slotId) => {
    // Show confirmation dialog
    const confirmation = window.confirm("Are you sure you want to book this slot?");
    if (confirmation) {
      // Perform booking
      fetch(`https://us-central1-proven-gasket-416318.cloudfunctions.net/doctors/doctors/1/slot/book/${slotId}`, {
        method: 'POST',
        headers: {
          'Content-length': '0'
        }
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to book slot');
        }
        // Handle successful booking, if needed
      })
      .catch(error => {
        console.error('Error booking slot:', error);
        // Handle booking error, if needed
      })
      .finally(() => {
        fetchData(); // Fetch fresh data after booking slot
      });
    }
  };

  const handleRefresh = () => {
    fetchData(); // Fetch fresh data
    window.location.reload(); 
  };

  // Render CalendarEvent components dynamically based on fetched appointments
  const renderedAppointments = appointments.map((appointment, index) => (
    <CalendarEvent
      key={index}
      slot_start={appointment.slot_start}
      slot_end={appointment.slot_end}
      isSlotBooked={appointment.isSlotBooked}
      slot_id={appointment.slot_id}
      handleBookSlot={handleBookSlot}
    />
  ));

  return (
    <div className="flex justify-center items-center px-16 py-20 bg-black max-md:px-5">
      <div className="flex flex-col w-full max-w-[1277px] max-md:max-w-full">
        <header className="flex justify-between px-4 pt-4 pb-2 w-full text-lg font-bold tracking-tight text-white bg-black">
          <div className="flex justify-center r items-center gap-3">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6f9eea424086d281bca3644b9522f6b1dbdf65eed5ec5a0e26aa12cf1a2b6b8?apiKey=d1ee9f6275604677bd2583ecebeab853&" className="max-w-full aspect-[1.06] w-[219px]" alt="Company logo" />
            <div className="flex justify-center md:ml-40  items-center">Company Name , Schedule meetings</div>
          </div>
          <div className="flex items-center gap-5 justify-end">
            <Bot />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6484d55b6ba61b49a0f2f0d0d546b447e2b0c2ec5179b4fbdf291dd9b43c706b?apiKey=d1ee9f6275604677bd2583ecebeab853&" className="shrink-0 w-6 aspect-square" alt="Calendar icon" />
          </div>
        </header>

        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex ml-96 flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-14 max-md:mt-10">
                {renderedAppointments} 
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 self-end md:mr-96 mt-10 text-base font-bold tracking-wide leading-6 text-black whitespace-nowrap ">
          <button className="flex flex-col flex-1 justify-center px-5 py-3.5 rounded-xl bg-stone-100" onClick={handleDeleteAppointments}>Delete all appointments</button>
          <button className="flex flex-col md:mr-32 justify-center self-start px-5 py-3 bg-green-500 rounded-xl basis-0" onClick={handleRefresh}>Refresh</button>
        </div>
      </div>
    </div>
  );
};

export default App;
