import "./index.css";
import { useNavigate } from "react-router-dom";
import { useState } from "preact/hooks";
import MyButton from "../button";

export default function checkinButtons({ question, range, money }) {
    const navigate = useNavigate();
    const [hours, setHours] = useState(0);
    const [moneySpent, setMoneySpent] = useState(0);
    const [moneyDialogue, setMoneyDialogue] = useState(false);

    function setLocalstorageNo() {
        localStorage.setItem("vapedToday?", "no");
        navigate("/daily/hours");
    }

    function setLocalstorageYes() {
        localStorage.setItem("vapedToday?", "yes");
        navigate("/daily/hours");
    }

    function moneyInput() {
        setMoneyDialogue(true);
    }

    function vaped(hours) {
        localStorage.setItem("hoursWithoutVaping", hours);
        navigate("/daily/moneySpent");
    }

    function moneySpentStorage() {
      localStorage.setItem("moneySpent?", moneySpent);
      navigate("/home");
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
                            onClick={money ? moneyInput : setLocalstorageNo}
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
                <h3>$ &nbsp;
                <input type="number" min="1" max="1000" value="0" onChange={(e) => setMoneySpent(e.target.value)}/>
                </h3>
                <MyButton text="SUBMIT" onClick={() => moneySpentStorage(hours)}></MyButton>
            </div>
       
              )}
        </>
    );
}
