import React, { useState, useEffect } from 'react';
import { FaCommentDots, FaTimes, FaPaperPlane, FaExpand, FaCompress } from 'react-icons/fa';
import logo from '../assets/logo.png'; // Update with correct logo path

// Always use deployed backend URL
const API_URL = 'https://eqtylyfe-be.onrender.com/api/chat';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hi there! How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMaximized && isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMaximized, isOpen]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    if (!isOpen) setIsMaximized(false);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await res.json();
      const botReply = { sender: 'bot', text: data.reply || "Sorry, I couldn't get a response." };

      setMessages((prev) => [...prev, botReply]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error connecting to chatbot. Please try again later.' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div
          className={`flex flex-col shadow-xl overflow-hidden bg-[#F1F8E5] border-2 border-[#004B37]
            transition-all duration-300 ease-in-out transform-gpu origin-bottom-right
            ${isMaximized
              ? 'fixed inset-0 scale-100 rounded-none'
              : 'fixed bottom-6 right-6 w-[320px] h-[450px] scale-90 rounded-xl'
            }`}
        >
          <div className="flex items-center justify-between px-4 py-3 bg-[#004B37] text-[#F1F8E5]">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-auto object-contain" />
              <h2 className="text-lg font-semibold">EqtyLyfe Chat</h2>
            </div>
            <div className="flex items-center space-x-3">
              <button onClick={() => setIsMaximized(!isMaximized)} className="text-[#F1F8E5]">
                {isMaximized ? <FaCompress size={18} /> : <FaExpand size={18} />}
              </button>
              <button onClick={toggleChat} className="text-[#F1F8E5]">
                <FaTimes size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto text-sm text-[#004B37]">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`p-2 rounded-md border border-[#004B37] max-w-[75%] ${
                    msg.sender === 'bot' ? 'bg-[#E8F5E9]' : 'bg-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="italic text-sm text-[#004B37]">EqtyLyfe is typing...</div>
            )}
          </div>

          <div className="flex items-center px-3 py-2 border-t border-[#004B37] bg-[#F1F8E5] space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 rounded-md border border-[#004B37] bg-white text-[#004B37] focus:outline-none"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-[#004B37] text-white rounded-md hover:bg-[#00664f] transition"
            >
              <FaPaperPlane />
            </button>
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
