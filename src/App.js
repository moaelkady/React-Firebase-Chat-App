import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/loading/loading.components";
import Navbar from "./routes/navigation/navigation.component";
import "./App.css";

const Home = React.lazy(() => import("./routes/home/home.component"));
const ChatApp = React.lazy(() =>
  import("./routes/chat-app/chat-app.component")
);

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="chat" element={<ChatApp />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
