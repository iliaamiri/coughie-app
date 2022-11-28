import RememberDialogue from "../../components/rememberDialogue";
import DisplayBar from "../../components/displayBar";
import "./index.css";

const Home = () => (
  <div 
  // className="home-div"
  >
    {/* <CreateForm /> */}

    <DisplayBar name="Your Home" />

    <div className="homeMenu">
      <div >
        <div>
      <img src="src/assets/SVG/trophy.svg" alt="" />
      </div>
      <p>achievements</p>
      </div>
      <div>
        <div>
      <img  src="src/assets/SVG/plant.svg" alt="" />
      </div>
      <p>plant progress</p>
      </div>
      <div>
        <div >
      <img src="src/assets/SVG/community.svg" alt="" />
      </div>
      <p>join a community</p>
      </div>
      <div>
        <div>
      <img id="check" src="src/assets/check.png" alt="" />
      </div>
      <p>self progress</p>
      </div>
   
    </div>

    <RememberDialogue dialogue="I want to quit so I can use my money on more meaningful things"></RememberDialogue>
    <div>
      <img id="plant" src="src/assets/SVG/floweredPlant.svg" alt="" />
    </div>
  </div>
);

export default Home;
