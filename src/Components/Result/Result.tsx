import React, { Dispatch, useContext } from 'react';
import { Button, Paper, Typography, Box } from '@material-ui/core';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { useHistory } from 'react-router-dom';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { StatisticCard } from '../../types/game';
import { IssueCard } from '../IssueCard';
import { GameCard } from '../GameCards';
import { IssueIssueToCSV } from '../../utils/save';
import styles from '../statistic/statistic.module.scss';
import classes from './Result.module.scss';

export const Result: React.FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const history = useHistory();
    return (
        <div className={classes.container}>
            <Box className={classes.resultButtons}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => IssueIssueToCSV(globalState.game.issues)}
                >
                    Export to csv
                </Button>
                <Button color="primary" variant="outlined" onClick={() => history.push(`/`)}>
                    Go to main
                </Button>
            </Box>
            {globalState.game.statistic.map(({ issue, statisticCards }) => {
                const { name, priority, id } = issue;
                return (
                    <div key={id}>
                        <IssueCard name={name} priority={priority} id={id} />
                        <div className={styles.demo}>
                            {statisticCards &&
                                statisticCards.map((el: StatisticCard) => {
                                    return (
                                        <div className={styles.container} key={el.id}>
                                            {el.id ? (
                                                <>
                                                    <GameCard
                                                        isActiveCard={false}
                                                        value={el.value}
                                                        isEditable={false}
                                                        scoreType={
                                                            globalState.game.gameSettings
                                                                .shortScoreType
                                                        }
                                                        id={el.id}
                                                    />
                                                    <Typography variant="subtitle1">
                                                        {el.voteResult}
                                                    </Typography>
                                                </>
                                            ) : (
                                                <>
                                                    <Paper elevation={3} className={styles.card}>
                                                        <FreeBreakfastOutlinedIcon
                                                            className={styles.coffee}
                                                        />
                                                    </Paper>
                                                    <Typography variant="subtitle1">
                                                        {el.voteResult}
                                                    </Typography>
                                                </>
                                            )}
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
