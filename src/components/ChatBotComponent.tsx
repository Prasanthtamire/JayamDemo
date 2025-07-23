import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import '../css/chatbot.css';

const predefinedReplies = {
  "hi": "Hello! How can I assist you today?",
  "what is leave policy": "Our leave policy includes 18 paid leaves per year, including casual and sick leaves.",
  "how to apply for leave": "Go to the Leave page → Click on 'Apply Leave' → Fill the form and submit.",
  "what is payroll date": "Payroll is processed on the last working day of each month.",
  "default": "Sorry, I didn't understand that. Please try asking something else."
};

const ChatBotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I’m your HR Assistant. Ask me anything!", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    const reply = predefinedReplies[input.toLowerCase()] || predefinedReplies["default"];
    setTimeout(() => {
      setMessages(prev => [...prev, { text: reply, sender: "bot" }]);
    }, 600);

    setInput('');
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
    setTimeout(handleSend, 100);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            HR ChatBot
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>
          <div className="chatbot-messages" ref={chatRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-msg ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-quick">
            <button onClick={() => handleQuickQuestion("What is leave policy")}>Leave Policy</button>
            <button onClick={() => handleQuickQuestion("How to apply for leave")}>Apply Leave</button>
            <button onClick={() => handleQuickQuestion("What is payroll date")}>Payroll</button>
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}><Send size={18} /></button>
          </div>
        </div>
      )}
    <button
  className="chatbot-toggle"
  onClick={() => setIsOpen(!isOpen)}
  title="Chat with HR Bot"
>
  💬
</button>

    </div>
  );
};

export default ChatBotComponent;
