import React, { Dispatch, useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { Footer, Header, Invitation, Chat } from './components';
import { GlobalContext } from './state/Context';
import { initState } from './state/InitState';
import { reducer } from './state/reducer';
import { Action, GlobalState } from './types/GlobalState';
import { MainPage } from './pages/MainPage';
import { WSProvider } from './api/WSProvider';
import { ADD_WS_PROVIDER_TO_GLOBAL_STATE } from './state/ActionTypesConstants';

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

export const App: React.FC = () => {
    const [globalState, dispatch]: [GlobalState, Dispatch<Action>] = useReducer(reducer, initState);
    useEffect(() => {
        const provider = new WSProvider(dispatch);
        dispatch({ type: ADD_WS_PROVIDER_TO_GLOBAL_STATE, payLoad: provider });
    }, [dispatch]);

    return (
        <>
            <GlobalContext.Provider value={{ dispatch, globalState }}>
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
                        {globalState.chatOpen && <Chat />}
                    </main>
                    <Footer />
                </MuiThemeProvider>
            </GlobalContext.Provider>
        </>
    );
};
