import DisplayBar from "../../components/displayBar";
import MyProgress from "../../components/myProgress";
import DisplayInput from "../../components/displayInput";

const Tracker = () => (
  <div>
    <DisplayBar name="My progress" />
    <DisplayInput />
    <MyProgress />
  </div>
);

export default Tracker;
