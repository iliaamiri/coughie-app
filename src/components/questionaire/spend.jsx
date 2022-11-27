const Spend = ({ nextStep, prevStep, question, form, setForm }) => {
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = () => {
    nextStep();
  };
  const changeHandler = e => {
    setForm({ ...form, spendMoney: e.target.value });
  };
  return (
    <div className="spend">
      <label htmlFor="spend">{question}</label>
      <input
        id="spend"
        type="number"
        value={form.spendMoney}
        onChange={changeHandler}
      />
      <input type="submit" value="Prev" onClick={prevHandler} />
      <input type="submit" value="Next" onClick={clickHandler} />
    </div>
  );
};
export default Spend;
