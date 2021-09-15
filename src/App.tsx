import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Footer, Invitation } from './components';
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
                <Route path="/:id">
                    <Invitation />
                </Route>
            </Switch>
            <Footer />
        </div>
    );
};

export default App;
