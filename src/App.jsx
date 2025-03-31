import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./pages/ChatWindow";
import Calls from "./pages/Calls";
import Status from "./pages/Status";
import Login from './pages/Login';
import Home from "./pages/Home";

function Layout() {
  const location = useLocation();

  return (
    <div className="flex *:w-screen justify-between">
      {["/chats", "/calls", "/status"].includes(location.pathname) && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<ChatWindow />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/status" element={<Status />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
