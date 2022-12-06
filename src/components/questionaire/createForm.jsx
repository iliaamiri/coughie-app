import useLocalStorage from "use-local-storage";
import Home from "../../routes/home";
import Calendar from "./calendar";
import NameForm from "./nameForm";
import Spend from "./spend";

const CreateForm = () => {
  const [form, setForm] = useLocalStorage("user", {
    step: 1,
    uname: "",
    age: "",
    lastTimeVape: "",
    spendMoney: "",
    eCigaretteSaved: 1,
    isSubmit: false,
  });
  const data = localStorage.getItem("user");

  const nextStep = () => {
    setForm({ ...form, step: form.step + 1 });
  };
  const prevStep = () => {
    setForm({ ...form, step: form.step - 1 });
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
            question1="How much money do you spend per week on vaping?"
            question2="How many ePod do you spend per week?"
          />
        );
      case 3:
        return (
          <Calendar
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
  if (form.isSubmit) {
    return (
      <>
        <Home />
      </>
    );
  } else {
    return <div>{renderSwitch(form.step)}</div>;
  }
};

export default CreateForm;
