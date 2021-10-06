import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import BlockIcon from '@material-ui/icons/Block';
import clsx from 'clsx';
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

const useStyles = makeStyles((theme) => ({
    paper: (props: Props) => {
        if (props.size === 'large') {
            return {
                width: 250,
                height: 60,
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                marginBottom: 10,
                userSelect: 'none',
            };
        }
        return {
            width: 180,
            height: 45,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            marginBottom: 10,
            userSelect: 'none',
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
    icon: ({ size }: Props) => ({
        fontSize: size === 'large' ? '1.5rem' : '1rem',
    }),
    current: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

type Props = {
    currentUser?: boolean;
    name: string;
    jobPosition: string;
    initials: string;
    imgSrc?: string;
    userID: string;
    roleInGame: 'observer' | 'player' | 'dealer';
    size: 'large' | 'small';
};

export function UserCard(props: Props): JSX.Element {
    const classes = useStyles(props);
    const { name, jobPosition, size, imgSrc, initials, currentUser, userID, roleInGame } = props;
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const { ws, game } = globalState;

    const clickHandler = async (): Promise<void> => {
        if (globalState.currentUser.roleInGame === 'dealer') {
            await ws.provider?.changeValueOfGameProperty('kickedUsersID', [
                ...game.kickedUsersID,
                userID,
            ]);
            const users = game.users.filter((user) => user.userID !== userID);
            await ws.provider?.changeValueOfGameProperty('users', users);
        } else {
            if (game.vote) return;
            if (game.users.length < 4) {
                alert('player less then 3');
                return;
            }
            ws.provider?.changeValueOfGameProperty('vote', {
                author: globalState.currentUser,
                yes: 1,
                no: 0,
                kickID: userID,
                votedUsersID: [globalState.currentUser.userID],
            });
        }
    };

    return (
        <Paper className={clsx(classes.paper, { [classes.current]: currentUser })}>
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
                        >
                            {initials}
                        </Avatar>
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
                                {jobPosition}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {(!(currentUser || globalState.game.vote || roleInGame === 'dealer') ||
                            (globalState.currentUser.roleInGame === 'dealer' &&
                                roleInGame !== 'dealer')) && (
                            <Button
                                className={classes.button}
                                aria-label="kick"
                                onClick={() => clickHandler()}
                            >
                                <BlockIcon className={classes.icon} />
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
