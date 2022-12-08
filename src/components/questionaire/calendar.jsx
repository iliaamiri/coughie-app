import MyButton from "../button";

import { useRef } from "preact/hooks";
import MyInput from "../input";
import DisplayBar from "../displayBar";

const Calendar = ({ prevStep, nextStep, question, form, setForm }) => {
  const calendarRef = useRef();
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = () => {
    nextStep();
  };
  const changeHandler = e => {
    setForm({ ...form, lastTimeVape: e.target.value });
  };
  return (
    <>
      <DisplayBar name="About you" />
      <div className="form-div">
        <span className="first-span">{question}</span>
        <MyInput
          type="date"
          ref={calendarRef}
          value={form.lastTimeVape}
          onChange={changeHandler}
        />
        <div>
          <MyButton text="Prev" type="bottom" onClick={prevHandler} />
          <MyButton type="bottom" text="Next" onClick={clickHandler} />
        </div>
      </div>
    </>
  );
};
export default Calendar;
