import React from 'react';
import { State as GlobalState } from '../types/State';
import { Action } from './reduser';

export const initState = { chatMessages: [] };
export const Context = React.createContext<{ state: GlobalState; dispatch: (arg: Action) => void }>(
    {
        state: initState,
        dispatch: () => {},
    },
);
