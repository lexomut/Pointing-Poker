import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import {
    DemoGameCards,
    Footer,
    Header,
    DemoUserCards,
    IssueCard,
    IssueButton,
    Switch,
} from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (

            <Header />
            <main className={styles.content}>
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
              
                <Button color="primary" variant="contained" onClick={() => alert('Put logic here')}>
                    start game
                </Button>
                <Button color="primary" variant="outlined" onClick={() => alert('Put logic here')}>
                    cancel game
                </Button>
                <IssueButton />
                <DemoGameCards />
                <DemoUserCards />
                <IssueCard name="Issue 234" priority="High" dealer />
                <IssueCard current name="Issue 235" priority="Low" />
                <Switch label="Scrum master as player:" />
              
            </main>
            <Footer />
        </>
    );
};

export default App;
