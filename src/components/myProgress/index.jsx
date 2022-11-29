import "./index.css";
import { useState, useEffect } from "preact/hooks";
import smokeFree from "../../assets/smokeFree.png";
import iconMoney from "../../assets/icon-money.png";
import noSmoke from "../../assets/noSmoke-icon.png";
import { getDifferenceInHours, users } from "../../../fakedb.js";

export default function MyProgress() {
  const [hours, setHours] = useState(0);
  const newDate = new Date();
  const oldDate = new Date(users[0].lastTimeVape);
  useEffect(() => {
    setHours(getDifferenceInHours(newDate, oldDate));
  }, []);

  const getMonth = () => {
    return Math.floor(hours / 720);
  };

  const getWeeklyMoneySaved = () => {
    return Math.floor((users[0].spendMoney / 7 / 24) * hours);
  };

  const getWeeklyVape = () => {
    return Math.floor((users[0].eCigaretteSaved / 7) * hours);
  };

  return (
    <div className="card">
      <div className="card-div">
        <img className="icon" src={smokeFree} alt="smoke-free" />
        <p> Smoke Free</p>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <div>
          {getMonth()}
          <p>months</p>
        </div>
        <div>
          {Math.floor((hours - getMonth() * 720) / 30)} <p>Days</p>
        </div>
        <div>
          {hours % 24}
          <p>Hours</p>
        </div>
      </div>
      <div className="card-div moneySaved">
        <img className="icon" src={iconMoney} alt="smoke-free" />
        <p className="d-flex flex-column moneySaved">Money Saved</p>
      </div>
      <div className="moneySaved"> ${getWeeklyMoneySaved()}</div>
      <div className="card-div moneySaved">
        <img className="icon" src={noSmoke} alt="smoke-free" />
        <p className="d-flex flex-column moneySaved">
          e-cigarette (how many pods)
        </p>
      </div>
      <div className="moneySaved">{getWeeklyVape()}</div>
    </div>
  );
}
