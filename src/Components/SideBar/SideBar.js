import React from 'react';
import { SideBarData } from './SideBarData';


const SideBar = () => {
    return (
        <div className="sidebar">
           <ul>
           {SideBarData.map((tab, key)=>{
                return (
                <li key={key}>
                    <div>{tab.Tab}</div>
                </li>
                )
                
            })}
           </ul>
        </div>
    );
}

export default SideBar;
