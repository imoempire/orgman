
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Nav from '../Components/Nav'
import Todo from '../Components/Todo/Todo';
import Meet from '.././Meet/Meet';
// import InnerBar from '../Components/InnerBar';
import Navbar from '../Components/Navbar/Navbar';
// import SideBar from '../Components/SideBar/SideBar';
import App from '../App';

const router = () => {
    return (
        <BrowserRouter>
               
        <Navbar/>
        <div class="columns is-variable is-0">
        <div>
        <div class="side-container">
        <div className="menu-wrapper py-1">
         <App/>
          </div>
        </div>
        </div>

        <div class="column nav">
          <div className="nav">
            <Switch>
                <Route exact path="/" component={Todo} />
                <Route exact path="/meet" component={Meet} />
            </Switch>
          </div>
          </div>

      </div>






        </BrowserRouter>
    );
}

export default router;
