import React from "react";
import { Link } from "react-router-dom";
import PhoneIcon from "../svgs/PhoneIcon";
import VideoIcon from "../svgs/VideoIcon";
import whatss from '../../assets/whatss.jpeg'
import GoingCall from "../svgs/GoingCall";
import ComingCall from "../svgs/ComingCall";
import MissedCall from "../svgs/MissedCall";


const callHistory = [
  { name: "محمد مصطفى", type: "واردة", status: "incoming", image: whatss },
  { name: "علي سالم", type: "واردة", status: "incoming", image: whatss },
  { name: "اجروب الصحاب", type: "صادرة", status: "outgoing", image: whatss },
  { name: "مريم محمود", type: "فائتة", status: "missed", image: whatss },
  { name: "مكة محمد", type: "صادرة", status: "outgoing", image: whatss },
  { name: "ملك إبراهيم", type: "واردة", status: "incoming", image: whatss },
  { name: "علي سالم", type: "فائتة", status: "missed", image: whatss },
  { name: "مكة محمد", type: "صادرة", status: "outgoing", image: whatss },
  { name: "أحمد خالد", type: "واردة", status: "incoming", image: whatss },
  { name: "مكة محمد", type: "واردة", status: "incoming", image: whatss },
  { name: "علي سالم", type: "واردة", status: "incoming", image: whatss },
  { name: "مكة محمد", type: "واردة", status: "incoming", image: whatss },
  { name: "علي سالم", type: "فائتة", status: "missed", image: whatss },
  { name: "مكة محمد", type: "صادرة", status: "outgoing", image: whatss },
  { name: "اجروب الصحاب", type: "صادرة", status: "outgoing", image: whatss },
  { name: "مريم محمود", type: "فائتة", status: "missed", image: whatss },
];

export default function StatusBar() {
  return (
    <div className="w-[400px] max-h-screen scrollbar mx-auto bg-white shadow-lg rounded-lg overflow-scroll">
      <div className="p-4 flex items-center sticky top-0 bg-white">
        <input
          type="text"
          placeholder="البحث"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none text-right"
        />
      </div>
      <ul>
        {callHistory.map((call, index) => (
          <li key={index} className="flex items-center justify-between p-2.5 border-b-[.5px] border-gray-300">
            <div className="flex items-center gap-3 cursor-pointer">
            <img src={call.image} alt="no image" width="45px" className="rounded-full"/>
              <div className="text-right">
                <p className="text-[14px]">{call.name}</p>
                <p
                  className={`text-[10px] pt-1 ${
                    call.status === "incoming"
                      ? "text-green-500"
                      : call.status === "outgoing"
                      ? "text-gray-500"
                      : "text-red-600"
                  }`}
                >
                  {   call.status === "incoming"
                      ? <GoingCall />
                      : call.status === "outgoing"
                      ? <ComingCall />
                      : <MissedCall />}
                </p>
              </div>
            </div>
            <div className="flex gap-4 pl-2">
              <Link to="/calls" className="text-gray-500 hover:text-gray-700">
                <PhoneIcon />
              </Link>
              <Link to='/calls' className="text-gray-500 hover:text-gray-700">
                <VideoIcon color={'gray'} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
