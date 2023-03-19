import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import ChatApp from "./routes/chat-app/chat-app.component";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<ChatApp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
