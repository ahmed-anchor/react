import React from "react";
import ClosePhone from "../svgs/ClosePhone";
import VideoIcon from "../svgs/VideoIcon";
import VerticalDots from "../svgs/VerticalDots";
import Mic from "../svgs/Mic";
import Addfreind from "../svgs/Addfreind";
import Camera from "../svgs/Camera";
import RingingPhone from "../svgs/RingingPhone";
import whatss from '../../assets/whatss.jpeg'


export default function PhoneCallBox() {
  
  return (
    <div className="w-full h-screen flex flex-col bg-[#464448] text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white text-black shadow-md">
        <h1 className="font-bold text-lg">المكالمات</h1>
        <div className="flex items-center gap-4">
          <button className="text-xl cursor-pointer"><Camera /></button>
          <button className="text-xl cursor-pointer mr-2"><RingingPhone /></button>
          <h1 className="font-bold text-lg mr-4">WHATSS</h1>
          <img src={whatss} alt="no image" className="w-12 h-12 rounded-full mr-[-6px]" />
        </div>
      </div>

      {/* Main Call Area */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <img
          src={whatss}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-[#6B696D]"
        />
        <h2 className="mt-3 text-lg font-semibold">محمد مصطفى</h2>
        <p className="text-gray-400 mt-2">يرن........</p>
      </div>

      {/* Call Controls */}
      <div className="bg-[#6B696D] p-4 flex justify-center gap-6">
        <button className="bg-[#464448] p-3 rounded-full cursor-pointer"><Addfreind /></button>
        <button className="bg-[#464448] px-4 w-13 rounded-full cursor-pointer"><VideoIcon color={'#ffffffff'}/></button>
        <button className="bg-[#464448] px-4 rounded-full cursor-pointer"><Mic /></button>
        <button className="bg-[#464448] px-4 rounded-full cursor-pointer"><VerticalDots /></button>
        <button className="bg-red-600 w-17 px-5 rounded-full cursor-pointer"><ClosePhone /></button>
      </div>
    </div>
  );
}
