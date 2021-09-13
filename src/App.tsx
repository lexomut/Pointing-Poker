import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './pages/Game/Game';
import Lobby from './pages/Lobby/Lobby';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Lobby} />
                    <Route path="/lobby" component={Lobby} />
                    <Route path="/game" component={Game} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
