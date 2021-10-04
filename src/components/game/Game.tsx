import clsx from 'clsx';
import React, { Dispatch, useContext, useState } from 'react';
import {
    Typography,
    Grid,
    Theme,
    createStyles,
    makeStyles,
    Button,
    Paper,
    Box,
    Modal,
    IconButton,
    Collapse,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import { IssueButton } from '../buttons';
import { CardsDeck } from '../GameCards';
import { AddUserPopup } from '../popups';
import { Statistic } from '../statistic';
import { Timer } from '../timer';
import { UserCard } from '../UserCard';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { User } from '../../types/user';
import { IssueCreateForm } from '..';
import { IssueCardExpandable } from '../IssueCard/IssueCardExpandable';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mainContainer: {
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
            cursor: 'default',
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
    const isDealer = globalState.currentUser.roleInGame === 'dealer';
    const classes = useStyles();
    const [key, setKey] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [roundOver, setRoundOver] = useState(false);
    const [isLastIssue, setIsLastIssue] = useState(false);
    const scrumMaster = globalState.game.users.find((user: User) => user.roleInGame === 'dealer');
    const { issues } = globalState.game;
    const { dealerIsPlaying } = globalState.temporaryDialerSettings.gameSettings;
    const { isTimerNeeded, timer } = globalState.game.gameSettings;
    const handleNextIssue = () => {
        let currentItemFound = false;
        let newNextIssueFound = false;
        let newIssues = issues.map((item) => {
            if (item.current) {
                currentItemFound = true;
                return { ...item, current: false };
            }
            if (currentItemFound) {
                if (item.score === '-' && !newNextIssueFound) {
                    newNextIssueFound = true;
                    return { ...item, current: true };
                }
            }
            return item;
        });
        if (!newNextIssueFound) {
            newIssues = newIssues.map((item) => {
                if (item.score === '-' && !newNextIssueFound) {
                    newNextIssueFound = true;
                    return { ...item, current: true };
                }

                return item;
            });
        }
        if (newNextIssueFound) {
            if (isDealer) globalState.ws.provider?.changeValueOfGameProperty('issues', newIssues);
            setIsLastIssue(false);
            setRoundOver(false);
            setKey((prevKey) => prevKey + 1);
            setStartTimer(false);
        } else {
            setIsLastIssue(true);
        }
    };

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
                        <Typography variant="h4">{globalState.game.title}</Typography>
                    </Grid>
                    <Grid item container alignItems="center" spacing={10} justifyContent="center">
                        <Grid item>
                            <Typography variant="caption">Scrum master:</Typography>
                            {scrumMaster ? (
                                <UserCard
                                    size="large"
                                    initials={scrumMaster.initials}
                                    userID={scrumMaster.userID}
                                    name={`${scrumMaster.firstName} ${scrumMaster.lastName}`}
                                    jobPosition={scrumMaster.jobPosition || ''}
                                    currentUser={
                                        globalState.currentUser.userID === scrumMaster.userID
                                    }
                                    roleInGame="dealer"
                                />
                            ) : (
                                <Typography variant="h6">Loading...</Typography>
                            )}
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
                                <Grid item key={item.id}>
                                    <IssueCardExpandable
                                        id={item.id}
                                        name={item.name}
                                        priority={item.priority}
                                        current={item.current}
                                        dealer={isDealer}
                                        score={item.score}
                                        link={item.link}
                                        isRoundGoing={startTimer}
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
                        {(isTimerNeeded || isDealer) && (
                            <Grid item className={classes.topSpace} xs={12} sm={12} md={3}>
                                <Paper elevation={3}>
                                    <Box p={3}>
                                        <Grid
                                            container
                                            spacing={2}
                                            alignItems="center"
                                            className={classes.column}
                                        >
                                            <Collapse in={startTimer && !roundOver}>
                                                <Alert severity="success">
                                                    Round in progress. Waiting for players vote...
                                                </Alert>
                                            </Collapse>
                                            <Collapse in={isLastIssue}>
                                                <Alert
                                                    severity="success"
                                                    action={
                                                        <IconButton
                                                            aria-label="close"
                                                            color="inherit"
                                                            size="small"
                                                            onClick={() => {
                                                                setIsLastIssue(false);
                                                            }}
                                                        >
                                                            <CloseIcon fontSize="inherit" />
                                                        </IconButton>
                                                    }
                                                >
                                                    All issues were discussed. There is no next
                                                    issue.
                                                </Alert>
                                            </Collapse>
                                            {isTimerNeeded && (
                                                <Grid item>
                                                    <Timer
                                                        key={key}
                                                        seconds={timer}
                                                        start={startTimer}
                                                        onComplete={() => setRoundOver(true)}
                                                    />
                                                </Grid>
                                            )}
                                            {!startTimer && !roundOver && isDealer && (
                                                <Grid item>
                                                    <Button
                                                        color="primary"
                                                        variant="contained"
                                                        onClick={() => setStartTimer(!startTimer)}
                                                        disabled={issues.length === 0}
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
                                                        onClick={handleNextIssue}
                                                    >
                                                        Next Issue
                                                    </Button>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>
                        )}

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
                        {(!isDealer || dealerIsPlaying) && (
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
                            <Typography variant="subtitle1">Participants:</Typography>
                        </Grid>
                    </Grid>
                    {dealerIsPlaying && (
                        <Grid item container justifyContent="center">
                            <Typography variant="subtitle1">Dealer</Typography>
                        </Grid>
                    )}
                    {dealerIsPlaying &&
                        globalState.game.selectedCards
                            .filter((item) => item.user.roleInGame === 'dealer')
                            .map((item) => {
                                return (
                                    <Grid
                                        key={item.user.userID}
                                        item
                                        container
                                        justifyContent="space-around"
                                    >
                                        <Grid item>
                                            <Button
                                                color="primary"
                                                variant="outlined"
                                                className={classes.minWidth}
                                            >
                                                {`${item.card.value} ${globalState.game.gameSettings.shortScoreType}`}
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <UserCard
                                                size="small"
                                                initials={item.user.initials}
                                                userID={item.user.userID}
                                                name={`${item.user.firstName} ${
                                                    item.user.lastName || ''
                                                }`}
                                                jobPosition={item.user.jobPosition || ''}
                                                roleInGame={item.user.roleInGame}
                                            />
                                        </Grid>
                                    </Grid>
                                );
                            })}
                    <Grid item container justifyContent="center">
                        <Typography variant="subtitle1">Players</Typography>
                    </Grid>
                    {globalState.game.selectedCards
                        .filter((item) => item.user.roleInGame === 'player')
                        .map((item) => {
                            return (
                                <Grid
                                    key={item.user.userID}
                                    item
                                    container
                                    justifyContent="space-around"
                                >
                                    <Grid item>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            className={classes.minWidth}
                                        >
                                            {`${item.card.value} ${globalState.game.gameSettings.shortScoreType}`}
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <UserCard
                                            size="small"
                                            initials={item.user.initials}
                                            userID={item.user.userID}
                                            name={`${item.user.firstName} ${
                                                item.user.lastName || ''
                                            }`}
                                            jobPosition={item.user.jobPosition || ''}
                                            roleInGame={item.user.roleInGame}
                                        />
                                    </Grid>
                                </Grid>
                            );
                        })}
                    {globalState.game.users.find((item) => item.roleInGame === 'observer') && (
                        <Grid item container justifyContent="center">
                            <Typography variant="subtitle1">Observers</Typography>
                        </Grid>
                    )}
                    {globalState.game.users.some((item) => item.roleInGame === 'observer') &&
                        globalState.game.selectedCards
                            .filter((item) => item.user.roleInGame === 'observer')
                            .map((item) => {
                                return (
                                    <Grid
                                        key={item.user.userID}
                                        item
                                        container
                                        justifyContent="space-around"
                                    >
                                        <Grid item>
                                            <Button
                                                color="primary"
                                                variant="outlined"
                                                className={classes.minWidth}
                                            >
                                                {`${item.card.value} ${globalState.game.gameSettings.shortScoreType}`}
                                            </Button>
                                        </Grid>
                                        <Grid item>
                                            <UserCard
                                                size="small"
                                                initials={item.user.initials}
                                                userID={item.user.userID}
                                                name={`${item.user.firstName} ${
                                                    item.user.lastName || ''
                                                }`}
                                                jobPosition={item.user.jobPosition || ''}
                                                roleInGame={item.user.roleInGame}
                                            />
                                        </Grid>
                                    </Grid>
                                );
                            })}
                </Grid>
            </Grid>

            {isDealer && <AddUserPopup name="Mike" />}
            <Modal
                open={globalState.popup === 'createIssue'}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <IssueCreateForm />
                </div>
            </Modal>
        </>
    );
};
