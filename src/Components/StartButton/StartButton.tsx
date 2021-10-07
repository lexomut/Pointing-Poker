import Button from '@material-ui/core/Button/Button';
import React, { Dispatch, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { fibonacciDeck, powersOfTwoDeck } from '../../shared/data';
import { Card } from '../../types/game';
import { User } from '../../types/user';

export const StartButton: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const history = useHistory();
    let visibleCards: Card[] = [];
    switch (globalState.temporaryDialerSettings.gameSettings.cardsDeckType) {
        case 'fibonacci':
            visibleCards = fibonacciDeck;
            break;
        case 'powersOfTwo':
            visibleCards = powersOfTwoDeck;
            break;
        case 'custom':
            visibleCards = globalState.temporaryDialerSettings.cards;
            break;
        default:
            visibleCards = fibonacciDeck;
    }

    const buttonHandler = async () => {
        const sendGameProperty = globalState.ws.provider?.changeValueOfGameProperty.bind(
            globalState.ws.provider,
        );
        if (!sendGameProperty) return;
        await sendGameProperty('gameSettings', globalState.temporaryDialerSettings.gameSettings);
        await sendGameProperty('cards', visibleCards);
        await sendGameProperty(
            'selectedCards',
            globalState.game.users.map((user: User) => {
                return { card: undefined, user };
            }),
        );
        await sendGameProperty('status', 'pending');
        history.push(`/${globalState.game.gameID}/game`);
    };

    return (
        <Button
            disabled={!globalState.ws.status}
            color="primary"
            variant="contained"
            onClick={buttonHandler}
        >
            start game
        </Button>
    );
};
