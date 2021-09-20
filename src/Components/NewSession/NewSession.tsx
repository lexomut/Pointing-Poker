import { Button } from '@material-ui/core';
import React from 'react';
import { createGame } from '../../api/server';
import styles from './NewSession.module.scss';
import { Game } from '../../../../MATCH/lexomut-JSFE2021Q1/match-match-game/src/components/game/game';

interface NewSessionProps {
    setOpen: (value: React.SetStateAction<boolean>) => void;
    setIsDealer: (value: React.SetStateAction<boolean>) => void;
}

export const NewSession: React.FC<NewSessionProps> = ({ setOpen, setIsDealer }) => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const startGame = async () => {
        const game: Game | false = createGame();
        if (!game) return
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
