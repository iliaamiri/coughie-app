import MyButton from "../button";

const Spend = ({ nextStep, prevStep, question1, question2, form, setForm }) => {
  const prevHandler = () => {
    prevStep();
  };
  const clickHandler = () => {
    nextStep();
  };
  const changeHandler = e => {
    setForm({ ...form, spendMoney: e.target.value });
  };
  const ePodChnageHandler = e => {
    setForm({ ...form, eCigaretteSaved: e.target.value });
  };
  return (
    <div className="spend">
      <label htmlFor="spend">{question1}</label>
      <input
        id="spend"
        type="number"
        value={form.spendMoney}
        onChange={changeHandler}
      />
      <label htmlFor="spendEpod">{question2}</label>
      <input
        id="spend"
        type="number"
        value={form.eCigaretteSaved}
        onChange={ePodChnageHandler}
      />
      <MyButton text="Prev" onClick={prevHandler} />
      <MyButton text="Next" onClick={clickHandler} />
    </div>
  );
};
export default Spend;
