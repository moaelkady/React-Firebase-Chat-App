import { auth } from "../../utils/firebase/firebase.utils";
import { signOut } from "firebase/auth";
import Button from "../button/button.component";
import "./chat-window.styles.scss";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const ChatWindow = ({ children, isAuth, setIsAuth, setIsInChat }) => {
  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    setIsInChat(false);
  };

  return (
    <div className="chat-window-container route-view-container">
      <div className="chat-window">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <Button onClick={signUserOut}>Sign Out</Button>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
