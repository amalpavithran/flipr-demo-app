import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './App';
import TeamMaker from './components/TeamMaker/TeamMaker';
import ChooseCaptain from './components/ChooseCaptain/ChooseCaptain';
import StartMatch from './components/StartMatch/StartMatch';
import Login from './components/Login/Login'
const createRoutes = () => (
    <Router>
        <Switch>
        <Route exact path="/teammaker" component={TeamMaker} />
        <Route exact path="/chooseCaptain" component={ChooseCaptain} />
        <Route exact path="/startMatch" component={StartMatch} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={App} />
        </Switch>
    </Router>

);
export default createRoutes;