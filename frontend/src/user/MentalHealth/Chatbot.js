import React, { useState } from 'react';
import './Chatbot.css';
import img from './mhcicon.png'

const Chatbot = () => {
  const [inputText, setInputText] = useState('');
  const formatDate = (date) => {
    const h = `0${date.getHours()}`;
    const m = `0${date.getMinutes()}`;
    return `${h.slice(-2)}:${m.slice(-2)}`;
  };
  const [messages, setMessages] = useState([
    {
      name: 'MentalHealthBot',
      img: img,
      side: 'left',
      text: 'Welcome to MentlHealthBot, a safe and supportive space where you can share your thoughts and feelings without fear of judgment.',
      time: formatDate(new Date()),
    },
  ]);

  const appendMessage = (name, img, side, text) => {
    const updatedMessages = [...messages, {
      name,
      img,
      side,
      text,
      time: formatDate(new Date()),
    }];
    setMessages(updatedMessages);
  };

  const botResponse = async (rawText) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ msg: rawText }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      const msgText = data.response;
      setMessages((prevMessages) => [
        ...prevMessages,
        { name: 'Chat Bot', img: img, side: 'left', text: msgText, time: formatDate(new Date()) },
      ]);
    } catch (error) {
      console.error('Error fetching bot response:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };
  
  
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputText) return;

    appendMessage('You', './person.png', 'right', inputText);
    setInputText('');
    await botResponse(inputText);
  };

  return (
    <div className="msger">
      <main className="msger-chat">
        {messages.map((msg, index) => (
          <div key={index} className={`msg ${msg.side}-msg`}>
            <div className="msg-img" style={{ backgroundImage: `url(${msg.img})` }}>
              {/* <img src={msg.img} /> */}
            </div>
            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">{msg.name}</div>
                <div className="msg-info-time">{msg.time}</div>
              </div>
              <div className="msg-text">{msg.text}</div>
            </div>
          </div>
        ))}
      </main>
      <form className="msger-inputarea" onSubmit={handleSubmit}>
        <input
          type="text"
          className="msger-input"
          id="textInput"
          placeholder="Enter your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit" className="msger-send-btn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
