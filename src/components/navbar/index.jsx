import { useState } from 'preact/hooks'
import { Link } from 'preact-router'
import "./index.css";
export default function Navbar() {
 

  return (
    <>
      <footer>
      <nav>
      <ul>
        <li>
           <Link className="nav-link" href="javascript:window.history.back();" >
            <img className='navButton' src="src/assets/previous.png" alt="previous" />
          </Link>
        </li>  <li>
          <Link className="nav-link" href="/home">
            <img className='navButton' src="../../../public/home.svg" alt="Home" />
          </Link>
        </li>
        <li>
        <Link className="nav-link" href="/user">
            <img className='navButton user' src="src/assets/user.png" alt="user profile" />
          </Link>
        </li>
  
      </ul>
    </nav>
    </footer>
    </>
  )
}
