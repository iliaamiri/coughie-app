import MyButton from "../button";
import { useNavigate } from "react-router-dom";

const Calendar = ({ nextStep, prevStep, question, form, setForm }) => {
  const navigate = useNavigate();
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = () => {
    navigate("/home");
  };
  const changeHandler = e => {
    setForm({ ...form, lastTimeVape: e.target.value });
  };
  return (
    <div className="calendar">
      <label htmlFor="calendar">{question}</label>
      <input
        id="calendar"
        type="date"
        value={form.lastTimeVape}
        onChange={changeHandler}
      />
      <MyButton text="Prev" onClick={prevHandler} />
      <MyButton text="Submit" onClick={clickHandler} />
    </div>
  );
};
export default Calendar;
