import DisplayBar from "../../components/displayBar";
import MyProgress from "../../components/myProgress";
import DisplayInput from "../../components/displayInput";
import MoneySaved from "../../components/moneySaved";
import { useState, useEffect } from "preact/hooks";
import { getDifferenceInHours, users } from "../../../fakedb";

const Tracker = () => {
  const [hours, setHours] = useState(0);
  const [isMoneySaved, setIsMoneySaved] = useState(false);
  const newDate = new Date();
  const oldDate = new Date(users[0].lastTimeVape);
  const clickHandler = () => {
    setIsMoneySaved(true);
  };
  useEffect(() => {
    setHours(getDifferenceInHours(newDate, oldDate));
  }, []);
  const getWeeklyMoneySaved = () => {
    return Math.floor((users[0].spendMoney / 7 / 24) * hours);
  };

  return (
    <div>
      <DisplayBar name="My progress" />
      <DisplayInput />
      {!isMoneySaved ? (
        <MyProgress clickHandler={clickHandler} hours={hours} getWeeklyMoneySaved={getWeeklyMoneySaved}/>
      ) : (
        <MoneySaved clickHandler={clickHandler} hours={hours} getWeeklyMoneySaved={getWeeklyMoneySaved}/>
      )}
    </div>
  );
};

export default Tracker;
