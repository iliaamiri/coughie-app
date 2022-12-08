import MyButton from "../button";
import MyInput from "../input";
import DisplayBar from "../displayBar";
import "./index.css";

const NameForm = ({ nextStep, form, setForm }) => {
  const clickHandler = () => {
    nextStep();
  };
  const changeHandler = e => {
    setForm({ ...form, uname: e.target.value });
  };
  const ageHandler = e => {
    setForm({ ...form, age: e.target.value });
  };
  return (
    <>
      <DisplayBar name="About you" />
      <div className="form-div">
        <span className="first-span">What is Your name?</span>
        <MyInput
          type="text"
          name="uname"
          value={form.uname}
          onChange={changeHandler}
        />
        <span className="second-span">What is your age?</span>
        <MyInput
          type="number"
          name="age"
          value={form.age}
          onChange={ageHandler}
        />
        <MyButton text="next" type="bottom" onClick={clickHandler} />
      </div>
    </>
  );
};

export default NameForm;
