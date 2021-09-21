import clsx from 'clsx';
import React, { useState } from 'react';
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
import { issues, usersWithScore } from '../../shared/data';
import { IssueButton } from '../buttons';
import { IssueCard } from '../IssueCard';
import { Statistic } from '../statistic';
import { Timer } from '../timer';
import { UserCard } from '../UserCard';

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
    }),
);

export const Game: React.FC = () => {
    const classes = useStyles();
    const [key, setKey] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [roundOver, setRoundOver] = useState(false);
    return (
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
                            userID={3}
                            name="Lily Smith"
                            position="senior developer"
                            currentUser
                        />
                    </Grid>
                    <Grid item>
                        <Button color="primary" variant="outlined">
                            Stop game
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
                                    name={item.name}
                                    priority={item.priority}
                                    current={item.current}
                                    dealer={item.dealer}
                                />
                            </Grid>
                        ))}
                        <Grid item>
                            <IssueButton />
                        </Grid>
                        {roundOver && (
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
                                    {!startTimer && !roundOver && (
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
                                    {roundOver && (
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
                                    {roundOver && (
                                        <Grid item>
                                            <Button color="primary" variant="contained">
                                                Next Issue
                                            </Button>
                                        </Grid>
                                    )}
                                </Grid>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={12} sm={7} md={4} lg={3} xl={2}>
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
                                    position={item.position}
                                />
                            </Grid>
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
};
