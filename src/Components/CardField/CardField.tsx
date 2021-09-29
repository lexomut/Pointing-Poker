import React, { Dispatch, useContext } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Paper } from '@material-ui/core';
import { GameCard } from '../GameCards';

import { Action, GlobalState, PopupType } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SET_POPUP } from '../../state/ActionTypesConstants';
import styles from './CardField.module.scss';

export const CardField = (): JSX.Element => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const { cards } = globalState.game;
    const { scoreType } = globalState.game.gameSettings;
    return (
        <div className={styles.cards__cardField}>
            {cards.map(({ value, id }) => {
                return (
                    <GameCard
                        value={value}
                        scoreType={scoreType}
                        isEditable={false}
                        key={id}
                        isActiveCard={false}
                    />
                );
            })}
            <div
                role="presentation"
                onClick={() => dispatch({ type: SET_POPUP, payLoad: 'createCard' as PopupType })}
            >
                <Paper elevation={3} className={styles.card}>
                    <AddCircleOutlineIcon className={styles.plus} />
                </Paper>
            </div>
        </div>
    );
};
