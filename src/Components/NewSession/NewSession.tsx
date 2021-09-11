import React from 'react';
import { createGame } from '../../api/server';
import styles from './NewSession.module.css';

interface NewSessionProps {
    setOpen: (value: React.SetStateAction<boolean>) => void;
}

const NewSession: React.FC<NewSessionProps> = ({ setOpen }) => {
    const startGame = () => {
        setOpen(true);
        createGame();
    };

    return (
        <div className={styles.new_session}>
            <p>Create session:</p>
            <button type="button" onClick={startGame}>
                start new game
            </button>
        </div>
    );
};

export default NewSession;
