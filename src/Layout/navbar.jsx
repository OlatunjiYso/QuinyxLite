import React from 'react';

import Logo from './Logo';

const Navbar = () => (
    <div className="app-nav">
        <div className="logo-group">
            <span className="logo"><Logo /></span>
            <span className="logo-name"> QuinyxLite </span>
        </div>
        <ul className="nav-items">
            <li>Solutions</li>
            <li>Customers</li>
            <li>About</li>
            <li>Join</li>
        </ul>
    </div>
);



export default Navbar;