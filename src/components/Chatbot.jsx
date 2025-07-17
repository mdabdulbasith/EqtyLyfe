import React, { useState, useEffect } from 'react';
import { FaCommentDots, FaTimes } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botReply = {
        sender: 'bot',
        text: "Thanks for your message! We'll get back to you shortly.",
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 1500); // 1.5s delay
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[320px] h-[450px] flex flex-col rounded-xl shadow-xl overflow-hidden bg-[#F1F8E5] border-2 border-[#004B37]">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#004B37] text-[#F1F8E5]">
            <h2 className="text-lg font-semibold">EqtyLyfe Chat</h2>
            <button onClick={toggleChat} className="text-[#F1F8E5]">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto text-sm text-[#004B37]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-md border border-[#004B37] max-w-[85%] ${
                  msg.sender === 'bot' ? 'self-start' : 'self-end bg-white'
                }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="italic text-sm text-[#004B37]">EqtyLyfe is typing...</div>
            )}
          </div>

          {/* Input area */}
          <div className="px-3 py-2 border-t border-[#004B37] bg-[#F1F8E5]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="w-full px-3 py-2 rounded-md border border-[#004B37] bg-white text-[#004B37] focus:outline-none"
            />
          </div>
        </div>
      ) : (
        <button
          onClick={toggleChat}
          className="bg-[#004B37] text-[#F1F8E5] p-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          <FaCommentDots size={22} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
