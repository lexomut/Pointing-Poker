import React from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper } from '@material-ui/core';
import { GameCard } from './GameCard';
import { cardsDeck } from '../../shared/data';
import styles from './gameCard.module.scss';

export const DemoCardsDeck: React.FC = () => {
    return (
        <div className={styles.demo}>
            {cardsDeck.map((el) => {
                return (
                    <GameCard
                        key={el.id}
                        value={el.value}
                        isEditable={el.isEditable}
                        scoreType={el.scoreType}
                    />
                );
            })}
            <Paper elevation={3} className={styles.card}>
                <FreeBreakfastOutlinedIcon className={styles.coffee} />
            </Paper>
        </div>
    );
};
