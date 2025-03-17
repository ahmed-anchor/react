import React from "react";
import Profile from "../svgs/Profile";
import Delivered from "../svgs/Delivered";

const callHistory = [
  { name: "محمد مصطفى", type: "واردة", status: "incoming", image: <Profile /> },
  { name: "علي سالم", type: "واردة", status: "incoming", image: <Profile /> },
  { name: "اجروب الصحاب", type: "صادرة", status: "outgoing", image: <Profile /> },
  { name: "مريم محمود", type: "فائتة", status: "missed", image: <Profile /> },
  { name: "مكة محمد", type: "صادرة", status: "outgoing", image: <Profile /> },
  { name: "ملك إبراهيم", type: "واردة", status: "incoming", image: <Profile /> },
  { name: "علي سالم", type: "فائتة", status: "missed", image: <Profile /> },
  { name: "مكة محمد", type: "صادرة", status: "outgoing", image: <Profile /> },
  { name: "أحمد خالد", type: "واردة", status: "incoming", image: <Profile /> },
  { name: "مكة محمد", type: "واردة", status: "incoming", image: <Profile /> },
  { name: "علي سالم", type: "واردة", status: "incoming", image: <Profile /> },
  { name: "مكة محمد", type: "واردة", status: "incoming", image: <Profile /> },
  { name: "علي سالم", type: "فائتة", status: "missed", image: <Profile /> },
  { name: "مكة محمد", type: "صادرة", status: "outgoing", image: <Profile /> },
  { name: "اجروب الصحاب", type: "صادرة", status: "outgoing", image: <Profile /> },
  { name: "مريم محمود", type: "فائتة", status: "missed", image: <Profile /> },
];

export default function StatusBar() {
  return (
    <div className="w-[400px] max-h-screen scrollbar mx-auto bg-white shadow-lg rounded-lg overflow-scroll">
      <div className="p-4 flex items-center">
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
              {call.image}
              <div className="text-right">
                <p className="text-[14px]">{call.name}</p>
                <p
                  className={`text-[10px] pt-1 ${
                    call.status === "incoming"
                      ? "text-green-500"
                      : call.status === "outgoing"
                      ? "text-purple-500"
                      : "text-red-500"
                  }`}
                >
                  {call.type}
                </p>
              </div>
            </div>
            <div className="gap-4 pl-2">
              <Delivered />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
