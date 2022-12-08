import "./index.css";
import thinkIcon from "/src/assets/think-icon.png";
import sharedIcon from "/src/assets/shared-icon.png";

export default function DisplayInput({ user }) {
  const data = localStorage.getItem("user");
  return (
    <div className="input">
      <img className="icon" src={thinkIcon} alt="smoke-free" />
      <div>
        <p className="">Remember why you quit </p>
        <div className="input_reason">
          <p> {user?.reason ? user.reason : "Please write your reason"}</p>
        </div>
      </div>
      <div className="shared">
        <img className="icon" src={sharedIcon} alt="smoke-free" />
      </div>
    </div>
  );
}
