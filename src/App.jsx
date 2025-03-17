import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./pages/ChatWindow";
import Calls from "./pages/Calls";
import Status from "./pages/Status";

function App() {
  return (
    <BrowserRouter>
      <div className="flex *:w-screen justify-between">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ChatWindow />} />
          <Route path="/calls" element={<Calls />} />
          <Route path="/status" element={<Status />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
