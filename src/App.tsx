import React, { Dispatch, useEffect, useReducer } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from '@material-ui/core';
import {
    Footer,
    DemoGameCards,
    Header,
    DemoUserCards,
    IssueCard,
    IssueButton,
    Switch as Switcher,
    Invitation,
} from './components';
import { GlobalContext } from './state/Context';
import { initState } from './state/InitState';
import { reducer } from './state/reducer';
import { Temp } from './temp';
import { ADD_WS_PROVIDER_TO_GLOBAL_STATE } from './state/ActionTypesConstants';
import styles from './style.module.scss';
import { Action, GlobalState } from './types/GlobalState';
import { WSProvider } from './api/WSProvider';

const App: React.FC = () => {
    const [globalState, dispatch]: [GlobalState, Dispatch<Action>] = useReducer(reducer, initState);
    // useEffect для подключения к websocket, после выполнения инстанс класса WSProvider доступен из globalState
    useEffect(() => {
        const provider = new WSProvider(globalState, dispatch);
        dispatch({ type: ADD_WS_PROVIDER_TO_GLOBAL_STATE, payLoad: provider });
        globalState.ws.provider?.connection();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <GlobalContext.Provider value={{ dispatch, globalState }}>
                <Header />
                <main className={styles.content}>
                    <Switch>
                        <Route exact path="/">
                            <Temp />
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
                            <Invitation />
                        </Route>
                    </Switch>
                </main>
                <Footer />
            </GlobalContext.Provider>
        </>
    );
};

export default App;
