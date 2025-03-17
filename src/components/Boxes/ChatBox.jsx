import { useState } from "react";
import whatss from '../../assets/whatss.jpeg'
import Camera from "../svgs/Camera";
import RingingPhone from "../svgs/RingingPhone";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, how are you?", sender: "other" },
    { id: 2, text: "I'm good! What about you?", sender: "me" },
    { id: 3, text: "Doing well, just working on some projects. another day another dolor", sender: "other" },
    { id: 4, text: "Nice! What are you working on?", sender: "me" },
    { id: 5, text: "A chat app with React and Tailwind.", sender: "other" },
    { id: 6, text: "Sounds cool! Need any help?", sender: "me" },
    { id: 7, text: "Maybe later! Just setting up the UI for now.", sender: "other" },
    { id: 8, text: "Awesome! Keep me posted.", sender: "me" },
    { id: 9, text: "Sure thing!", sender: "other" },
    { id: 10, text: "By the way, have you tried Next.js?", sender: "me" },
    { id: 11, text: "Yeah, it's amazing for server-side rendering!", sender: "other" },
    { id: 12, text: "Absolutely! Makes things much faster.", sender: "me" },
    { id: 11, text: "Yeah, it's amazing for server-side rendering!", sender: "other" },
    { id: 12, text: "Absolutely! Makes things much faster.", sender: "me" },
    { id: 11, text: "Yeah, it's amazing for server-side rendering!", sender: "other" },
    { id: 12, text: "Absolutely! Makes things much faster.", sender: "me" },
    { id: 11, text: "Yeah, it's amazing for server-side rendering!", sender: "other" },
  ]);
  
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { id: messages.length + 1, text: input, sender: "me" }]);
    setInput("");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100 w-full">
      <div className="flex justify-between items-center p-4 bg-white text-black shadow-md">
        <h1 className="font-bold text-lg">المكالمات</h1>
        <div className="flex items-center gap-4">
          <button className="text-xl cursor-pointer"><Camera /></button>
          <button className="text-xl cursor-pointer mr-2"><RingingPhone /></button>
          <h1 className="font-bold text-lg mr-4">WHATSS</h1>
          <img src={whatss} alt="no image" className="w-12 h-12 rounded-full mr-[-6px]" />
        </div>
      </div>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-scroll p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`px-4 py-2 rounded-lg shadow-lg  ${
                msg.sender === "me" ? "bg-[#464448] text-white" : "bg-[#ffffff] text-gray-700"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="p-4 bg-white flex justify-between items-center border-t-[0.5px] border-[#ffffff]">
        <input
          type="text"
          className="flex-1 p-2 border-gray-300 border rounded-md focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className="ml-2 p-2 mr-5 bg-[#464448] text-white rounded-md" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
