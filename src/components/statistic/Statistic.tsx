import React, { useContext } from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper, Typography } from '@material-ui/core';
import { GameCard } from '../GameCards';
import styles from './statistic.module.scss';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { StatisticCard } from '../../types/game';
import { makeStatisticCards } from './makeStatistic';

export const Statistic: React.FC = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const {
        selectedCards,
        gameSettings: { dealerIsPlaying },
    } = globalState.game;

    return (
        <div className={styles.demo}>
            {makeStatisticCards(selectedCards, dealerIsPlaying).map((el: StatisticCard) => {
                return (
                    <div className={styles.container} key={el.id}>
                        {el.id ? (
                            <>
                                <GameCard
                                    isActiveCard={false}
                                    value={el.value}
                                    isEditable={false}
                                    scoreType={globalState.game.gameSettings.shortScoreType}
                                    id={el.id}
                                />
                                <Typography variant="subtitle1">{el.voteResult}</Typography>
                            </>
                        ) : (
                            <>
                                <Paper elevation={3} className={styles.card}>
                                    <FreeBreakfastOutlinedIcon className={styles.coffee} />
                                </Paper>
                                <Typography variant="subtitle1">{el.voteResult}</Typography>
                            </>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
