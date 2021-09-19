import React from 'react';
import { useHistory } from 'react-router-dom';

export const StartButton: () => JSX.Element = () => {
    const history = useHistory();

    const buttonHandler = () => {
        history.push('/game');
    };

    return (
        <button type="button" onClick={buttonHandler}>
            Start Game
        </button>
    );
};
