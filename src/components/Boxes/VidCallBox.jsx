
export default function VidCallBox() {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-white text-black shadow-md">
        <h1 className="font-bold text-lg">WHATSS</h1>
        <div className="flex gap-4">
          <button className="text-xl">📞</button>
          <button className="text-xl">📷</button>
        </div>
      </div>

      {/* Main Call Area */}
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-700"
        />
        <h2 className="mt-3 text-lg font-semibold">محمد مصطفى</h2>
        <p className="text-gray-400 mt-2">يرن........</p>

        {/* Video Feed */}
        <div className="mt-6 w-3/4 md:w-1/2 border-2 border-blue-500 rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/500x300"
            alt="Video Feed"
            className="w-full"
          />
        </div>
      </div>

      {/* Call Controls */}
      <div className="bg-gray-800 p-4 flex justify-center gap-6">
        <button className="bg-red-600 p-4 rounded-full">📴</button>
        <button className="bg-gray-700 p-4 rounded-full">⚫</button>
        <button className="bg-gray-700 p-4 rounded-full">🎥</button>
        <button className="bg-gray-700 p-4 rounded-full">🔄</button>
        <button className="bg-gray-700 p-4 rounded-full">👥</button>
      </div>
    </div>
  );
}
