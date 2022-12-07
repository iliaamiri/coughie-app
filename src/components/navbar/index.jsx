import {Link} from 'preact-router'
import "./index.css";

export default function Navbar() {

    const backHandler = () => {
        window.history.back();
    };

    return (
        <nav className={'bottom-navbar'}>
            <ul>
                <li>
                    <Link className="nav-link" onClick={backHandler}>
                        <img className='navButton' src="/src/assets/previous.png" alt="previous"/>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/home">
                        <img className='navButton' src="/home.svg" alt="Home"/>
                    </Link>
                </li>
                <li>
                    <Link className="nav-link" href="/user">
                        <img className='navButton user' src="/src/assets/user.png" alt="user profile"/>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
