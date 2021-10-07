import React, { useContext } from 'react';
import { CardBack } from '../GameCards';
import styles from './CardField.module.scss';
import { cardsBackground } from '../../shared/data';
import { GlobalContext } from '../../state/Context';
import { GlobalState } from '../../types/GlobalState';

export const CardFieldSelectCover = (): JSX.Element => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    return (
        <div className={styles.cards__cardField}>
            {cardsBackground.map((el) => {
                return (
                    <CardBack
                        key={el.id}
                        activeCard={
                            globalState.temporaryDialerSettings.gameSettings.cardsBackClass ===
                            el.class
                        }
                        back={el.class}
                    />
                );
            })}
        </div>
    );
};
