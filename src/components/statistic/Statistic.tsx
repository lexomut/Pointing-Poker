import React from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper, Typography } from '@material-ui/core';
import { statisticCardsData } from '../../shared/data';
import { GameCard } from '../GameCards';
import styles from './statistic.module.scss';

export const Statistic: React.FC = () => {
    return (
        <div className={styles.demo}>
            {statisticCardsData.map((el) => {
                return (
                    <div className={styles.container}>
                        <GameCard
                            key={el.id}
                            value={el.value}
                            isEditable={el.isEditable}
                            scoreType={el.scoreType}
                        />
                        <Typography variant="subtitle1">{el.voteResult}</Typography>
                    </div>
                );
            })}
            <div className={styles.container}>
                <Paper elevation={3} className={styles.card}>
                    <FreeBreakfastOutlinedIcon className={styles.coffee} />
                </Paper>
                <Typography variant="subtitle1">5%</Typography>
            </div>
        </div>
    );
};
