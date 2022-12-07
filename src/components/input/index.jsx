import "./index.css";
const MyInput = ({ type, name, value, onChange, placeholder }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className="My-input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default MyInput;
