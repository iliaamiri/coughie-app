const Spend = ({ nextStep, prevStep, handleChange, question }) => {
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = () => {
    nextStep();
  };
  return (
    <div className="spend">
      <label htmlFor="spend">{question}</label>
      <input id="spend" type="number" value="" onChange={handleChange} />
      <input type="submit" value="Prev" onClick={prevHandler} />
      <input type="submit" value="Next" onClick={clickHandler} />
    </div>
  );
};
export default Spend;
