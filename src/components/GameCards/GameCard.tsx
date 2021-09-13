import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { CardMenu } from './CardMenu';
import styles from './gameCard.module.scss';

type Props = {
    value?: number;
    scoreType?: string;
    isEditable?: boolean;
    gameCard?: boolean;
};

export const GameCard: React.FC<Props> = (props: Props) => {
    const { value, scoreType, isEditable, gameCard } = props;
    return gameCard ? (
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
    ) : (
        <Paper elevation={3} className={styles.card}>
            <FreeBreakfastOutlinedIcon className={styles.coffee} />
        </Paper>
    );
};

GameCard.defaultProps = {
    value: 1,
    scoreType: 'SP',
    isEditable: true,
    gameCard: true,
};
