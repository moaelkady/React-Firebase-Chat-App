import "./message-box.styles.scss";

const MessageBox = ({ message, userName }) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  let time = new Date().toLocaleDateString("en-US", options);
  message.createdAt
    ? (time = message.createdAt.toDate().toLocaleDateString("en-US", options))
    : new Date().toLocaleDateString("en-US", options);

  return (
    <div
      className={userName === message.user ? "message current-user" : "message"}
    >
      {/*<div className="message-profile">
        <span>{message.user.split("")[0]}</span>
  </div>*/}
      <div className="message-content">
        <div className="message-header">
          <span className="message-author">
            {userName === message.user ? "You" : message.user.split(" ")[0]}
          </span>
        </div>
        <div className="message-content">
          <p>{message.text}</p>
        </div>
        <div className="message-footer">
          <span>
            <span className="message-time">{time}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
