import Button from '@material-ui/core/Button/Button';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

export const CancelButton: () => JSX.Element = () => {
    const history = useHistory();
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);

    const buttonHandler = () => {
        globalState.ws.provider?.changeValueOfGameProperty('status', 'canceled');
        history.push('/');
    };

    return (
        <Button
            disabled={!globalState.ws.status}
            color="primary"
            variant="outlined"
            onClick={buttonHandler}
        >
            cancel game
        </Button>
    );
};
