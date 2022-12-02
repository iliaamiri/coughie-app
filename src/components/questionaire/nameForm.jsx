import { useState } from "preact/hooks";
import MyButton from "../button";
import "./index.css";

const NameForm = ({ nextStep, form, setForm }) => {
  const clickHandler = () => {
    nextStep();
  };
  const changeHandler = e => {
    setForm({ ...form, name: e.target.value });
  };
  const ageHandler = e => {
    setForm({ ...form, age: e.target.value });
  };
  return (
    <div className="nameFrom-div">
      <label>
        What is Your name?
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHandler}
        />
      </label>
      <label>
        What is your age?
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={ageHandler}
        />
      </label>
      <MyButton text="next" onClick={clickHandler} />
    </div>
  );
};

export default NameForm;
