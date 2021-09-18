import React from 'react';
import { Route, Switch, useLocation, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Button, createTheme, MuiThemeProvider } from '@material-ui/core';
import {
    DemoGameCards,
    Footer,
    Header,
    DemoUserCards,
    IssueCard,
    IssueButton,
    Switch as Switcher,
    Invitation,
} from './components';
import styles from './style.module.scss';

const theme = createTheme({
    palette: {
        primary: {
            light: '#428e92',
            main: '#006064',
            dark: '#00363a',
        },
        secondary: {
            light: '#dbffff',
            main: '#a7ffeb',
            dark: '#75ccb9',
        },
    },
});

const App: React.FC = () => {
    const location = useLocation();
    return (
        <>
            <MuiThemeProvider theme={theme}>
                <Header />
                <main className={styles.content}>
                    <TransitionGroup>
                        <CSSTransition
                            timeout={300}
                            classNames={{
                                enter: styles.myNodeEnter,
                                enterActive: styles.myNodeEnterActive,
                                exit: styles.myNodeExit,
                                exitActive: styles.myNodeExitActive,
                            }}
                            key={location.pathname}
                        >
                            <Switch>
                                <Route exact path="/">
                                    <Link to="/ksalkdal">Link to invitation</Link>
                                    Main
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        onClick={() => alert('Put logic here')}
                                    >
                                        start game
                                    </Button>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        onClick={() => alert('Put logic here')}
                                    >
                                        cancel game
                                    </Button>
                                    <IssueButton />
                                    <DemoGameCards />
                                    <DemoUserCards />
                                    <IssueCard name="Issue 234" priority="High" dealer />
                                    <IssueCard current name="Issue 235" priority="Low" />
                                    <Switcher label="Scrum master as player:" />
                                </Route>
                                <Route path="/:id">
                                    <Link to="/">Link to main</Link>
                                    <Invitation />
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </main>
                <Footer />
            </MuiThemeProvider>
        </>
    );
};

export default App;
