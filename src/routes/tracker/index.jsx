import DisplayBar from "../../components/displayBar";
import MyProgress from "../../components/myProgress";
import DisplayInput from "../../components/displayInput";
import MoneySaved from "../../components/moneySaved";
import { useState, useEffect } from "preact/hooks";
import "./index.css"

const Tracker = () => {
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
  const [hours, setHours] = useState(0);
  const [isMoneySaved, setIsMoneySaved] = useState(false);
  const newDate = new Date();
  const oldDate = new Date(user.lastTimeVape);
  console.log(user);

  const getDifferenceInHours = (date1, date2) => {
    const diff = Math.abs(date1.getTime() - Number(date2.getTime()));
    return Number(Math.ceil(diff / (1000 * 3600))) - 20;
  };

  const clickHandler = () => {
    setIsMoneySaved(true);
  };
  useEffect(() => {
    setHours(getDifferenceInHours(newDate, oldDate));
  }, []);
  const getWeeklyMoneySaved = () => {
    if (!hours){
      return 0;
    }
    return Math.floor((user.spendMoney / 7 / 24) * hours);
  };

  return (
    <div className="tracker-div">
      <DisplayBar name="My progress" />
    
      {!isMoneySaved ? (
        <MyProgress
          clickHandler={clickHandler}
          hours={hours}
          getWeeklyMoneySaved={getWeeklyMoneySaved}
        />
      ) : (
        <MoneySaved
          setIsMoneySaved={setIsMoneySaved}
          clickHandler={clickHandler}
          hours={hours}
          getWeeklyMoneySaved={getWeeklyMoneySaved}
        />
      )}
    </div>
  );
};

export default Tracker;
