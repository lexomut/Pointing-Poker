import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createStyles, Theme } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 250,
            width: 250,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 10,
        },
        cardContainer: {
            position: 'relative',
            padding: 0,
            paddingLeft: 5,
        },

        title: {
            lineHeight: 1,
            wordWrap: 'break-word',
        },
        current: {
            background: theme.palette.secondary.main,
        },
    }),
);

type Props = {
    text: string;
    current: boolean;
};

export const ChatText: React.FC<Props> = (props: Props) => {
    const { text, current } = props;
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, { [classes.current]: current })} variant="outlined">
            <CardContent className={classes.cardContainer}>
                <Typography variant="h6" className={classes.title}>
                    {text}
                </Typography>
            </CardContent>
        </Card>
    );
};
