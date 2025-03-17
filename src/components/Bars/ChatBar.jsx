import React from "react";
import Delivered from "../svgs/Delivered";
import UnDelivered from "../svgs/UnDelivered";
import whatss from '../../assets/whatss.jpeg'

const callHistory = [
  {state: 'undelivered', messages: 0,name: "محمد مصطفى", type: "مهتم", status: "incoming", image: whatss },
  {state: 'delivered', messages: 0,name: "علي سالم", type: "غير مهتم", status: "incoming", image: whatss },
  {state: 'undelivered', messages: 3,name: "اجروب الصحاب", type: "صادرة", status: "outgoing", image: whatss },
  {state: 'delivered', messages: 0,name: "مريم محمود", type: "مهتم", status: "missed", image: whatss },
  {state: 'undelivered', messages: 0,name: "مكة محمد", type: "صادرة", status: "outgoing", image: whatss },
  {state: 'delivered', messages: 0,name: "ملك إبراهيم", type: "واردة", status: "incoming", image: whatss },
  {state: 'delivered', messages: 3,name: "علي سالم", type: "مهتم", status: "missed", image: whatss },
  {state: 'undelivered', messages: 0,name: "مكة محمد", type: "مهتم", status: "outgoing", image: whatss },
  {state: 'undelivered', messages: 0,name: "أحمد خالد", type: "واردة", status: "incoming", image: whatss },
  {state: 'undelivered', messages: 0,name: "مكة محمد", type: "مهتم", status: "incoming", image: whatss },
  {state: 'delivered', messages: 0,name: "علي سالم", type: "واردة", status: "incoming", image: whatss },
  {state: 'delivered', messages: 0,name: "مكة محمد", type: "مهتم", status: "incoming", image: whatss },
  {state: 'undelivered', messages: 0,name: "علي سالم", type: "فائتة", status: "missed", image: whatss },
  {state: 'delivered', messages: 3,name: "مكة محمد", type: "غير مهتم", status: "outgoing", image: whatss },
  {state: 'undelivered', messages: 0,name: "اجروب الصحاب", type: "صادرة", status: "outgoing", image: whatss },
  {state: 'delivered', messages: 3,name: "مريم محمود", type: "مهتم", status: "missed", image: whatss },
];

export default function ChatBar() {
  return (
    <div className="w-[400px] max-h-screen scrollbar mx-auto bg-white shadow-lg rounded-lg overflow-scroll">
      <div className="p-4 flex items-center sticky top-0 bg-white ">
        <input
          type="text"
          placeholder="البحث"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-right"
        />
      </div>
      <ul>
        {callHistory.map((chat, index) => (
          <li key={index} className="flex items-center justify-between p-2.5 border-b-[.5px] border-gray-300">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src={chat.image} alt="no image" width="45px" className="rounded-full"/>
              <div className="text-right">
                <p className="text-[14px]">{chat.name}</p>
                <p
                  className={`text-[10px] pt-1`}
                >
                  {chat.type}
                </p>
              </div>
            </div>
            <div className="gap-4 pl-2">
              {chat.messages?<h1 className="rounded-full bg-[#f56d61] px-1.5 text-white text-sm">{chat.messages}</h1>:
              chat.state=='delivered'?<Delivered />:<UnDelivered/>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
