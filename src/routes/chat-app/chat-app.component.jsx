import { useState } from "react";
import Chat from "../../components/chat/chat.component";
import Auth from "../../components/auth/auth.component.jsx";
import ChatWindow from "../../components/chat-window/chat-window-component";
import Cookies from "universal-cookie";
import Button from "../../components/button/button.component";

import "./chat-app.styles.scss";
const cookies = new Cookies();

const ChatApp = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

  const handleChange = (e) => {
    setRoom(e.target.value);
  };
  const handleClick = () => {
    setIsInChat(true);
  };
  if (!isAuth) {
    return (
      <ChatWindow
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        setIsInChat={setIsInChat}
      >
        <Auth setIsAuth={setIsAuth} />
      </ChatWindow>
    );
  }

  return (
    <ChatWindow isAuth={isAuth} setIsAuth={setIsAuth} setIsInChat={setIsInChat}>
      {!isInChat ? (
        <div className="room-container">
          <div className="container">
            <label className="room-title" for="roomPassword">
            Type your room password
            </label>
            <input
              className="room-input"
              id="roomPassword"
              type="password"
              onChange={handleChange}
            />
            <Button className="room-enter-btn" onClick={handleClick}>
              Enter Room
            </Button>
          </div>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </ChatWindow>
  );
};
export default ChatApp;
