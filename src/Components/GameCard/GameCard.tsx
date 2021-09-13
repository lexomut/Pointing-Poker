import React from 'react';
import { ICard } from '../../types';
import styles from './GameCard.module.css';

const GameCard: React.FC<ICard> = ({ rating }) => {
    return <div className={styles.playCard}>{rating}</div>;
};

export default GameCard;
