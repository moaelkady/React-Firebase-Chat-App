import { Link } from "react-router-dom";
import PrimaryButton from "../../components/primary-button/primary-button.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="route-view-container home-view-container">
      <div className="home-element">
        <h1>Hello, Have a room password?</h1>
        <Link to="/chat">
          <PrimaryButton>Go to Room</PrimaryButton>
        </Link>
      </div>
    </div>
  );
};

export default Home;
