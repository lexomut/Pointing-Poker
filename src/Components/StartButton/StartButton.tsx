import Button from '@material-ui/core/Button/Button';
import React from 'react';
import { useHistory } from 'react-router-dom';

export const StartButton: () => JSX.Element = () => {
    const history = useHistory();

    const buttonHandler = () => {
        history.push('/game');
    };

    return (
        <Button color="primary" variant="contained" onClick={buttonHandler}>
            start game
        </Button>
    );
};
