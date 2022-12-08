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

  console.log(user)
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
            <Link href="/achievement">
              <img src="/src/assets/SVG/trophy.svg" alt="" />
            </Link>
          </div>
          <p>Achievements</p>
        </div>
        <div>
          <div>
            <Link href="/tracker">
              <img src="/src/assets/verified.png" alt="" />
            </Link>
          </div>
          <p>Self progress</p>
        </div>
        <div>
          <div>
            <Link href="/communities">
              <img src="/src/assets/SVG/community.svg" alt="" />
            </Link>
          </div>
          <p>Community</p>
        </div>
        <div>
          <div>
            <Link href="/daily/checkin">
              <img id="check" src="/src/assets/check.png" alt="" />
            </Link>
          </div>
          <p>Daily Check-in</p>
        </div>
      </div>

      <RememberDialogue dialogue={user.reason}></RememberDialogue>
      <div>
        <img class="click-icon" src="/src/assets/SVG/SVG/handpointing.svg" alt="click icon" />
      <Link href="/daily/plant">
        <img id="plant" src="/src/assets/SVG/floweredPlant.svg" alt="flowering Plant" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
