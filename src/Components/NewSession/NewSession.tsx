import { Button } from '@material-ui/core';
import React, { Dispatch, useContext, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createGame } from '../../api/server';
import { GlobalContext } from '../../state/Context';
import { Game } from '../../types/game';
import { Action } from '../../types/GlobalState';
import { INIT_GAME } from '../../state/ActionTypesConstants';

import styles from './NewSession.module.scss';

interface NewSessionProps {
    setOpen: (value: React.SetStateAction<boolean>) => void;
    setIsDealer: (value: React.SetStateAction<boolean>) => void;
}

export const NewSession: React.FC<NewSessionProps> = ({ setOpen, setIsDealer }) => {
    const { dispatch }: { dispatch: Dispatch<Action> } = useContext(GlobalContext);
    const [isConnecting, setIsConnecting] = useState(false);
    const startGame = async () => {
        setIsConnecting(true);
        const game: Game | undefined = await createGame();
        setIsConnecting(false);
        if (!game) return;
        dispatch({ type: INIT_GAME, payLoad: game });
        setOpen(true);
        setIsDealer(true);
    };

    return (
        <div className={styles.new_session}>
            <p>Create session:</p>
            <Button color="primary" variant="contained" onClick={startGame} disabled={isConnecting}>
                {isConnecting ? <CircularProgress /> : 'Start new game'}
            </Button>
        </div>
    );
};
