import React from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper } from '@material-ui/core';
import { GameCard } from './GameCard';
import { CardBack } from './CardBack';
import { cardsBackground, gameCardsData } from '../../shared/data';
import styles from './gameCard.module.scss';

export const DemoGameCards: React.FC = () => {
    return (
        <div className={styles.demo}>
            DEMO CARD BACK
            {gameCardsData.map((el) => {
                return (
                    <GameCard
                        isActiveCard={true}
                        key={el.id}
                        value={el.value}
                        isEditable={el.isEditable}
                        scoreType={el.scoreType}
                        onClick={() => alert(el.id)}
                    />
                );
            })}
            <Paper elevation={3} className={styles.card}>
                <FreeBreakfastOutlinedIcon className={styles.coffee} />
            </Paper>
            {cardsBackground.map((el) => {
                return <CardBack key={el.id} back={el.class} />;
            })}
        </div>
    );
};
