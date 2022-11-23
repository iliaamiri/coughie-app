import { useState } from "preact/hooks";
import MyButton from "../button";
import "./index.css";

const NameForm = ({ nextStep, handleChange }) => {
  const clickHandler = () => {
    nextStep();
  };
  return (
    <div className="nameFrom-div">
      <label>
        What is Your name?
        <input type="text" name="name" />
      </label>
      <label>
        What is your age?
        <input type="number" name="age" />
      </label>
      <MyButton type={"bottom"} text="next" onClick={clickHandler} />
    </div>
  );
};

export default NameForm;
