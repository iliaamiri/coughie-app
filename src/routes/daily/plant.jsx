import DisplayBar from "../../components/displayBar";
import "./index.css";

const Plant = () => (
  <div>
    <DisplayBar name="Plant Progress"></DisplayBar>
    <div className="oxygenLevels">
      <img src="/assets/coca-leaves.png" alt="" />
      <span>
      10 O2
      </span></div>
  <div >
    <div>
    <h2 className={'daily-checkin-title'}>Day 1</h2>
   
      <img id="plantProgress" src="/src/assets/SVG/SVG/plantProgress.svg" alt="" />
      </div>
      </div>
  </div>
);

export default Plant;
