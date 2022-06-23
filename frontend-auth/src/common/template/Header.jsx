import React from "react";
import Navbar from './navbar.jsx';

export default props => (
    <header className="main-header">
        <a href="/#/" className="logo">
            <span className="logo.mini"><b>My</b>M</span>
            <span className="log-lg">
                <i className="fa fa-money"></i>
                <b>My</b> Money
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href className="sidebar-toggle" data-toggle="offcanvas"></a>
            <Navbar/>
        </nav>
    </header>
)
