import { useState } from "preact/hooks";
import "./index.css";
import iconMoneyBig from "../../assets/icon_money_big.png";
import { getDifferenceInHours, users } from "../../../fakedb.js";
import MyButton from "../button";
import MyGoal from "../myGoal";

export default function MoneySaved({ getWeeklyMoneySaved }) {
  const [isClicked, setIsClicked] = useState(false);
  const getDay = () => {
    return Math.floor(users[0].spendMoney / 7);
  };

  const getWeek = () => {
    return Math.floor(users[0].spendMoney);
  };

  const getMonth = () => {
    return Math.floor(users[0].spendMoney * 4);
  };

  const getYear = () => {
    return Math.floor(users[0].spendMoney * 52);
  };
  const clickHandler = () => {
    setIsClicked(true);
  }
  if (isClicked) {
    return(
      <>
      <MyGoal/>
      </>
    )
    
  } else {

  return (
    <div className="moneyDiv">
      <div className="moneySavedLetter">Money Saved</div>
      <img className="moneyIcon" src={iconMoneyBig} alt="smoke-free" />
      <div className="getWeekly">${getWeeklyMoneySaved()}</div>
      <div className="date">
        <div className="z">$ {getDay()}/ Day</div>
        <div className="z ">$ {getWeek()}/ Week</div>
        <div className="z">$ {getMonth()}/ Month</div>
        <div className="z">$ {getYear()}/ Year</div>
      </div>
      <MyButton text="More" onClick={clickHandler}/>
    </div>
  );
  }
}
