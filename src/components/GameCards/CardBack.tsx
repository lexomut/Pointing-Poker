import React from 'react';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';
import { cardsBackgrounds } from '../../shared/data';
import styles from './gameCard.module.scss';

export const CardBack = (): JSX.Element => {
    return (
        <>
            {' '}
            {cardsBackgrounds.map((el) => {
                const background = el.imgClass;
                return (
                    <Paper
                        elevation={3}
                        className={clsx(styles.card, styles[background])}
                        key={el.id}
                    />
                );
            })}
        </>
    );
};
