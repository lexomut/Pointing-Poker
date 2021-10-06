import React, { Dispatch, useContext } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Paper } from '@material-ui/core';
import { GameCard } from '../GameCards';
import { Action, GlobalState, PopupType } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SET_POPUP } from '../../state/ActionTypesConstants';
import styles from './CardField.module.scss';
import { fibonacciDeck, powersOfTwoDeck } from '../../shared/data';

export const CardField = (): JSX.Element => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const { cards } = globalState.temporaryDialerSettings;
    const { shortScoreType, cardsDeckType } = globalState.temporaryDialerSettings.gameSettings;
    let visibleCards;
    switch (cardsDeckType) {
        case 'fibonacci':
            visibleCards = fibonacciDeck;
            break;
        case 'powersOfTwo':
            visibleCards = powersOfTwoDeck;
            break;
        case 'custom':
            visibleCards = cards;
            break;
        default:
            visibleCards = fibonacciDeck;
    }
    return (
        <div className={styles.cards__cardField}>
            {visibleCards.map(({ value, id }) => {
                return (
                    <GameCard
                        value={value}
                        scoreType={shortScoreType || ''}
                        isEditable={cardsDeckType === 'custom'}
                        key={id}
                        isActiveCard={false}
                        id={id}
                    />
                );
            })}
            {cardsDeckType === 'custom' && (
                <div
                    role="presentation"
                    onClick={() =>
                        dispatch({ type: SET_POPUP, payLoad: 'createCard' as PopupType })
                    }
                >
                    <Paper elevation={3} className={styles.card}>
                        <AddCircleOutlineIcon className={styles.plus} />
                    </Paper>
                </div>
            )}
        </div>
    );
};
