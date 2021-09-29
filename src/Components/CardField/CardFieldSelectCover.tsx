import React from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Paper } from '@material-ui/core';
import { CardBack } from '../GameCards';
import styles from './CardField.module.scss';
import { cardsBackground } from '../../shared/data';

export const CardFieldSelectCover = (): JSX.Element => {
    return (
        <div className={styles.cards__cardField}>
            {cardsBackground.map((el) => {
                return <CardBack key={el.id} back={el.class} />;
            })}
            <div role="presentation" onClick={() => alert('add cover')}>
                <Paper elevation={3} className={styles.card}>
                    <AddCircleOutlineIcon className={styles.plus} />
                </Paper>
            </div>
        </div>
    );
};
