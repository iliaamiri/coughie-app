import MyButton from "../button";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";

const Calendar = ({ prevStep, question, form, setForm, handleSubmit }) => {
  const navigate = useNavigate();
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = e => {
    navigate("/home");
    handleSubmit();
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
