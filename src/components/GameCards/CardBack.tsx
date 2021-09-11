import React from 'react';
import { Paper } from '@material-ui/core';
import clsx from 'clsx';
import styles from './gameCard.module.scss';

type Props = {
    back: string;
};
export const CardBack = (props: Props): JSX.Element => {
    const { back } = props;
    return <Paper elevation={3} className={clsx(styles.card, styles[back])} />;
};
