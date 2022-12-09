import useLocalStorage from "use-local-storage";
import Home from "../../routes/home";
import Calendar from "./calendar";
import NameForm from "./nameForm";
import Spend from "./spend";
import Reason from "./reason";
import {generateUUID} from "../../lib/utils.js";
import * as userService from "../../lib/services/user.service.js";

const CreateForm = () => {
  const [form, setForm] = useLocalStorage("user", {
    id: generateUUID(),
    step: 1,
    uname: "name",
    age: 20,
    lastTimeVape: "",
    spendMoney: 100,
    eCigaretteSaved: 1,
    isSubmit: false,
    imageUrl: "/src/assets/profile.png",
    reason: "reason",
    showStatus: true,
    showGoal: true,
  });

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
            prevStep={prevStep}
            nextStep={nextStep}
            form={form}
            setForm={setForm}
            question="When was the last time you vaped?"
          />
        );
      case 4:
        return (
          <Reason
            isSubmit={true}
            prevStep={prevStep}
            form={form}
            setForm={setForm}
            question="Why do you want to quit?"
          />
        );
      default:
        <NameForm nextStep={nextStep} />;
    }
  };
  if (form.isSubmit) {
    userService.setup();
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
