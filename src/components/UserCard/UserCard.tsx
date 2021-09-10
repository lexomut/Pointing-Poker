import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { Avatar } from '@material-ui/core';
import BlockIcon from '@material-ui/icons/Block';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        width: 250,
        height: 60,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        marginBottom: 10,
    },
    cardContainer: {
        position: 'relative',
        padding: '0 0 0 5px',
        display: 'flex',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        position: 'absolute',
        bottom: 20,
        right: 0,
    },
    title: {
        lineHeight: 1,
    },
    caption: {
        fontSize: '0.6rem',
    },
    avatar: {
        background: '#60DABF',
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontWeight: 'bold',
        marginRight: 10,
    },
    currentUser: {
        background: 'rgba(96, 218, 191, 0.33)',
    },
});

type Props = {
    currentUser?: boolean;
    name: string;
    position: string;
    initials: string;
    imgSrc?: string;
    onKick?: () => void;
};

export const UserCard: React.FC<Props> = (props: Props) => {
    const { name, currentUser, position, onKick, initials, imgSrc } = props;
    const classes = useStyles();

    return (
        <Card
            className={clsx(classes.root, { [classes.currentUser]: currentUser })}
            variant="outlined"
        >
            <CardContent className={classes.cardContainer}>
                {imgSrc ? (
                    <Avatar className={classes.avatar} src={imgSrc} alt={name} />
                ) : (
                    <Avatar className={classes.avatar}>{initials}</Avatar>
                )}
                <div>
                    <Typography variant="h6" className={classes.title}>
                        {name}
                    </Typography>
                    <Typography color="textSecondary" variant="caption" className={classes.caption}>
                        {position}
                    </Typography>
                </div>
                {!currentUser && (
                    <CardActions className={classes.button}>
                        <Button onClick={onKick}>
                            <BlockIcon />
                        </Button>
                    </CardActions>
                )}
            </CardContent>
        </Card>
    );
};

UserCard.defaultProps = {
    currentUser: false,
    imgSrc: undefined,
    onKick: () => {},
};
