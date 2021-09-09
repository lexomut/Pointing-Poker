import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import './App.css';
import Lobby from './pages/Lobby/Lobby';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route path="/lobby" component={Lobby} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
