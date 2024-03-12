'use client'
import React, { useEffect } from "react";

const DialogflowMessenger = () => {
  useEffect(() => {
    // Load the Dialogflow Messenger script dynamically
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Custom CSS to position the bot on the left side and always open
  const customCss = `
    df-messenger {
     
      --df-messenger-margin: 0;
      --df-messenger-right: 20px;
      --df-messenger-left: auto;
      --df-messenger-right-expanded: auto;
      --df-messenger-left-expanded: 20px;
      --df-messenger-top: 20px;
      --df-messenger-bottom: auto;
    }
  `;

  return (
    <>
      <style>{customCss}</style>
      <df-messenger
        intent="WELCOME"
        chat-title="DoctorBot"
        agent-id="b90ace8e-22fe-4608-b689-1d1825c69d10"
        language-code="en"
        expanded
      ></df-messenger>
    </>
  );
};

export default DialogflowMessenger;
