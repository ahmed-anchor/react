import { useState } from "react";

const StatusView = ({ status, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col items-center justify-center">
      {/* Top Section: User Info */}
      <div className="absolute top-4 left-4 flex items-center space-x-3 text-white">
        <img
          src={status.profilePic}
          alt="User"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div>
          <h3 className="font-semibold">{status.name}</h3>
          <p className="text-sm opacity-80">{status.time}</p>
        </div>
      </div>

      {/* Status Image */}
      <div className="max-w-lg w-full p-2">
        <img
          src={status.image}
          alt="Status"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      {/* Close Button */}
      <button onClick={onClose} className="absolute top-4 right-4 text-white text-2xl">
        &times;
      </button>

      {/* Bottom Input Field */}
      <div className="absolute bottom-4 w-full max-w-lg px-4">
        <div className="flex items-center bg-gray-800 p-2 rounded-full">
          <span className="text-gray-400 p-2">😊</span>
          <input
            type="text"
            placeholder="Type a message"
            className="flex-1 bg-transparent text-white outline-none px-2"
          />
          <button className="text-blue-400 p-2">➤</button>
        </div>
      </div>
    </div>
  );
};

// Example Usage
const StatusBox = () => {
  const [showStatus, setShowStatus] = useState(true);

  const statusData = {
    profilePic: "https://via.placeholder.com/50", // Replace with actual image URL
    name: "إبراهيم خالد",
    time: "Today 07:39",
    image: "https://via.placeholder.com/500", // Replace with actual status image
  };

  return (
    <div>
      {showStatus && <StatusView status={statusData} onClose={() => setShowStatus(false)} />}
      {!showStatus && (
        <div className="w-full h-screen">
          <button onClick={() => setShowStatus(true)} className="p-2 bg-blue-500 text-white rounded">
            Open Status
          </button>
        </div>
      )}
    </div>
  );
};

export default StatusBox;
