import "./index.css";

export default function DisplayInput({ user }) {
  const data = localStorage.getItem("user");
  return (
    <div className="input">
      <img className="icon" src={"/assets/think-icon.png"} alt="smoke-free" />
      <div>
        <p className="">Remember why you quit </p>
        <div className="input_reason">
          <p> {user?.reason ? user.reason : "Please write your reason"}</p>
        </div>
      </div>
      <div className="shared">
        <img className="icon" src={"/assets/shared-icon.png"} alt="smoke-free" />
      </div>
    </div>
  );
}
