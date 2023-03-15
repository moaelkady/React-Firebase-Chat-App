import PrimaryButton from "../primary-button/primary-button.component";
import { auth, provider } from "../../utils/firebase/firebase.utils";
import { signInWithPopup } from "firebase/auth";
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
      <p> Sign In With Google To Continue </p>
      <PrimaryButton onClick={signInWithGoogle}>
        Sign In With Google
      </PrimaryButton>
    </div>
  );
};

export default Auth;
