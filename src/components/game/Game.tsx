import clsx from 'clsx';
import React, { Dispatch, useContext, useEffect, useState } from 'react';
import {
    Typography,
    Grid,
    Theme,
    createStyles,
    makeStyles,
    Button,
    Paper,
    Box,
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { issues, usersWithScore } from '../../shared/data';
import { IssueButton } from '../buttons';
import { CardsDeck } from '../GameCards';
import { IssueCard } from '../IssueCard';
import { AddUserPopup } from '../popups';
import { Statistic } from '../statistic';
import { Timer } from '../timer';
import { UserCard } from '../UserCard';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { User } from '../../types/user';
import { LetInUserToGameForm } from '../LetInUserToGameForm';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
            height: '100%',
            color: theme.palette.primary.dark,
        },
        rightBorder: {
            borderRight: `2px solid ${theme.palette.primary.dark}`,
        },
        column: {
            flexDirection: 'column',
        },
        bottomSpace: {
            marginBottom: 20,
        },
        topSpace: {
            marginTop: 40,
        },
        minWidth: {
            minWidth: 125,
        },
        rightContainer: {
            height: '50%',
        },
        minimize: {
            transform: 'scale(0.7)',
        },
    }),
);

export const Game: React.FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const isDealer = globalState.currentUser.role === 'dealer';
    const classes = useStyles();
    const [key, setKey] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [roundOver, setRoundOver] = useState(false);
    useEffect(() => {
        const { provider } = globalState.ws;
        provider?.updateProviderState(globalState);
        if (!globalState.ws.socket) provider?.connects();
    }, [globalState]);

    return (
        <>
            <Grid container className={classes.mainContainer}>
                <Grid
                    item
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    xs={12}
                    sm={5}
                    md={8}
                    lg={9}
                    xl={10}
                    className={clsx(classes.rightBorder, classes.column)}
                >
                    <Grid item>
                        <Typography variant="h4">Name of the game/session</Typography>
                    </Grid>
                    <Grid item container alignItems="center" spacing={10} justifyContent="center">
                        <Grid item>
                            <Typography variant="caption">Scrum master:</Typography>
                            <UserCard
                                size="large"
                                initials="LS"
                                userID="3"
                                name="Lily Smith"
                                jobPosition="senior developer"
                                currentUser
                                role="player"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                color="primary"
                                variant="outlined"
                                onClick={() => alert('add logic')}
                            >
                                {isDealer ? 'Stop game' : 'Exit game'}
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container className={classes.bottomSpace}>
                        <Grid
                            container
                            item
                            className={classes.column}
                            alignItems="center"
                            spacing={1}
                            xs={6}
                        >
                            <Grid item>
                                <Typography variant="h6">Issues:</Typography>
                            </Grid>
                            {issues.map((item) => (
                                <Grid item key={item.name}>
                                    <IssueCard
                                        id={item.id}
                                        name={item.name}
                                        priority={item.priority}
                                        current={item.current}
                                        dealer={isDealer}
                                    />
                                </Grid>
                            ))}
                            {isDealer && (
                                <Grid item>
                                    <IssueButton />
                                </Grid>
                            )}
                            {roundOver && isDealer && (
                                <>
                                    <Grid item>
                                        <Typography variant="h6">Statistics:</Typography>
                                    </Grid>
                                    <Grid item container justifyContent="center">
                                        <Statistic />
                                    </Grid>
                                </>
                            )}
                        </Grid>

                        <Grid item className={classes.topSpace} xs={12} sm={12} md={3}>
                            <Paper elevation={3}>
                                <Box p={3}>
                                    <Grid
                                        container
                                        spacing={2}
                                        alignItems="center"
                                        className={classes.column}
                                    >
                                        <Grid item>
                                            <Timer
                                                key={key}
                                                seconds={10}
                                                start={startTimer}
                                                onComplete={() => setRoundOver(true)}
                                            />
                                        </Grid>
                                        {!startTimer && !roundOver && isDealer && (
                                            <Grid item>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    onClick={() => setStartTimer(!startTimer)}
                                                >
                                                    Run round
                                                </Button>
                                            </Grid>
                                        )}
                                        {roundOver && isDealer && (
                                            <Grid item>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    onClick={() => {
                                                        setRoundOver(false);
                                                        setKey((prevKey) => prevKey + 1);
                                                    }}
                                                >
                                                    Restart round
                                                </Button>
                                            </Grid>
                                        )}
                                        {roundOver && isDealer && (
                                            <Grid item>
                                                <Button
                                                    color="primary"
                                                    variant="contained"
                                                    onClick={() => {
                                                        alert('put logic here');
                                                    }}
                                                >
                                                    Next Issue
                                                </Button>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Box>
                            </Paper>
                        </Grid>
                        {!isDealer && roundOver && (
                            <Grid item container justifyContent="center">
                                <Grid item>
                                    <Typography variant="h6">Statistics:</Typography>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    justifyContent="center"
                                    className={classes.minimize}
                                >
                                    <Statistic />
                                </Grid>
                            </Grid>
                        )}
                        {!isDealer && (
                            <Grid item container justifyContent="center">
                                <CardsDeck />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    sm={7}
                    md={4}
                    lg={3}
                    xl={2}
                    className={classes.rightContainer}
                >
                    <Grid item container justifyContent="space-around">
                        <Grid item>
                            <Typography variant="subtitle1">Score:</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">Players:</Typography>
                        </Grid>
                    </Grid>
                    {usersWithScore.map((item) => {
                        return (
                            <Grid key={item.userID} item container justifyContent="space-around">
                                <Grid item>
                                    <Button
                                        color="primary"
                                        variant="outlined"
                                        onClick={() => alert('Put logic here')}
                                        className={classes.minWidth}
                                    >
                                        {item.score}
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <UserCard
                                        size="small"
                                        initials={item.initials}
                                        userID={item.userID}
                                        name={item.name}
                                        jobPosition={item.jobPosition || ''}
                                        role={item.role}
                                    />
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
            </Grid>

            {isDealer && <AddUserPopup name="Mike" />}
            <Modal
                open={globalState.game.pendingUsers.length > 0 && isDealer}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    {globalState.game.pendingUsers.map((user: User) => {
                        return <LetInUserToGameForm key={user.userID} user={user} />;
                    })}
                </div>
            </Modal>
        </>
    );
};
