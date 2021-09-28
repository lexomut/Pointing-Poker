import React, { Dispatch, useContext } from 'react';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';
import styles from './gameCard.module.scss';
import { SET_GAME } from '../../state/ActionTypesConstants';
import { GlobalContext } from '../../state/Context';
import { Action, GlobalState } from '../../types/GlobalState';

type Props = {
    back: string;
};
export const CardBack = (props: Props): JSX.Element => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);

    const { back } = props;
    const hendler = () => {
        dispatch({
            type: SET_GAME,
            payLoad: { ...globalState.game, cartBackClass: back },
        });
    };
    return (
        <div className={globalState.game.cartBackClass === back ? styles.current : ''}>
            <Paper
                onClick={() => hendler()}
                elevation={3}
                className={clsx(styles.card, styles[back])}
            />
        </div>
    );
};
