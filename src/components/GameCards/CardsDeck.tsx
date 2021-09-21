import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper } from '@material-ui/core';
import { GameCard } from './GameCard';
import { cardsDeck } from '../../shared/data';
import styles from './gameCard.module.scss';

const useStyles = makeStyles((theme) => ({
    activeCard: (props: { isActiveCard: boolean }) => ({
        backgroundColor: props.isActiveCard
            ? theme.palette.secondary.main
            : theme.palette.background.default,
    }),
}));

export const CardsDeck: React.FC = () => {
    const [activeCardID, setActiveCardID] = useState<undefined | number>(undefined);
    const classes = useStyles({ isActiveCard: activeCardID === 0 });
    return (
        <div className={styles.demo}>
            {cardsDeck.map((el) => {
                return (
                    <GameCard
                        isActiveCard={el.id === activeCardID}
                        key={el.id}
                        value={el.value}
                        isEditable={el.isEditable}
                        scoreType={el.scoreType}
                        onClick={() => {
                            setActiveCardID(el.id);
                        }}
                    />
                );
            })}
            <Paper
                elevation={10}
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
