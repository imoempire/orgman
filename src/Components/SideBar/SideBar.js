import React from 'react';
import { NavLink } from 'react-router-dom';


const SideBar = () => {

    return (
        
        <>
            <aside class="menu">
                <p class="menu-label">
                    HOME
                </p>
                <ul class="menu-list">
                    <li><NavLink  to="/" >List-Note</NavLink></li>
                </ul>
                <p class="menu-label">
                    DASHBOARD
                </p>
                <ul class="menu-list">
                    <li>
                        <a class="is-active has-background-primary">Manage Your Team</a>
                        <ul>
                            <li><NavLink to='/member'>Members</NavLink></li>
                            <li><NavLink to='/members'>Add a member</NavLink></li>
                        </ul>
                    </li>
                </ul>

            </aside>
        </>
        
    );
}

export default SideBar;
