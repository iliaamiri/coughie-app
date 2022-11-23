import { useState } from "preact/hooks";
import Calendar from "./calendar";
import NameForm from "./nameForm";
import Spend from "./spend";
const CreateForm = () => {
  const [form, setForm] = useState({
    step: 1,
    name: "",
    age: "",
    lastTime: "",
    money: "",
    quitTime: "",
  });
  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };
  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };
  const handleChange = input => e => {
    setForm({ ...form, [input]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };
  const renderSwitch = step => {
    switch (step) {
      case 1:
        return <NameForm nextStep={nextStep} handleChange={handleChange} />;
      case 2:
        return (
          <Calendar
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            question="When was the last time you vaped?"
          />
        );
      case 3:
        return (
          <Spend
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
            question="How much money do you spend per week on vaping?"
          />
        );
      case 4:
        return (
          <Calendar
            nextStep={handleSubmit}
            isSubmit={true}
            prevStep={prevStep}
            handleChange={handleChange}
            question="When was the last time you vaped?"
          />
        );
      default:
        <NameForm nextStep={nextStep} handleChange={handleChange} />;
    }
  };

  return <div>{renderSwitch(form.step)}</div>;
};

export default CreateForm;
