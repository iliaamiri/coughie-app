import { useState } from "preact/hooks";
import useLocalStorage from "use-local-storage";
import MyButton from "../../components/button";
import CreateForm from "../../components/questionaire/createForm";
import "./index.css";

export default function Questionnaire() {
  const data = localStorage.getItem("user");
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  if (isClicked && !data?.isSubmit) {
    return <CreateForm />;
  }
  return (
    <div className="questionaire">
      <div>
        <div>
          <img src="/src/assets/main.png" alt="main" />
        </div>
        <h1>Coughie</h1>
        <p>"the secret to getting ahead is getting started"</p>
      </div>
      <MyButton text="START" onClick={clickHandler} />
    </div>
  );
}
