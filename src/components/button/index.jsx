import "./index.css";
const MyButton = ({
  text,
  onClick,
  type = "default",
  buttonType = "submit",
}) => {
  const btnType = [`bottom`, `top`].includes(type) ? type : "default";
  return (
    <>
      <button
        className={["myBtn", `myBtn_${btnType}`].join(" ")}
        onClick={onClick}
        type={buttonType}
      >
        {text}
      </button>
    </>
  );
};

export default MyButton;
