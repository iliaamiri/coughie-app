import "./index.css";
const MyInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className = "My-input",
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
export default MyInput;
