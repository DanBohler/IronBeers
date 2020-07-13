import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return(
        <div className="home-styles">
            <ul className="nav-links">
                <li><Link to='/beers'>All Beers</Link></li>
                <li><Link to='/random-beer'>Random Beer</Link></li>
                <li><Link to='/new-beer'>New Beer</Link></li>
            </ul>
        </div>
    )
}

export default home;