import React from 'react';
import { CardBack } from '../GameCards';
import styles from './CardField.module.scss';
import { cardsBackground } from '../../shared/data';

export const CardFieldSelectCover = (): JSX.Element => {
    return (
        <div className={styles.cards__cardField}>
            {cardsBackground.map((el) => {
                return <CardBack key={el.id} back={el.class} />;
            })}
        </div>
    );
};
