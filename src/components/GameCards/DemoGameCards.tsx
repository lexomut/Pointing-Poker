import React from 'react';
import { CardBack } from './CardBack';
import styles from './gameCard.module.scss';
import { GameCard } from './GameCard';

export const DemoGameCards: React.FC = () => {
    return (
        <div className={styles.demo}>
            DEMO CARD BACK
            <GameCard value={1} isEditable scoreType="SP" />
            <GameCard value={13} isEditable={false} scoreType="SP" />
            <GameCard gameCard={false} />
            <CardBack back="bgMountains" />
            <CardBack back="bgMoon" />
            <CardBack back="bgEagle" />
            <CardBack back="bgLeaf" />
        </div>
    );
};
