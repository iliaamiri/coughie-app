const Preference = () => {
  const handleStatus = () => {
    console.log("status");
  };
  const handleGoal = () => {
    console.log("goal");
  };
  return (
    <div className="preference">
      <span className="profile-span">Preferences</span>
      <div className="preference-div">
        <div className="preference frist">
          <label className="switch first">
            <input type="checkbox" />
            <span onClick={handleStatus} className="slider round"></span>
          </label>
          <p className="p-first">Show your status?</p>
        </div>
        <div className="preference second">
          <label className="switch second">
            <input type="checkbox" />
            <span onClick={handleGoal} className="slider round"></span>
          </label>
          <p className="p-second">Show your goal?</p>
        </div>
      </div>
    </div>
  );
};
export default Preference;
