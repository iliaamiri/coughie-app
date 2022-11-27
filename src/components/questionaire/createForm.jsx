import { useState } from "preact/hooks";
import Calendar from "./calendar";
import NameForm from "./nameForm";
import Spend from "./spend";
const CreateForm = () => {
  const [form, setForm] = useState({
    step: 1,
    name: "",
    age: "",
    lastTimeVape: "",
    spendMoney: "",
  });
  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };
  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
  };
  const handleSubmit = () => {
    console.log(form);
  };
  const renderSwitch = step => {
    switch (step) {
      case 1:
        return <NameForm nextStep={nextStep} form={form} setForm={setForm} />;
      case 2:
        return (
          <Spend
            form={form}
            setForm={setForm}
            nextStep={nextStep}
            prevStep={prevStep}
            question="How much money do you spend per week on vaping?"
          />
        );
      case 3:
        return (
          <Calendar
            nextStep={handleSubmit}
            isSubmit={true}
            prevStep={prevStep}
            form={form}
            setForm={setForm}
            question="When was the last time you vaped?"
          />
        );
      default:
        <NameForm nextStep={nextStep} />;
    }
  };

  return <div>{renderSwitch(form.step)}</div>;
};

export default CreateForm;
