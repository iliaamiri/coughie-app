import "./index.css";
import { useState } from "preact/hooks";
import smokeFree from "../../assets/smokeFree.png";
import iconMoney from "../../assets/icon-money.png";
import noSmoke from "../../assets/noSmoke-icon.png";
import lifeIcon from "../../assets/life-icon.png";
import timeSaveIcon from "../../assets/time-saved-icon.png";

export default function MyProgress() {
  return (
    <div className="card">
      <div className="card-div">
        <img className="icon" src={smokeFree} alt="smoke-free" />
        <p className=""> Smoke Free</p>
      </div>
      <div className="d-flex w-100 justify-content-between">
        <div>
          0<p>months</p>
        </div>
        <div>
          0 <p>Days</p>
        </div>
        <div>
          0<p>Hours</p>
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
