import "./index.css";
const MyButton = ({ text, onClick, type = "default" }) => {
  const btnType = [`bottom`, `top`].includes(type) ? type : "default";
  return (
    <>
      <button
        className={["myBtn", `myBtn_${btnType}`].join(" ")}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default MyButton;
