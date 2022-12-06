import "./index.css";
import backBtn from "../../../public/assets/back_btn.png";
import appleWatch from "../../../public/assets/appleWatch.png";
import keyboard from "../../../public/assets/keyboard.png";
import { useState } from "preact/hooks";

export default function MyGoal({ setIsClicked, getWeeklyMoneySaved }) {
  const data = localStorage.getItem("user");
  const [user, setUser] = useState(
    JSON.parse(data) || {
      uname: "",
      age: "",
      lastTimeVape: "",
      spendMoney: "",
      eCigaretteSaved: "",
    }
  );

  const goBack = () => {
    setIsClicked(false);
  };

  return (
    <div className="myGoalDiv">
      <div className="btnDiv">
        <div>
          <img src={backBtn} className="backBtn" onClick={goBack} />
        </div>
        <div className="myGoalLetter">My Goal</div>
      </div>

      <div className="totalMoneyDiv">
        <div className="myGoalText">Total money saved</div>
        <div className="getWeekly">${getWeeklyMoneySaved()}</div>
      </div>

      <div className="productDiv">
        <div className="watch">
          <img src={appleWatch} className="appleWatch" />
        </div>
        <div>apple watch</div>
        <div>$380</div>
      </div>
      <div className="">
        <img src={keyboard} className="keyboard" />
      </div>
    </div>
  );
}
