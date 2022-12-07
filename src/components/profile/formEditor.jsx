import { useState } from "preact/hooks";
import MyInput from "../input";
import MyButton from "../button";
import useLocalStorage from "use-local-storage";
import "./index.css";
const FormEditor = ({ setIsEdit }) => {
  const data = localStorage.getItem("user");
  const [user, setUser] = useLocalStorage(
    "user",
    JSON.parse(data) || {
      uname: "",
      age: 20,
      lastTimeVape: "2020-10-10",
      spendMoney: 10,
      eCigaretteSaved: 1,
      isSubmit: true,
    }
  );

  const handleProfile = e => {
    e.preventDefault();
    return setIsEdit(false);
  };
  return (
    <div className="form-control">
      <form className="profile-form">
        <span className="profile-span">What is Your name?</span>
        <MyInput
          className="profile-input"
          type="text"
          placeholder="Name"
          value={user.uname}
          onChange={e => setUser({ ...user, uname: e.target.value })}
        />
        <span className="profile-span">What is Your age?</span>
        <MyInput
          className="profile-input"
          type="number"
          placeholder="Age"
          value={user.age}
          onChange={e => setUser({ ...user, age: e.target.value })}
        />

        <span className="profile-span">
          How much money do you spend per week on vaping?
        </span>
        <MyInput
          className="profile-input"
          type="number"
          placeholder="Spend money"
          value={user.spendMoney}
          onChange={e => setUser({ ...user, spendMoney: e.target.value })}
        />
        <span className="profile-span">
          How many ePod do you spend per week?
        </span>
        <MyInput
          className="profile-input"
          type="number"
          placeholder="Spend ePod"
          value={user.eCigaretteSaved}
          onChange={e => setUser({ ...user, eCigaretteSaved: e.target.value })}
        />

        <span className="profile-span">When was the last time you vaped?</span>
        <MyInput
          className="profile-input"
          type="date"
          placeholder="Last time vape"
          value={user.lastTimeVape}
          onChange={e => setUser({ ...user, lastTimeVape: e.target.value })}
        />
        <div className="bottom-btn-div">
          <MyButton type="bottom" text="Save" onClick={handleProfile} />
        </div>
      </form>
    </div>
  );
};
export default FormEditor;
