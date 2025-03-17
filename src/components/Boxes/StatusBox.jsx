import { Link } from 'react-router-dom';
import whatssRemovedBg from '../../assets/whatss-removedbg.png'
import whatss from '../../assets/whatss.jpeg'
import Camera from "../svgs/Camera";
import RingingPhone from "../svgs/RingingPhone";

// Example Usage
const StatusBox = () => {
  return (
    <div className="w-full h-screen bg-[#302e32]">
      <div className="w-full flex flex-col justify-between h-screen items-center ">
        <div className="flex justify-between items-center w-full p-4 bg-white text-black shadow-md">
          <h1 className="font-bold text-lg">المكالمات</h1>
          <div className="flex items-center gap-4">
            <Link to='/calls' className="text-xl cursor-pointer"><Camera /></Link>
            <Link to='/calls' className="text-xl cursor-pointer mr-2"><RingingPhone /></Link>
            <h1 className="font-bold text-lg mr-4">WHATSS</h1>
            <img src={whatss} alt="no image" className="w-12 h-12 rounded-full mr-[-6px]" />
          </div>
        </div>
        <img src={whatssRemovedBg} alt="Floating Image" className="w-100 h-100 mb-40 object-cover animate-float" />
      </div>
    </div>
  );
};

export default StatusBox;
