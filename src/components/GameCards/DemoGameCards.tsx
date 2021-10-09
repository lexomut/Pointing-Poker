import React from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper } from '@material-ui/core';
import { GameCard } from './GameCard';
import { CardBack } from './CardBack';
import { cardsBackground, fibonacciDeck, gameCardsData, powersOfTwoDeck } from '../../shared/data';
import styles from './gameCard.module.scss';

export const DemoGameCards: React.FC = () => {
    return (
        <div className={styles.demo}>
            DEMO CARD BACK
            {gameCardsData.map((el) => {
                return (
                    <GameCard
                        key={el.id}
                        value={el.value}
                        isEditable
                        scoreType="SP"
                        isActiveCard={false}
                        id="245345"
                    />
                );
            })}
            <Paper elevation={3} className={styles.card}>
                <FreeBreakfastOutlinedIcon className={styles.coffee} />
            </Paper>
            {cardsBackground.map((el) => {
                return <CardBack activeCard={false} key={el.id} back={el.class} />;
            })}
            {powersOfTwoDeck.map((el) => {
                return (
                    <GameCard
                        key={el.id}
                        value={el.value}
                        isEditable
                        scoreType="SP"
                        isActiveCard={false}
                        id="24534g5"
                    />
                );
            })}
            <Paper elevation={3} className={styles.card}>
                <FreeBreakfastOutlinedIcon className={styles.coffee} />
            </Paper>
            {cardsBackground.map((el) => {
                return <CardBack activeCard={false} key={el.id} back={el.class} />;
            })}
            {fibonacciDeck.map((el) => {
                return (
                    <GameCard
                        key={el.id}
                        value={el.value}
                        isEditable
                        scoreType="SP"
                        isActiveCard={false}
                        id="24534e5"
                    />
                );
            })}
            <Paper elevation={3} className={styles.card}>
                <FreeBreakfastOutlinedIcon className={styles.coffee} />
            </Paper>
            {cardsBackground.map((el) => {
                return <CardBack activeCard={false} key={el.id} back={el.class} />;
            })}
        </div>
    );
};
