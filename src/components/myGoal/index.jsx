import "./index.css";
import backBtn from "/src/assets/back_btn.png";
import appleWatch from "/src/assets/appleWatch.png";
import keyboard from "/src/assets/keyboard.png";
import coats from "/src/assets/coat.png";
import boots from "/src/assets/boots.png";
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
  const howManyPercent = (value) => {
    const percent = Math.floor((getWeeklyMoneySaved() / value) * 100);
    if (percent < 26) {
      return "twentyFiveBar";
    } else if (percent < 51) {
      return "fiftyBar";
    } else if (percent < 81) {
      return "eightyBar";
    } else {
      return "fullBar";
    }
  };
  console.log(howManyPercent(100000));
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
        <div className="percentageDiv">
          <div className="barPercentage">Apple Watch</div>
          <div className={howManyPercent(380)}> </div>
          <div className="percentage">{Math.floor((getWeeklyMoneySaved() / 380) * 100)}%</div>
        </div>
        <div> $380</div>
      </div>
      <div className="productDiv">
        <div className="watch">
          <img src={keyboard} className="appleWatch" />
        </div>
        <div className="percentageDiv">
          <div className="barPercentage">Keyboard</div>
          <div className={howManyPercent(150)}> </div>
          <div className="percentage">{Math.floor((getWeeklyMoneySaved() / 150) * 100)}%</div>
        </div>
        <div> $150</div>
      </div>
      <div className="productDiv">
        <div className="watch">
          <img src={coats} className="appleWatch" />
        </div>
        <div className="percentageDiv">
          <div className="barPercentage">Coats</div>
          <div className={howManyPercent(400)}> </div>
          <div className="percentage">{Math.floor((getWeeklyMoneySaved() / 400) * 100)}%</div>
        </div>
        <div> $400</div>
      </div>
      <div className="productDiv">
        <div className="watch">
          <img src={boots} className="appleWatch" />
        </div>
        <div className="percentageDiv">
          <div className="barPercentage">Boots</div>
          <div className={howManyPercent(100)}> </div>
          <div className="percentage">{Math.floor((getWeeklyMoneySaved() / 100) * 100)}%</div>
        </div>
        <div> $100</div>
      </div>
    </div>
  );
}
