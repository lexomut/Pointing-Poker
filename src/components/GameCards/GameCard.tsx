import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { CardMenu } from './CardMenu';
import styles from './gameCard.module.scss';

type Props = {
    value: string;
    scoreType: string;
    isEditable: boolean;
};

export const GameCard: React.FC<Props> = (props: Props) => {
    const { value, scoreType, isEditable } = props;
    return (
        <Paper elevation={3} className={styles.card}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Typography className={styles.left} variant="subtitle1">
                        {scoreType}
                    </Typography>
                    {isEditable && <CardMenu />}
                </div>
                <Typography className={styles.center} variant="h2">
                    {value}
                </Typography>
                <Typography className={styles.right} variant="subtitle1">
                    {scoreType}
                </Typography>
            </div>
        </Paper>
    );
};
