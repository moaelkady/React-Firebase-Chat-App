import { Link } from "react-router-dom";
import Button from "../../components/button/button.component";
import Heading from "../../components/heading/heading.component";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="route-view-container home-view-container">
      <div className="home-element">
        <Heading
          heading="ChatApp"
          title="Join The Conversation"
          marker="!"
          theme="middle-view"
          info={
            <p>The best way to stay connected with your friends and family</p>
          }
          info1={
            <div className="services-column">
              <h3>Key Features</h3>
              <ul>
                <li>Sign in with Google</li>
                <li>Create private chat rooms</li>
                <li>Invite friends to join your room</li>
                <li>
                  Share the chat room key with friends or family to invite them
                  to join
                </li>
                <li>Join an existing chat room using a unique room key</li>
                <li>Use ChatApp on multiple devices</li>
              </ul>
            </div>
          }
        />
        <br />
        <Link
          to="/chat"
          style={{
            textDecoration: "none",
            display: "block",
            margin: "auto",
            width: "140px",
          }}
        >
          <Button>Go to Chat</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
