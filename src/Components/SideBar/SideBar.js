import React from 'react';
import { SideBarData } from './SideBarData';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    return (
        <div className="sidebar">
           <ul>
           {SideBarData.map((tab, key)=>{
                return (
                <li key={key}>
                    <NavLink to={tab.Link}>
                        <div>{tab.Tab}</div>
                    </NavLink>
                </li>
                )
                
            })}
           </ul>
        </div>
    );
}

export default SideBar;
