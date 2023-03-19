import "./primary-button.styles.scss";
const PrimaryButton = ({ children, onClick }) => {
  return (
    <button className="primary-btn" onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
