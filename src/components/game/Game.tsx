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
    Modal,
    IconButton,
    Collapse,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Alert } from '@material-ui/lab';
import { useHistory } from 'react-router-dom';
import { IssueButton } from '../buttons';
import { CardBack, CardsDeck, GameCard } from '../GameCards';
import { Statistic } from '../statistic';
import { Timer } from '../timer';
import { UserCard } from '../UserCard';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { User } from '../../types/user';
import { LetInUserToGameForm } from '../LetInUserToGameForm';
import { IssueCardExpandable } from '../IssueCard/IssueCardExpandable';
import { IssueCreateForm } from '../IssueCreateForm';
import { Card, Issue, StatisticCard } from '../../types/game';
import { gameExit } from './exitGame';
import { gameOver } from './stopGame';
import { saveStatistic } from '../Result/saveStatistic';
import styles from './Game.module.scss';

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
    const { game } = globalState;
    const isDealer = globalState.currentUser.roleInGame === 'dealer';
    const isObserver = globalState.currentUser.roleInGame === 'observer';
    const classes = useStyles();
    const [key, setKey] = useState(0);
    const [startTimer, setStartTimer] = useState(false);
    const [roundOver, setRoundOver] = useState(false);
    const [statistic, setStatistic] = useState<{ issue: Issue; statisticCards: StatisticCard[] }[]>(
        [],
    );
    useEffect(() => {
        const { provider } = globalState.ws;
        provider?.updateProviderState(globalState);
        if (!globalState.ws.socket) provider?.connects();
    }, [globalState]);
    const history = useHistory();
    const goToMain = () => {
        history.push(`/`);
    };
    const goToResult = async () => {
        await globalState.ws.provider?.changeValueOfGameProperty('statistic', statistic);
        setTimeout(() => history.push(`/${globalState.game.gameID}/result`), 1000);
    };
    const { round } = game;
    const resetSelectedCards = async () => {
        if (!isDealer) return;
        await globalState.ws.provider?.changeValueOfGameProperty(
            'selectedCards',
            game.users.map((user: User) => {
                return { card: undefined, user };
            }),
        );
    };

    useEffect(() => {
        const asyncFunc = async () => {
            if (game.round.status === 'going') {
                setStartTimer(true);
                setRoundOver(false);
                return;
            }
            if (game.round.status === 'over' && !roundOver) {
                setRoundOver(true);
                setStartTimer(false);
                return;
            }
            if (game.round.status === 'pending') {
                setRoundOver(false);
                setStartTimer(false);
            }
        };
        asyncFunc();
    }, [globalState, game, setStartTimer, startTimer, roundOver, setRoundOver]);
    const { dealerIsPlaying } = globalState.game.gameSettings;
    useEffect(() => {
        setStatistic((prevStat) =>
            saveStatistic(game.issues, prevStat, game.selectedCards, dealerIsPlaying),
        );
    }, [game.issues, game.selectedCards, setStatistic, dealerIsPlaying]);

    useEffect(() => {
        if (globalState.game.status === 'over') {
            history.push(`/${globalState.game.gameID}/result`);
        }
    }, [globalState.game.status, globalState.game.gameID, history]);
    const [isLastIssue, setIsLastIssue] = useState(false);
    const scrumMaster = game.users.find((user: User) => user.roleInGame === 'dealer');
    const { issues } = game;
    const { isTimerNeeded, timer } = game.gameSettings;
    const runRoundHandler = async () => {
        await globalState.ws.provider?.changeValueOfGameProperty('round', {
            ...round,
            status: 'going',
        });
        await globalState.ws.provider?.changeValueOfGameProperty('status', 'going');
    };
    const overRoundHandler = async () => {
        if (!isDealer) return;
        await globalState.ws.provider?.changeValueOfGameProperty('round', {
            ...round,
            status: 'over',
        });
    };

    const handleNextIssue = async () => {
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
            if (isDealer) {
                await Promise.all([
                    globalState.ws.provider?.changeValueOfGameProperty('issues', newIssues),
                    globalState.ws.provider?.changeValueOfGameProperty('round', {
                        ...round,
                        status: 'pending',
                    }),
                ]).then(() => {
                    resetSelectedCards();
                    setIsLastIssue(false);
                    setRoundOver(false);
                    setKey((prevKey) => prevKey + 1);
                    setStartTimer(false);
                });
            }
        } else {
            setIsLastIssue(true);
        }
    };
    const fillScore = (item: { card: Card | undefined; user: User }) => {
        if (isDealer || item.user.userID === globalState.currentUser.userID) {
            <GameCard
                isActiveCard={false}
                value={item.card?.value || '?'}
                isEditable={false}
                scoreType={globalState.game.gameSettings.shortScoreType}
                id={item.card?.id || '?'}
            />;
        }
        if (!roundOver)
            return (
                <CardBack activeCard={false} back={globalState.game.gameSettings.cardsBackClass} />
            );
        return (
            <GameCard
                isActiveCard={false}
                value={item.card?.value || '?'}
                isEditable={false}
                scoreType={globalState.game.gameSettings.shortScoreType}
                id={item.card?.id || '?'}
            />
        );
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
                        <Typography variant="h4">{game.title}</Typography>
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
                                onClick={() =>
                                    isDealer
                                        ? gameOver(globalState, goToResult)
                                        : gameExit(globalState, goToMain)
                                }
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
                                        isRoundGoing={game.round.status === 'going'}
                                    />
                                </Grid>
                            ))}
                            {isDealer && (
                                <Grid item>
                                    <IssueButton />
                                </Grid>
                            )}
                            {game.round.status === 'over' && isDealer && (
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
                                                        onComplete={overRoundHandler}
                                                    />
                                                </Grid>
                                            )}
                                            {!startTimer && !roundOver && isDealer && (
                                                <Grid item>
                                                    <Button
                                                        color="primary"
                                                        variant="contained"
                                                        onClick={runRoundHandler}
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
                                                            resetSelectedCards();
                                                            runRoundHandler();
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

                        {!isDealer && game.round.status === 'over' && (
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
                        {(!isDealer || dealerIsPlaying) && !isObserver && (
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
                        game.selectedCards
                            .filter((item) => item.user.roleInGame === 'dealer')
                            .map((item) => {
                                return (
                                    <Grid
                                        key={item.user.userID}
                                        item
                                        container
                                        justifyContent="space-around"
                                    >
                                        <Grid item>{fillScore(item)}</Grid>
                                        <Grid item className={styles.alignCenter}>
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
                    {game.selectedCards
                        .filter((item) => item.user.roleInGame === 'player')
                        .map((item) => {
                            return (
                                <Grid
                                    key={item.user.userID}
                                    item
                                    container
                                    justifyContent="space-around"
                                >
                                    <Grid item>{fillScore(item)}</Grid>
                                    <Grid item className={styles.alignCenter}>
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
                    {game.users.find((item) => item.roleInGame === 'observer') && (
                        <Grid item container justifyContent="center">
                            <Typography variant="subtitle1">Observers</Typography>
                        </Grid>
                    )}
                    {game.users.some((item) => item.roleInGame === 'observer') &&
                        game.selectedCards
                            .filter((item) => item.user.roleInGame === 'observer')
                            .map((item) => {
                                return (
                                    <Grid
                                        key={item.user.userID}
                                        item
                                        container
                                        justifyContent="space-around"
                                    >
                                        <Grid item className={styles.alignCenter}>
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
            <Modal
                open={game.pendingUsers.length > 0 && isDealer}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    {game.pendingUsers.map((user: User) => {
                        return <LetInUserToGameForm key={user.userID} user={user} />;
                    })}
                </div>
            </Modal>
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
