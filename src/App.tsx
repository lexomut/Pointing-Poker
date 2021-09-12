import React, { useReducer } from 'react';

import { Footer } from './components';
import { Context, initState } from './state/Context';
import { reducer } from './state/reduser';
import styles from './style.module.scss';
import { Temp } from './temp';

const App: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <Context.Provider value={{ dispatch, state }}>
            <div className={styles.container}>
                <Temp />
                <Footer />
            </div>
        </Context.Provider>
    );
};

export default App;
