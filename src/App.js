import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/loading/loading.components";

import "./App.css";

const Home = React.lazy(() => import("./routes/home/home.component"));
const ChatApp = React.lazy(() =>
  import("./routes/chat-app/chat-app.component")
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/chat"
          element={
            <Suspense fallback={<Loading />}>
              <ChatApp />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
