
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import App from '../App';
import TodoLists from '../Components/Todo/TodoLists';
import MemberApp from '../Components/Notes/MemberApp';
import MemberList from '../Components/Notes/MemberList';


const router = () => {
    return (

        <BrowserRouter>
               
        <Navbar/>

        <div class="columns is-variable is-0">
        <div>
        <div class="side-container">
        <div className="menu-wrapper py-1">
           <App />
        </div>
        </div>
        </div>

        <div class="column nav">
          <div className="nav">
            <Switch>
                <Route exact path="/" component={TodoLists} />
                <Route exact path="/members" component={MemberApp} />
                <Route exact path="/member" component={MemberList} />
            </Switch>
          </div>
          </div>
         </div>

        </BrowserRouter>
    );
}

export default router;
