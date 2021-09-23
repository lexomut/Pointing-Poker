import React, { Dispatch, useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { Chat, Footer, Header, Invitation } from './components';
import { GlobalContext } from './state/Context';
import { initState } from './state/InitState';
import { reducer } from './state/reducer';
// import { ADD_WS_PROVIDER_TO_GLOBAL_STATE } from './state/ActionTypesConstants';
import { Action, GlobalState } from './types/GlobalState';
// import { WSProvider } from './api/WSProvider';
import styles from './style.module.scss';
import { MainPage } from './pages/MainPage';

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
    const [globalState, dispatch]: [GlobalState, Dispatch<Action>] = useReducer(reducer, initState);
    // // useEffect для подключения к websocket, после выполнения инстанс класса WSProvider доступен из globalState
    // useEffect(() => {
    //     const provider = new WSProvider(globalState, dispatch);
    //     dispatch({ type: ADD_WS_PROVIDER_TO_GLOBAL_STATE, payLoad: provider });
    //     globalState.ws.provider?.connects();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    return (
        <>
            <GlobalContext.Provider value={{ dispatch, globalState }}>
                <MuiThemeProvider theme={theme}>
                    <Header />
                    <main className={styles.content}>
                        <Router>
                            <Switch>
                                <Route exact path="/lobby">
                                    Main
                                    <Chat />
                                </Route>
                                <Route path="/:id">
                                    <Invitation />
                                </Route>
                                <Route path="/">
                                    <MainPage />
                                </Route>
                            </Switch>
                        </Router>
                    </main>
                    <Footer />
                </MuiThemeProvider>
            </GlobalContext.Provider>
        </>
    );
};

export default App;
