import { useState } from "preact/hooks";
import "./index.css";
import iconMoneyBig from "../../assets/icon_money_big.png";
import backBtn from "../../assets/back_btn.png";
import MyButton from "../button";
import MyGoal from "../myGoal";

export default function MoneySaved({ getWeeklyMoneySaved, setIsMoneySaved }) {
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
  const [isClicked, setIsClicked] = useState(false);
  const getDay = () => {
    return Math.floor(user.spendMoney / 7);
  };

  const getWeek = () => {
    return Math.floor(user.spendMoney);
  };

  const getMonth = () => {
    return Math.floor(user.spendMoney * 4);
  };

  const getYear = () => {
    return Math.floor(user.spendMoney * 52);
  };

  const clickHandler = () => {
    setIsClicked(true);
  };

  const goBack = () => {
    setIsMoneySaved(false);
  };

  if (isClicked) {
    return (
      <>
        <MyGoal
          setIsClicked={setIsClicked}
          getWeeklyMoneySaved={getWeeklyMoneySaved}
        />
      </>
    );
  } else {
    return (
      <div className="moneyDiv">
        <div className="btnDiv">
          <div>
            <img src={backBtn} className="backBtn" onClick={goBack} />
          </div>
          <div className="moneySavedLetter">Money Saved</div>
        </div>
        <img className="moneyIcon" src={iconMoneyBig} alt="smoke-free" />
        <div className="getWeekly">${getWeeklyMoneySaved()}</div>
        <div className="date">
          <div className="z">$ {getDay()}/ Day</div>
          <div className="z ">$ {getWeek()}/ Week</div>
          <div className="z">$ {getMonth()}/ Month</div>
          <div className="z">$ {getYear()}/ Year</div>
        </div>
        <MyButton text="More" onClick={clickHandler} />
      </div>
    );
  }
}
