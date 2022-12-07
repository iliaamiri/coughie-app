import MyButton from "../button";
import MyInput from "../input";
import DisplayBar from "../displayBar";
import "./index.css";

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
    <>
      <DisplayBar name="About you" />
      <div className="form-div">
        <span className="first-span">{question1}</span>
        <MyInput
          type="number"
          value={form.spendMoney}
          onChange={changeHandler}
        />

        <span className="second-span">{question2}</span>
        <MyInput
          type="number"
          value={form.eCigaretteSaved}
          onChange={ePodChnageHandler}
        />
        <div className="btn-div">
          <MyButton text="Prev" type="bottom" onClick={prevHandler} />
          <MyButton text="Next" type="bottom" onClick={clickHandler} />
        </div>
      </div>
    </>
  );
};
export default Spend;
