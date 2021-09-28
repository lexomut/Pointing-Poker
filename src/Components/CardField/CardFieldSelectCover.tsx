import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Paper } from '@material-ui/core';
import { CardBack } from '../GameCards';

// import { Action, GlobalState } from '../../types/GlobalState';
// import { GlobalContext } from '../../state/Context';
import styles from './CardField.module.scss';
import { cardsBackground } from '../../shared/data';

export const CardFieldSelectCover = () => {
    // const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
    //     useContext(GlobalContext);
    return (
        <div className={styles.cards__cardField}>
            {cardsBackground.map((el) => {
                return <CardBack key={el.id} back={el.class} />;
            })}
            <div onClick={() => alert('add cover')}>
                <Paper elevation={3} className={styles.card}>
                    <AddCircleOutlineIcon className={styles.plus} />
                </Paper>
            </div>
        </div>
    );
};
