import React, { useEffect, useReducer } from 'react';
import { Footer } from './components';
import { GlobalContext } from './state/Context';
import { initState } from './state/InitState';
import { reducer } from './state/reducer';
import { Temp } from './temp';
import { ADD_WS_PROVIDER_TO_GLOBAL_STATE } from './state/ActionTypes';
import styles from './style.module.scss';

const App: React.FC = () => {
    const [globalState, dispatch] = useReducer(reducer, initState);
    // useEffect для подключения к websocket, после выполнения инстанс класса WSProvider доступен из globalState
    useEffect(() => {
        dispatch({ type: ADD_WS_PROVIDER_TO_GLOBAL_STATE, payLoad: dispatch });
    }, []);

    return (
        <GlobalContext.Provider value={{ dispatch, globalState }}>
            <div className={styles.container}>
                <Temp />
                <Footer />
            </div>
        </GlobalContext.Provider>
    );
};

export default App;
