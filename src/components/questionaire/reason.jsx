import DisplayBar from "../displayBar";
import MyInput from "../input";
import MyButton from "../button";
import { useNavigate } from "react-router-dom";

const Reason = ({ prevStep, form, setForm, question }) => {
  const navigate = useNavigate();
  const prevHandler = () => {
    prevStep();
  };
  const changeHandler = e => {
    setForm({ ...form, reason: e.target.value });
  };

  const submitHandler = e => {
    e.preventDefault();
    setForm({ ...form, isSubmit: true });
    localStorage.setItem("day", 1);
    localStorage.setItem("Oxygen", 10);
    return navigate("/home");
  };
  return (
    <>
      <DisplayBar name="About you" />
      <form onSubmit={submitHandler}>
        <div className="form-div">
          <span className="first-span">{question}</span>
          <textarea
            className="my-textArea"
            type="text"
            value={form.reason}
            onChange={changeHandler}
            maxLength="110"
          />

          <div className="btn-div">
            <MyButton text="Prev" type="bottom" onClick={prevHandler} />
            <MyButton text="Submit" type="bottom" />
          </div>
        </div>
      </form>
    </>
  );
};
export default Reason;
