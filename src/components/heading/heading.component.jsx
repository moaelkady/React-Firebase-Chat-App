import "./heading.styles.scss";

const Heading = ({ heading, title, info, info1, marker, theme }) => {
  return (
    <div className={theme? theme + " heading-container": "heading-container"}>
      <div className="heading">
        <h2>{heading}</h2>
      </div>
      <div className="title">
        <h3>
          <span>{title}</span>
          <span>{marker}</span>
        </h3>
      </div>
      {info && (
        <div className="info">
          {info}
          <br />
          {info1}
        </div>
      )}
    </div>
  );
};

export default Heading;
