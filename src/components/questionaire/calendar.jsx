import MyButton from "../button";
import { useNavigate } from "react-router-dom";
import { useRef } from "preact/hooks";
import useLocalStorage from "use-local-storage";

const Calendar = ({ prevStep, question, form, setForm }) => {
  const calendarRef = useRef();
  const navigate = useNavigate();
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = () => {
    // setForm({ ...form, isSubmit: true });
    return;
  };
  const submitHandler = e => {
    e.preventDefault();
    if (form.lastTimeVape == "") {
      calendarRef.current.style.border = "2px solid red";
      return;
    }
    return setForm({ ...form, isSubmit: true });
    // navigate("/home");
  };

  const changeHandler = e => {
    setForm({ ...form, lastTimeVape: e.target.value });
  };
  return (
    <div className="calendar">
      <form onSubmit={submitHandler}>
        <label htmlFor="calendar">{question}</label>
        <input
          id="calendar"
          type="date"
          ref={calendarRef}
          value={form.lastTimeVape}
          onChange={changeHandler}
        />
        <MyButton text="Prev" onClick={prevHandler} />
        <MyButton text="Submit" />
      </form>
    </div>
  );
};
export default Calendar;
