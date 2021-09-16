import React from 'react';
import { GlobalState } from '../types/GlobalState';
import { initState } from './InitState';
import { Action } from './ActionTypes';

export const GlobalContext = React.createContext<{
    globalState: GlobalState;
    dispatch: (arg: Action) => void;
}>({
    globalState: initState,
    dispatch: () => {},
});
