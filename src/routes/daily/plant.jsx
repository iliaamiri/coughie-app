import DisplayBar from "../../components/displayBar";
import PlantComponent from "../../components/plant";
import "./index.css";

const Plant = () => (
    <div>
        <DisplayBar name="Plant Progress"></DisplayBar>
      
        <div>
            <PlantComponent />
        </div>
    </div>
);

export default Plant;
