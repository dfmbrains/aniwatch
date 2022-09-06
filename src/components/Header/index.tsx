import React from 'react';
import "./header.scss";
import {NavLink, useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const navigateList = ()=>{
        if (location.pathname !== "/list"){
            navigate("/list")
        }
    };

    return (
        <header className="header">

            <div className="container">

                <nav className="navbar">

                    <div className="navbar__left">

                        <h2 className="navbar__title">AnimeWatch</h2>

                        <div className="navbar__links">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/list">List anime</NavLink>
                        </div>

                    </div>

                    <div className="navbar__search">
                        <input onChange={()=> navigateList()} placeholder="Search anime or movie" type="text"/>
                    </div>

                </nav>

            </div>

        </header>
    );
};

export default Header;