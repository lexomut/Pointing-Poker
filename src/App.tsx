import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { Footer, Header, Invitation } from './components';
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
