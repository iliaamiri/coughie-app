import "./index.css";
import smokeFree from "../../assets/smokeFree.png";
import iconMoney from "../../assets/icon-money.png";
import noSmoke from "../../assets/noSmoke-icon.png";
import { useState } from "preact/hooks";

export default function MyProgress({
  clickHandler,
  hours,
  getWeeklyMoneySaved,
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
  const getMonth = () => {
    return Math.floor(hours / 720);
  };

  const getWeeklyVape = () => {
    return Math.floor((user.eCigaretteSaved / 7 / 24) * hours);
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
        <p onClick={clickHandler} className="d-flex flex-column moneySaved">
          Money Saved
        </p>
      </div>
      <div className="moneySaved">${getWeeklyMoneySaved()}</div>
      <div className="card-div eCigarette">
        <img className="icon" src={noSmoke} alt="smoke-free" />
        <p className="d-flex flex-column eCigarette">
          e-cigarette (how many pods)
        </p>
      </div>
      <div className="eCigarette"> {getWeeklyVape()}</div>
    </div>
  );
}
