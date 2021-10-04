import React, { useContext } from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper, Typography } from '@material-ui/core';
import { GameCard } from '../GameCards';
import styles from './statistic.module.scss';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { StatisticCard } from '../../shared/types';
import { User } from '../../types/user';
import { Card } from '../../types/game';

export const Statistic: React.FC = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const { selectedCards }: { selectedCards: Array<{ card: Card; user: User }> } =
        globalState.game;

    function makeStatisticCards(): StatisticCard[] {
        const noSelect = globalState.game.users.length - selectedCards.length;
        const empty = new Array(noSelect).fill('Coffee');
        const values = selectedCards.map((obj) => obj.card.value);
        const length = values.length + noSelect;
        const obj = [...values, ...empty].reduce((previousValue, currentValue) => {
            const prev = previousValue;
            const curr = currentValue;
            const res = ((prev[curr] = prev[curr] + prev[curr] || 1), prev);
            return res;
        }, {});
        const cards = Object.entries(obj).map((item) => {
            const key: string = item[0] as string;
            const value: number = item[1] as number;
            return {
                id: new Date().getTime().toString(36) + Math.random().toString(36).slice(2),
                value: key,
                voteResult: `${Math.ceil((value / length) * 100)}%`,
            };
        });
        return cards;
    }

    return (
        <div className={styles.demo}>
            {makeStatisticCards().map((el: StatisticCard) => {
                return (
                    <div className={styles.container} key={el.id}>
                        <GameCard
                            isActiveCard={false}
                            value={el.value}
                            isEditable={false}
                            scoreType={globalState.game.gameSettings.shortScoreType}
                        />
                        <Typography variant="subtitle1">{el.voteResult}</Typography>
                    </div>
                );
            })}
            <div className={styles.container}>
                <Paper elevation={3} className={styles.card}>
                    <FreeBreakfastOutlinedIcon className={styles.coffee} />
                </Paper>
                <Typography variant="subtitle1">5%</Typography>
            </div>
        </div>
    );
};
