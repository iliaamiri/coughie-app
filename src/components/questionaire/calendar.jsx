import MyButton from "../button";
import { useNavigate } from "react-router-dom";
import { useRef } from "preact/hooks";
import MyInput from "../input";
import DisplayBar from "../displayBar";

const Calendar = ({ prevStep, question, form, setForm }) => {
  const calendarRef = useRef();
  const navigate = useNavigate();
  const prevHandler = () => {
    prevStep();
  };
  const submitHandler = e => {
    e.preventDefault();
    if (form.lastTimeVape == "") {
      calendarRef.current.style.border = "2px solid red";
      return;
    }
    setForm({ ...form, isSubmit: true });
    return navigate("/home");
  };

  const changeHandler = e => {
    setForm({ ...form, lastTimeVape: e.target.value });
  };
  return (
    <>
      <DisplayBar name="About you" />
      <form onSubmit={submitHandler}>
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
            <MyButton type="bottom" text="Submit" />
          </div>
        </div>
      </form>
    </>
  );
};
export default Calendar;
