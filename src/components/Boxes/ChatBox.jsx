import { useState } from "react";
import whatss from '../../assets/whatss.jpeg'
import Camera from "../svgs/Camera";
import RingingPhone from "../svgs/RingingPhone";
import { Link } from "react-router-dom";
import SendIcon from "../svgs/SendIcon";
import PaperClip from "../svgs/PaperClip";
import MicOff from "../svgs/MicOff";
import Reaction from "../svgs/Reaction";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, how are you?", sender: "other", time: "10:00 AM"},
    { id: 2, text: "I'm good! What about you?", sender: "me", time: "10:00 AM" },
    { id: 3, text: "Doing well, just working on some projects. another day another dolor", sender: "other", time: "10:00 AM" },
    { id: 4, text: "Nice! What are you working on?", sender: "me", time: "10:00 AM" },
    { id: 5, text: "A chat app with React and Tailwind.", sender: "other", time: "10:00 AM"},
    { id: 6, text: "Sounds cool! Need any help?", sender: "me", time: "10:00 AM" },
    { id: 7, text: "Maybe later! Just setting up the UI for now.", sender: "other", time: "10:00 AM" },
    { id: 8, text: "Awesome! Keep me posted.", sender: "me", time: "10:00 AM" },
    { id: 9, text: "Sure thing!", sender: "other", time: "10:00 AM"},
    { id: 10, text: "By the way, have you tried Next.js?", sender: "me", time: "10:00 AM" },
    { id: 11, text: "Yeah, it's amazing for server-side rendering!", sender: "other", time: "10:00 AM" },
    { id: 12, text: "Absolutely! Makes things much faster.", sender: "me", time: "10:00 AM" },
    { id: 13, text: "Yeah, it's amazing for server-side rendering!", sender: "other", time: "10:00 AM" },
    { id: 14, text: "Absolutely! Makes things much faster.", sender: "me", time: "10:00 AM" },
    { id: 15, text: "Yeah, it's amazing for server-side rendering!", sender: "other", time: "10:00 AM" },
    { id: 16, text: "Absolutely! Makes things much faster.", sender: "me", time: "10:00 AM" },
    { id: 17, text: "Yeah, it's amazing for server-side rendering!", sender: "other", time: "10:00 AM" },
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
          <Link to='/calls' className="text-xl cursor-pointer"><Camera /></Link>
          <Link to='/calls' className="text-xl cursor-pointer mr-2"><RingingPhone /></Link>
          <h1 className="font-bold text-lg mr-4">WHATSS</h1>
          <img src={whatss} alt="no image" className="w-12 h-12 rounded-full mr-[-6px]" />
        </div>
      </div>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-scroll p-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex relative ${msg.sender==="me"?"justify-end":"justify-start"}`}>
              {
                msg.sender==="me"?<span className={`relative top-12 right-14 text-xs`}>
                {msg.time}
              </span>:""
              }
            <div
              className={`px-4 py-2 rounded-b-lg shadow-lg  ${
                msg.sender === "me" ? "bg-[#464448] text-white rounded-tr-lg" : "bg-[#ffffff] rounded-tl-lg text-gray-700"
              }`}
            >
              {msg.text}
            </div>
              {
                msg.sender!=="me"?<span className={`relative top-12 left-14 text-xs`}>
                {msg.time}
              </span>:""
              }
          </div>
        ))}
      </div>

      {/* Input field */}
      <div className="p-2 bg-[#464448] flex justify-between items-center border-t-[0.5px] border-[#ffffff]">
        <button className="p-2 relative z-50 right-6 text-[#464448] cursor-pointer rounded-md">
          <Reaction />
        </button>
        <input
          type="text"
          className="flex-1 p-2 pr-14 max-w-[85%] relative right-[-30px] border-gray-100 bg-gray-100 border rounded-lg focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button className=" left-20 relative text-[#464448] cursor-pointer" onClick={sendMessage}>
          <SendIcon />
        </button>
        <button className="relative left-11 text-white cursor-pointer">
          <PaperClip />
        </button>
        <button className="w-7 relative left-5 text-white cursor-pointer">
          <MicOff />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
