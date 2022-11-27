const Calendar = ({
  nextStep,
  prevStep,
  question,
  isSubmit = false,
  form,
  setForm,
}) => {
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
    <div className="calendar">
      <label htmlFor="calendar">{question}</label>
      <input
        id="calendar"
        type="date"
        value={form.lastTimeVape}
        onChange={changeHandler}
      />
      <input type="submit" value="Prev" onClick={prevHandler} />
      <input type="submit" value="Submit" onClick={clickHandler} />
    </div>
  );
};
export default Calendar;
