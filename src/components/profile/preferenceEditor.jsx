import useLocalStorage from "use-local-storage";
const Preference = () => {
  const data = localStorage.getItem("user");
  const [user, setUser] = useLocalStorage(
    "user",
    JSON.parse(data) || {
      uname: "",
      age: 20,
      lastTimeVape: "2020-10-10",
      spendMoney: 10,
      eCigaretteSaved: 1,
      isSubmit: true,
      reason: "",
      showStatus: true,
      showGoal: true,
    }
  );
  const btnType = user.showGoal ? "green" : "grey";
  const statusBtn = user.showStatus ? "green" : "grey";

  const handleStatus = () => {
    setUser({ ...user, showStatus: !user.showStatus });
  };
  const handleGoal = () => {
    setUser({ ...user, showGoal: !user.showGoal });
  };

  return (
    <div className="preference">
      <span className="profile-span">Preferences</span>
      <div className="preference-div">
        <div className="preference frist">
          <label className="switch first">
            <input type="checkbox" />
            <span
              onClick={handleStatus}
              className={["slider1", "round", `${statusBtn}`].join(" ")}
            ></span>
          </label>
          <p className="p-first">Show your status?</p>
        </div>
        <div className="preference second">
          <label className="switch second">
            <input type="checkbox" />
            <span
              onClick={handleGoal}
              className={["slider2", "round", `${btnType}`].join(" ")}
            ></span>
          </label>
          <p className="p-second">Show your goal?</p>
        </div>
      </div>
    </div>
  );
};
export default Preference;
