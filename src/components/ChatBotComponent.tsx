import  { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import gsap from 'gsap';
import '../css/chatbot.css';

const ChatBotComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I’m your HR Assistant. Ask me anything!", sender: "bot" }
  ]);
  const [input, setInput] = useState('');
  const chatRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        boxRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }

    // Animate new message (last one only)
    const lastMessage = document.querySelector('.chatbot-messages .chat-msg:last-child');
    if (lastMessage) {
      gsap.fromTo(lastMessage, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3 });
    }
  }, [messages]);

  const getBotReply = (text) => {
    const message = text.toLowerCase();

    if (message.includes("hi") || message.includes("hello")) {
      return "Hey there! How can I help you today?";
    } else if (message.includes("leave") && message.includes("policy")) {
      return "You are entitled to 18 paid leaves per year. This includes casual and sick leave.";
    } else if (message.includes("apply") && message.includes("leave")) {
      return "To apply for leave, go to Leave → Apply → Fill form → Submit.";
    } else if (message.includes("payroll") || message.includes("salary")) {
      return "Payroll is processed on the last working day of every month.";
    } else if (message.includes("thank")) {
      return "You're welcome! 😊";
    } else if (message.includes("hr")) {
      return "You can contact HR at hr@example.com.";
    } else {
      const fallbackReplies = [
        "I'm not sure I understood. Try asking about leave or payroll.",
        "Hmm... I didn't catch that. Want to know about HR policies?",
        "Sorry, could you rephrase that?",
        "Try questions like: leave policy, apply leave, payroll date."
      ];
      return fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
    }
  };

  const typeText = (text, callback) => {
    let i = 0;
    const typingSpeed = 30;
    const typedText = [];

    const interval = setInterval(() => {
      typedText.push(text.charAt(i));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        callback(text);
      }
    }, typingSpeed);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    const replyText = getBotReply(input);
    typeText(replyText, (typedText) => {
      setMessages(prev => [...prev, { text: typedText, sender: "bot" }]);
    });

    setInput('');
  };

  const handleQuickQuestion = (question) => {
    setInput(question);
    setTimeout(handleSend, 100);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-box" ref={boxRef}>
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
