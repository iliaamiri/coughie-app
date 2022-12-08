import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "preact/hooks";
import MyButton from "../button";

export default function checkinButtons({ question, range, money }) {
    const navigate = useNavigate();
    const [hours, setHours] = useState(0);
    const [moneySpent, setMoneySpent] = useState(0);
    const [moneyDialogue, setMoneyDialogue] = useState(false);
    let dayNum = Number(localStorage.getItem("day"));
    let oxygen = Number(localStorage.getItem("oxygen"));
    const vapedToday = localStorage.getItem("vapedToday?");
    const moneySpentKey = Number(localStorage.getItem("moneySpent?"));
    const hoursWithoutVaping = Number(
        localStorage.getItem("hoursWithoutVaping")
    );

    function setLocalstorageNo() {
        localStorage.setItem("day", dayNum + 1);
        localStorage.setItem("vapedToday?", "no");
        navigate("/daily/moneySpent");
    }

    function setLocalstorageYes() {
        localStorage.setItem("day", dayNum + 1);
        localStorage.setItem("vapedToday?", "yes");
        navigate("/daily/hours");
    }

    function moneyInput() {
        setMoneyDialogue(true);
    }

    function moneyInputNo() {
        localStorage.setItem("moneySpent?", 0);
        if (vapedToday == "no") {
            localStorage.setItem("oxygen", oxygen + 20);
        }
        if (vapedToday == "yes") {
            localStorage.setItem("oxygen", oxygen + 10);
        }

        navigate("/daily/plant");
    }

    function vaped(hours) {
        localStorage.setItem("hoursWithoutVaping", hours);
         if (vapedToday == "yes" && hoursWithoutVaping > 14) {
            localStorage.setItem("oxygen", oxygen + 15);
        }

        if (vapedToday == "yes" && hoursWithoutVaping > 9) {
            localStorage.setItem("oxygen", oxygen + 10);
        }
        if (vapedToday == "yes" && hoursWithoutVaping < 9) {
        localStorage.setItem("oxygen", oxygen + 2);
        }
        navigate("/daily/moneySpent");
    }

    function moneySpentStorage() {
      
        console.log(oxygen);
        localStorage.setItem("moneySpent?", moneySpent);
        navigate("/daily/plant");
    }

    return (
        <>
            <div className="check-in-box">
                <h3>{question}</h3>

                {!range ? (
                    <>
                        <button
                            onClick={money ? moneyInput : setLocalstorageYes}
                            className="left"
                        >
                            Yes
                        </button>
                        <button
                            className="right"
                            onClick={money ? moneyInputNo : setLocalstorageNo}
                        >
                            No
                        </button>
                    </>
                ) : (
                    <>
                        <input
                            className="input-color"
                            type="range"
                            min="0"
                            max="23"
                            step="1"
                            value={hours}
                            onChange={(e) => setHours(e.target.value)}
                        ></input>
                        <h1 className="hours">{hours} hours</h1>
                        <MyButton
                            text="CONFIRM"
                            onClick={() => vaped(hours)}
                        ></MyButton>
                    </>
                )}
            </div>

            {moneyDialogue && (
                <div className="check-in-box">
                    <h3>How much?</h3>
                    <h3>
                        $ &nbsp;
                        <input
                            type="number"
                            min="1"
                            max="1000"
                            placeholder="0"
                            onChange={(e) => setMoneySpent(e.target.value)}
                        />
                    </h3>
                    <MyButton
                        text="SUBMIT"
                        onClick={() => moneySpentStorage()}
                    ></MyButton>
                </div>
            )}
        </>
    );
}
