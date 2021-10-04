
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import App from '../App';
import TodoLists from '../Components/Todo/TodoLists';
import NotesLists from '../Components/Notes/NoteLists';


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
                <Route exact path="/note" component={NotesLists} />
            </Switch>
          </div>
          </div>
         </div>

        </BrowserRouter>
    );
}

export default router;
