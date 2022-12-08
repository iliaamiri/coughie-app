import DisplayBar from "../../components/displayBar";
import CheckinButtons from "../../components/checkinButtons";
const MoneySpent = () => (

  <div>
    <DisplayBar name="Daily Check-In"></DisplayBar>
   <CheckinButtons question="Did you spend money to vape today?" range={false} money={true}/>
  </div>

);

export default MoneySpent;