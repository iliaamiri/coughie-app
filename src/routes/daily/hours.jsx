import DisplayBar from "../../components/displayBar";
import CheckinButtons from "../../components/checkinButtons";
const Hours = () => (

  <div>
    <DisplayBar name="Daily Check-In"></DisplayBar>
   <CheckinButtons question="How many hours were you vape free today?" range={true}/>
  </div>

);

export default Hours;
 