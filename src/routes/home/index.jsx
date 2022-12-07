import RememberDialogue from "../../components/rememberDialogue";
import DisplayBar from "../../components/displayBar";
import "./index.css";
import { Link } from "preact-router/match";
import { useState, useEffect } from "preact/hooks";

const Home = () => {
  const data = localStorage.getItem("user");
  const [user, setUser] = useState({
    step: 1,
    name: "",
    age: "",
    lastTimeVape: "",
    spendMoney: "",
    eCigaretteSaved: 1,
  });

  useEffect(() => {
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <DisplayBar name="Your Home" />

      <div className="homeMenu">
        <div>
          <div>
            <Link href="/tracker">
              <img src="/assets/SVG/trophy.svg" alt="" />
            </Link>
          </div>
          <p>achievements</p>
        </div>
        <div>
          <div>
            <Link href="/daily/plant">
              <img src="/assets/SVG/plant.svg" alt="" />
            </Link>
          </div>
          <p>plant progress</p>
        </div>
        <div>
          <div>
            <Link href="/communities">
              <img src="/assets/SVG/community.svg" alt="" />
            </Link>
          </div>
          <p>join a community</p>
        </div>
        <div>
          <div>
            <Link href="/daily/checkin">
              <img id="check" src="/assets/check.png" alt="" />
            </Link>
          </div>
          <p>self progress</p>
        </div>
      </div>

      <RememberDialogue dialogue="I want to quit so I can use my money on more meaningful things"></RememberDialogue>
      <div>
        <img id="plant" src="/assets/SVG/floweredPlant.svg" alt="" />
      </div>
    </div>
  );
};

export default Home;
