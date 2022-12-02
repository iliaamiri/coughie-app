import { useState } from "preact/hooks";
import MyButton from "../../components/button";
import CreateForm from "../../components/questionaire/createForm";
export default function Questionaire() {
  const [isClicked, setIsClicked] = useState(false);
  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  if (isClicked) {
    return <CreateForm />;
  }
  return (
    <div>
      <div>
        <h1>Coughie</h1>
        <p>"the secret to getting ahead is getting started"</p>
      </div>
      <MyButton text="START" onClick={clickHandler} />
    </div>
  );
}