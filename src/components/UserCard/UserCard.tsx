import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import clsx from 'clsx';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: (props: Props) => {
        if (props.size === 'large') {
            return {
                width: 250,
                height: 60,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                marginBottom: 10,
            };
        }
        return {
            width: 180,
            height: 45,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 10,
        };
    },
    small: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    avatar: {
        background: '#60DABF',
        boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        fontWeight: 'bold',
        marginLeft: theme.spacing(1),
    },
    title: (props: Props) => {
        if (props.size === 'large') {
            return {
                fontSize: '1rem',
            };
        }
        return {
            fontSize: '0.8rem',
        };
    },
    caption: (props: Props) => {
        if (props.size === 'large') {
            return {
                fontSize: '0.8rem',
            };
        }
        return {
            fontSize: '0.7rem',
        };
    },
    button: (props: Props) => {
        if (props.size === 'large') {
            return {
                maxWidth: theme.spacing(6),
                minWidth: theme.spacing(6),
                maxHeight: theme.spacing(6),
                minHeight: theme.spacing(6),
                fontSize: '1.5rem',
            };
        }
        return {
            maxWidth: theme.spacing(4),
            minWidth: theme.spacing(4),
            maxHeight: theme.spacing(4),
            minHeight: theme.spacing(4),
            fontSize: '1rem',
        };
    },
}));

type Props = {
    currentUser?: boolean;
    name: string;
    position: string;
    initials: string;
    imgSrc?: string;
    userID: number;
    size: 'large' | 'small';
};

export function UserCard(props: Props) {
    const classes = useStyles(props);
    const { name, position, size, imgSrc, initials, currentUser, userID } = props;
    const clickHandler = (id: number) => {
        return alert(`kick off ${id}`);
    };

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1} alignItems="center" wrap="nowrap">
                <Grid item>
                    {imgSrc ? (
                        <Avatar
                            className={clsx(classes.avatar, {
                                [classes.large]: size === 'large',
                                [classes.small]: size === 'small',
                            })}
                            src={imgSrc}
                            alt={name}
                        />
                    ) : (
                        <Avatar
                            className={clsx(classes.avatar, {
                                [classes.large]: size === 'large',
                                [classes.small]: size === 'small',
                            })}
                        >
                            {initials}
                        </Avatar>
                    )}
                </Grid>
                <Grid item xs={12} sm container alignItems="center">
                    <Grid item xs container direction="column" spacing={1}>
                        <Grid item xs>
                            <Typography variant="h6" className={classes.title}>
                                {name}
                            </Typography>
                            <Typography
                                variant="caption"
                                color="textSecondary"
                                className={classes.caption}
                            >
                                {position}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {!currentUser && (
                            <Button
                                className={classes.button}
                                aria-label="kick"
                                onClick={() => clickHandler(userID)}
                            >
                                <BlockIcon fontSize="inherit" />
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}

UserCard.defaultProps = {
    imgSrc: undefined,
    currentUser: false,
};
