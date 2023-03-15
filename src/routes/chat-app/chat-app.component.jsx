import { useState } from "react";
import Chat from "../../components/chat/chat.component";
import Auth from "../../components/auth/auth.component.jsx";
import ChatWindow from "../../components/chat-window/ChatWindow-component";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ChatApp = () => {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [isInChat, setIsInChat] = useState(null);
  const [room, setRoom] = useState("");

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
        <div className="room">
          <label> Type room password: </label>
          <input type="password" onChange={(e) => setRoom(e.target.value)} />
          <button
            onClick={() => {
              setIsInChat(true);
            }}
          >
            Enter Chat
          </button>
        </div>
      ) : (
        <Chat room={room} />
      )}
    </ChatWindow>
  );
};
export default ChatApp;
