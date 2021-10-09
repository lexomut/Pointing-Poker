import React, { Dispatch, useContext } from 'react';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';
import styles from './gameCard.module.scss';
import { SET_GAME_TEMP_SETTINGS } from '../../state/ActionTypesConstants';
import { GlobalContext } from '../../state/Context';
import { Action, GlobalState } from '../../types/GlobalState';

type Props = {
    back: string;
    activeCard: boolean;
};
export const CardBack = (props: Props): JSX.Element => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);

    const { back, activeCard } = props;
    const handler = () => {
        dispatch({
            type: SET_GAME_TEMP_SETTINGS,
            payLoad: {
                property: 'gameSettings',
                value: {
                    ...globalState.temporaryDialerSettings.gameSettings,
                    cardsBackClass: back,
                },
            },
        });
    };
    return (
        <div className={activeCard ? styles.current : ''}>
            <Paper
                onClick={() => handler()}
                elevation={3}
                className={clsx(styles.card, styles[back])}
            />
        </div>
    );
};
