import { makeStyles } from '@material-ui/core/styles';
import React, { useState, useContext } from 'react';
import FreeBreakfastOutlinedIcon from '@material-ui/icons/FreeBreakfastOutlined';
import { Paper } from '@material-ui/core';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { GameCard } from './GameCard';
import { Card } from '../../types/game';

import styles from './gameCard.module.scss';
import { fibonacciDeck, powersOfTwoDeck } from '../../shared/data';

const useStyles = makeStyles((theme) => ({
    activeCard: (props: { isActiveCard: boolean }) => ({
        backgroundColor: props.isActiveCard
            ? theme.palette.secondary.main
            : theme.palette.background.default,
        transform: props.isActiveCard ? 'scale(1.1)' : 'scale(1)',
    }),
}));

export const CardsDeck: React.FC = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const [activeCardID, setActiveCardID] = useState<string>('');
    const classes = useStyles({ isActiveCard: activeCardID === '' });
    const { cards } = globalState.game;
    const { shortScoreType, cardsDeckType } = globalState.game.gameSettings;
    let visibleCards;
    switch (cardsDeckType) {
        case 'fibonacci':
            visibleCards = fibonacciDeck;
            break;
        case 'powersOfTwo':
            visibleCards = powersOfTwoDeck;
            break;
        case 'custom':
            visibleCards = cards;
            break;
        default:
            visibleCards = fibonacciDeck;
    }
    const handler = async (card: Card) => {
        setActiveCardID(card.id);
        if (globalState.game.status === 'going')
            await globalState.ws.provider?.sendChooseCard(card);
        setActiveCardID(card.id);
    };

    return (
        <div className={styles.demo}>
            {visibleCards.map((el: Card) => {
                return (
                    <GameCard
                        isActiveCard={el.id === activeCardID}
                        key={el.id}
                        value={el.value}
                        isEditable={false}
                        scoreType={shortScoreType}
                        onClick={() => {
                            handler(el);
                        }}
                        id={el.id}
                    />
                );
            })}
            <Paper
                elevation={!activeCardID ? 9 : 3}
                className={styles.card}
                classes={{ root: classes.activeCard }}
                onClick={() => {
                    setActiveCardID('');
                    handler({ id: '', value: 'cup' });
                }}
            >
                <FreeBreakfastOutlinedIcon className={styles.coffee} />
            </Paper>
        </div>
    );
};
