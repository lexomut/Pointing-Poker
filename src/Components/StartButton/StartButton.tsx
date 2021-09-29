import Button from '@material-ui/core/Button/Button';
import React, { Dispatch, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

export const StartButton: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const history = useHistory();

    const buttonHandler = async () => {
        const sendGameProperty = globalState.ws.provider?.changeValueOfGameProperty.bind(
            globalState.ws.provider,
        );
        if (!sendGameProperty) return;
        await sendGameProperty('gameSettings', globalState.game.gameSettings);
        await sendGameProperty('cards', globalState.game.cards);
        await sendGameProperty('status', 'going');
        history.push(`/${globalState.game.gameID}/game`);
    };

    return (
        <Button color="primary" variant="contained" onClick={buttonHandler}>
            start game
        </Button>
    );
};
