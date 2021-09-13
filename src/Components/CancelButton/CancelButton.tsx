import React from 'react';
import { useHistory } from 'react-router-dom';

const CancelButton = () => {
    const history = useHistory();

    const buttonHandler = () => {
        history.push('/');
    };

    return (
        <button onClick={buttonHandler} type="button">
            Cancel Game
        </button>
    );
};

export default CancelButton;
