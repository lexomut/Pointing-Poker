import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper } from '@material-ui/core';
import { GameCard } from './GameCard';
import { cardsDeck } from '../../shared/data';
import { Card } from '../../shared/types';
import styles from './gameCard.module.scss';

const useStyles = makeStyles((theme) => ({
    activeCard: (props: { isActiveCard: boolean }) => ({
        backgroundColor: props.isActiveCard
            ? theme.palette.secondary.main
            : theme.palette.background.default,
        transform: props.isActiveCard ? 'scale(1.1)' : 'scale(1)',
    }),
}));

export const CardsDeck: React.FC = () => {
    const [activeCardID, setActiveCardID] = useState<undefined | number>(undefined);
    const classes = useStyles({ isActiveCard: activeCardID === 0 });
    return (
        <div className={styles.demo}>
            {cardsDeck.map((el: Card) => {
                return (
                    <GameCard
                        isActiveCard={el.id === activeCardID}
                        key={el.id}
                        value={el.value}
                        isEditable={false}
                        scoreType="SP"
                        onClick={() => {
                            setActiveCardID(el.id);
                        }}
                    />
                );
            })}
            <Paper
                elevation={!activeCardID ? 9 : 3}
                className={styles.card}
                classes={{ root: classes.activeCard }}
                onClick={() => {
                    setActiveCardID(0);
                }}
            >
                <FreeBreakfastOutlinedIcon className={styles.coffee} />
            </Paper>
        </div>
    );
};
