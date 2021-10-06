import React from 'react';
import { Action, GlobalState } from '../types/GlobalState';
import { initState } from './InitState';

export const GlobalContext = React.createContext<{
    globalState: GlobalState;
    dispatch: (arg: Action) => void;
}>({
    globalState: initState,
    dispatch: () => {},
});
