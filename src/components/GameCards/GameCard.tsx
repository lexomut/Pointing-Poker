import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import { CardMenu } from './CardMenu';
import styles from './gameCard.module.scss';

type Props = {
    value: string;
    scoreType: string;
    isEditable: boolean;
    isActiveCard: boolean;
    onClick?: () => void;
    id: string;
};

const useStyles = makeStyles((theme) => ({
    activeCard: (props: Props) => ({
        backgroundColor: props.isActiveCard
            ? theme.palette.secondary.main
            : theme.palette.background.default,
        transform: props.isActiveCard ? 'scale(1.1)' : 'scale(1)',
    }),
}));

export const GameCard: React.FC<Props> = (props: Props) => {
    const { isActiveCard } = props;
    const classes = useStyles(props);
    const { value, scoreType, isEditable, onClick, id } = props;
    return (
        <Paper
            elevation={isActiveCard ? 9 : 3}
            className={styles.card}
            classes={{ root: classes.activeCard }}
            onClick={() => onClick && onClick()}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <Typography className={styles.left} variant="subtitle1">
                        {scoreType}
                    </Typography>
                    {isEditable && <CardMenu id={id} />}
                </div>
                <Typography className={styles.center} variant="h2">
                    {value}
                </Typography>
                <Typography className={styles.right} variant="subtitle1">
                    {scoreType}
                </Typography>
            </div>
        </Paper>
    );
};

GameCard.defaultProps = {
    onClick: () => {},
};
