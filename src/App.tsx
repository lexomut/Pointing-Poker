import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import MainPage from './pages/MainPage/MainPage';

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
    return (
        <>
            <MuiThemeProvider theme={theme}>
                <Header />
                <main className={styles.content}>
                    <Switch>
                        <Route exact path="/">
                            <MainPage />
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
                            <Invitation />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </MuiThemeProvider>
        </>
    );
};

export default App;
