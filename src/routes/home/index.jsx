import RememberDialogue from "../../components/rememberDialogue";
import DisplayBar from "../../components/displayBar";
import "./index.css";
import { Link } from "preact-router/match";
import useLocalStorage from "use-local-storage";

const Home = () => {
  const [form, setForm] = useLocalStorage("user", {
    step: 1,
    name: "",
    age: "",
    lastTimeVape: "",
    spendMoney: "",
  });
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div>
      <DisplayBar name="Your Home" />

      <div className="homeMenu">
        <div>
          <div>
            <Link href="/achievement">
              <img src="src/assets/SVG/trophy.svg" alt="" />
            </Link>
          </div>
          <p>achievements</p>
        </div>
        <div>
          <div>
            <Link href="/daily/plant">
              <img src="src/assets/SVG/plant.svg" alt="" />
            </Link>
          </div>
          <p>plant progress</p>
        </div>
        <div>
          <div>
            <Link href="/community">
              <img src="src/assets/SVG/community.svg" alt="" />
            </Link>
          </div>
          <p>join a community</p>
        </div>
        <div>
          <div>
            <Link href="/daily/checkin">
              <img id="check" src="src/assets/check.png" alt="" />
            </Link>
          </div>
          <p>self progress</p>
        </div>
      </div>

      <RememberDialogue dialogue="I want to quit so I can use my money on more meaningful things"></RememberDialogue>
      <div>
        <img id="plant" src="../../src/assets/SVG/floweredPlant.svg" alt="" />
      </div>
    </div>
  );
};

export default Home;
