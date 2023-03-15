import PrimaryButton from "../primary-button/primary-button.component";
import { auth } from "../../utils/firebase/firebase.utils";
import { signOut } from "firebase/auth";

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
    <div className="chat-window-container">
      <div className="chat-window">{children}</div>
      {isAuth && (
        <div className="sign-out">
          <PrimaryButton onClick={signUserOut}>Sign Out</PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
