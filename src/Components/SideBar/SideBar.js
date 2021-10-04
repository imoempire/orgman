import React from 'react';
import { NavLink } from 'react-router-dom';


const SideBar = () => {

    return (
        
        <>
            <aside class="menu">
                <p class="menu-label">
                    General
                </p>
                <ul class="menu-list">
                    <li><NavLink  to="/" >Home</NavLink></li>
                </ul>
                <p class="menu-label">
                    DASHBOARD
                </p>
                <ul class="menu-list">
                    <li>
                        <a class="is-active has-background-primary">Manage Your Team</a>
                        <ul>
                            <li><a>Members</a></li>
                            <li><a>Add a member</a></li>
                        </ul>
                    </li>
                </ul>
                <p class="menu-label">
                    Record
                </p>
                <ul class="menu-list">
                    <li><NavLink to="/note">Notes</NavLink></li>
                </ul>
            </aside>
        </>
        
    );
}

export default SideBar;
