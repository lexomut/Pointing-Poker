import React, { Dispatch, useContext } from 'react';
import { Paper, Typography } from '@material-ui/core';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { Issue, StatisticCard } from '../../types/game';
import { IssueCard } from '../IssueCard';
import styles from '../statistic/statistic.module.scss';
import { GameCard } from '../GameCards';

export const Result: React.FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    return (
        <>
            {globalState.game.issues.map(
                ({ name, priority, current, dealer, id, statistic }: Issue) => {
                    return (
                        <div key={id}>
                            <IssueCard
                                key={id}
                                name={name}
                                priority={priority}
                                current={current}
                                dealer={dealer}
                                id={id}
                            />
                            <div className={styles.demo}>
                                {statistic &&
                                    statistic.map((el: StatisticCard) => {
                                        return (
                                            <div className={styles.container} key={el.id}>
                                                {el.id ? (
                                                    <>
                                                        {' '}
                                                        <GameCard
                                                            isActiveCard={false}
                                                            value={el.value}
                                                            isEditable={false}
                                                            scoreType={
                                                                globalState.game.gameSettings
                                                                    .shortScoreType
                                                            }
                                                        />
                                                        <Typography variant="subtitle1">
                                                            {el.voteResult}
                                                        </Typography>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Paper
                                                            elevation={3}
                                                            className={styles.card}
                                                        >
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
                            )
                        </div>
                    );
                },
            )}
        </>
    );
};
