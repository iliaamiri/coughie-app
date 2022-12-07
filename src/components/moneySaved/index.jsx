import { useState } from "preact/hooks";
import "./index.css";
import iconMoneyBig from "../../../public/assets/icon_money_big.png";
import backBtn from "../../../public/assets/back_btn.png";
import MyButton from "../button";
import MyGoal from "../myGoal";

export default function MoneySaved({
  getWeeklyMoneySaved,
  setIsMoneySaved,
  hours,
}) {
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
  console.log(user.spendMoney);
  const [isClicked, setIsClicked] = useState(false);

  const getDay = () => {
    return (
      <>
        <div className="z">
          $ {Math.floor((Number(user.spendMoney) / 7 / 24) * hours)}/ Day
        </div>
        <div className="z ">$ 0/ Week</div>
        <div className="z">$ 0/ Month</div>
        <div className="z">$ 0/ Year</div>
      </>
    );
  };

  const getWeek = () => {
    return (
      <>
        <div className="z">
          $ {Math.floor(Number(user.spendMoney) / 7)}/ Day
        </div>
        <div className="z ">
          $ {Math.floor(user.spendMoney)}/ Week
          <div className="z">$ 0/ Month</div>
          <div className="z">$ 0/ Year</div>
        </div>
      </>
    );
  };
  const getMonth = () => {
    return (
      <>
        <div className="z">
          $ {Math.floor(Number(user.spendMoney) / 7)}/ Day
        </div>
        <div className="z ">$ {Math.floor(Number(user.spendMoney))}/ Week</div>
        <div className="z ">
          $ {Math.floor(Number(user.spendMoney) * 4)}/ Month
          <div className="z">$ 0/ Year</div>
        </div>
      </>
    );
  };

  const getYear = () => {
    return (
      <>
        <div className="z">
          $ {Math.floor(Number(user.spendMoney) / 7 / 24) * (hours % 24)}/ Day
        </div>
        <div className="z ">
          $ {Math.floor(Number(user.spendMoney) / 7 / 24) * (hours % 168)}/ Week
        </div>
        <div className="z ">
          $ {Math.floor(Number(user.spendMoney) / 7 / 24) * (hours % 720)}/
          Month
        </div>
        <div className="z ">
          $ {Math.floor(Number(user.spendMoney) * 52)}/ Year
        </div>
      </>
    );
  };

  const clickHandler = () => {
    setIsClicked(true);
  };

  const goBack = () => {
    setIsMoneySaved(false);
  };
  const checkHours = (hours) => {
    if (hours < 168) {
      return getDay();
    } else if (hours < 720) {
      return getWeek();
    } else if (hours < 8760) {
      return getMonth();
    } else {
      return getYear();
    }
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
          {checkHours(hours)}
          {/* <div className="z">$ {getDay()}/ Day</div> */}
          {/* <div className="z ">$ {getWeeklyMoneySaved()}/ Week</div> */}
          {/* <div className="z">$ {getMonth()}/ Month</div>
          <div className="z">$ {getYear()}/ Year</div> */}
        </div>
        <MyButton text="More" onClick={clickHandler} />
      </div>
    );
  }
}
