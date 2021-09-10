import React from 'react';
import { Paper } from '@material-ui/core';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import styles from './gameCard.module.scss';

export const CoffeeCard: React.FC = () => {
    return (
        <Paper elevation={3} className={styles.card}>
            <FreeBreakfastOutlinedIcon className={styles.coffee} />
        </Paper>
    );
};
