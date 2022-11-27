import "./index.css";
import { useState, useEffect } from "preact/hooks";
import smokeFree from "../../assets/smokeFree.png";
import iconMoney from "../../assets/icon-money.png";
import noSmoke from "../../assets/noSmoke-icon.png";
import lifeIcon from "../../assets/life-icon.png";
import timeSaveIcon from "../../assets/time-saved-icon.png";
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

  return (
    <div className="card">
      <div className="card-div">
        <img className="icon" src={smokeFree} alt="smoke-free" />
        <p className=""> Smoke Free</p>
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
      <div className="d-flex w-100 justify-content-between">
        <div className="card-div">
          <img className="icon" src={iconMoney} alt="smoke-free" />
          <div className="d-flex flex-column">
            Money Saved
            <div className="">0</div>
          </div>
        </div>
        <div className="card-div">
          <img className="icon" src={noSmoke} alt="smoke-free" />
          <div className="d-flex flex-column">
            e-cigareetes
            <div>0</div>
          </div>
        </div>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <div className="card-div">
          <img className="icon" src={lifeIcon} alt="smoke-free" />
          <div className="d-flex flex-column">
            life(days)
            <div>0</div>
          </div>
        </div>
        <div className="card-div">
          <img className="icon" src={timeSaveIcon} alt="smoke-free" />
          <div className="d-flex flex-column">
            time saved(days)
            <div>0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
