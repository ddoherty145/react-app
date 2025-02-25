import React from 'react';
import './Title.css';
import { NavLink } from 'react-router-dom';

function Title() {
    return (
        <div className="Title">
            <header>
                <h1>SFPOPOS</h1>         
                <div className="Title-Subtitle">
                    San Francisco's Privately Owned Public Spaces
                </div>
                <nav>
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"} 
                        end
                    >
                        List
                    </NavLink>
                    <NavLink 
                        to="/about" 
                        className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}
                    >
                        About
                    </NavLink>
                </nav>
            </header>
        </div>
    );
}

export default Title;
