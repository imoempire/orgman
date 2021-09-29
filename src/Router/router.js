
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App'
import Navbar from '../Components/Navbar/Navbar';
import { SideBarData } from '../Components/SideBar/SideBarData';

const router = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <SideBarData/>
            <Switch>
                <Route exact path="/" component={App} />
                {/* <Route path='' component={} /> */}
                {/* <Route path='' component={} /> */}
                {/* <Route path='' component={} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default router;
