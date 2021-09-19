import { Button } from '@material-ui/core';
import React from 'react';
import { createGame } from '../../api/server';
import styles from './NewSession.module.scss';

interface NewSessionProps {
    setOpen: (value: React.SetStateAction<boolean>) => void;
}

export const NewSession: React.FC<NewSessionProps> = ({ setOpen }) => {
    const startGame = () => {
        setOpen(true);
        createGame();
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
