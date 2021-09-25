import { Button } from '@material-ui/core';
import React, { Dispatch, useContext } from 'react';
import { createGame } from '../../api/server';
import { GlobalContext } from '../../state/Context';
import { Game } from '../../types/game';
import { Action } from '../../types/GlobalState';
import styles from './NewSession.module.scss';
import { INIT_GAME } from '../../state/ActionTypesConstants';

interface NewSessionProps {
    setOpen: (value: React.SetStateAction<boolean>) => void;
    setIsDealer: (value: React.SetStateAction<boolean>) => void;
}

export const NewSession: React.FC<NewSessionProps> = ({ setOpen, setIsDealer }) => {
    const { dispatch }: { dispatch: Dispatch<Action> } = useContext(GlobalContext);
    const startGame = async () => {
        const game: Game | undefined = await createGame();
        if (!game) return;
        dispatch({ type: INIT_GAME, payLoad: game });
        setOpen(true);
        setIsDealer(true);
    };

    return (
        <div className={styles.new_session}>
            <p>Create session:</p>
            <Button color="primary" variant="contained" onClick={startGame}>
                Start new game
            </Button>
        </div>
    );
};
