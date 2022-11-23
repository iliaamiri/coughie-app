const Calendar = ({
  nextStep,
  prevStep,
  handleChange,
  question,
  isSubmit = false,
}) => {
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = () => {
    nextStep();
  };
  return (
    <div className="calendar">
      <label htmlFor="calendar">{question}</label>
      <input id="calendar" type="date" value="" onChange={handleChange} />
      <input type="submit" value="Prev" onClick={prevHandler} />
      {!isSubmit ? (
        <input type="submit" value="Next" onClick={clickHandler} />
      ) : (
        <input type="submit" value="Submit" onClick={clickHandler} />
      )}
    </div>
  );
};
export default Calendar;
