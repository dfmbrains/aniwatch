import React from 'react';
import "./header.scss";
import {NavLink, Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">

            <div className="container">

                <nav className="navbar">

                    <div className="navbar__left">

                        <h2 className="navbar__title">AnimeWatch</h2>

                        <div className="navbar__links">
                            <Link to="/">Home</Link>
                            <Link to="/list">List anime</Link>
                        </div>

                    </div>

                    <div className="navbar__search">
                        <input placeholder="Search anime or movie" type="text"/>
                    </div>

                </nav>

            </div>

        </header>
    );
};

export default Header;