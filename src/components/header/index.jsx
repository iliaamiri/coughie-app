import { Link } from "preact-router/match";
import "./index.css";

const Header = () => (
  <header className="header">
    <nav>
      <ul>
        <li>
          <Link className="nav-link" activeClassName="active" href="/home">
            <img src="../../../public/home.svg" alt="Home" />
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" href="/tutorial">
            Tutorial
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            activeClassName="active"
            href="/daily/checkin"
          >
            Check In
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            activeClassName="active"
            href="/daily/plant"
          >
            Plant
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            activeClassName="active"
            href="/achievement"
          >
            Achievement
          </Link>
        </li>
        <li>
          <Link className="nav-link" activeClassName="active" href="/tracker">
            Tracker
          </Link>
        </li>
        <li>
          <Link
            className="nav-link"
            activeClassName="active"
            href="/communities"
          >
            Communities
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
