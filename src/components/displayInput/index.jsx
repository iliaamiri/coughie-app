import "./index.css";
import thinkIcon from "../../../public/assets/think-icon.png";
import sharedIcon from "../../../public/assets/shared-icon.png";

export default function DisplayInput() {
  return (
    <div className="input">
      <img className="icon" src={thinkIcon} alt="smoke-free" />
      <p className="">Remember why you quit </p>
      <div className="shared">
        <img className="icon" src={sharedIcon} alt="smoke-free" />
      </div>
    </div>
  );
}
