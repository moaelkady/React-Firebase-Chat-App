import { auth, provider } from "../../utils/firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";
import Button from "../button/button.component";
import Cookies from "universal-cookie";
import "./auth.styles.scss";

const Auth = ({ setIsAuth }) => {
  const cookies = new Cookies();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="auth">
      <div className="logo"></div>
      <div className="title">Welcome to Your Chat App</div>
      <Button onClick={signInWithGoogle}> Sign In With Google </Button>
    </div>
  );
};

export default Auth;
