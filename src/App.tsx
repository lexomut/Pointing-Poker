import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Switch>
                <Route exact path="/">
                    Main
                    <Button>pointing-poker</Button>
                    <ThreeDRotation />
                </Route>
                <Route exact path="/lobby">
                    Lobby
                </Route>
                <Route exact path="/settings">
                    Settings for dealer
                </Route>
                <Route exact path="/game">
                    Game
                </Route>
                <Route exact path="*">
                    404
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
