import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
        <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">All Cards</Link>
          </li>
          <li>
            <Link to="mydeck">My Deck</Link>
          </li>
        </ul>
      </nav>
    </div>

    )
}
export default Navbar;