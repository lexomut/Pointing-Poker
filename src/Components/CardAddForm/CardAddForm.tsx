import Button from '@material-ui/core/Button/Button';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import TextField from '@material-ui/core/TextField/TextField';
import React, { Dispatch, useContext, useState } from 'react';
import styles from './CardAddForm.module.scss';
import { Action, GlobalState, PopupType } from '../../types/GlobalState';
import { Card } from '../../types/game';
import { GlobalContext } from '../../state/Context';
import { SET_GAME_TEMP_SETTINGS, SET_POPUP } from '../../state/ActionTypesConstants';

export const CardAddForm: React.FC = () => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const [card, setCard] = useState<Card>({
        value: '',
        id: new Date().getTime().toString(36) + Math.random().toString(36).slice(2),
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        dispatch({
            type: SET_GAME_TEMP_SETTINGS,
            payLoad: {
                property: 'cards',
                value: [...globalState.temporaryDialerSettings.cards, card] as Card[],
            },
        });
        dispatch({ type: SET_POPUP, payLoad: '' as PopupType });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Create Card</h2>
                </div>
                <div className={styles.inputs}>
                    <InputLabel htmlFor="value">
                        Value:
                        <TextField
                            required
                            value={card.value}
                            onChange={(e) => setCard({ ...card, value: e.target.value })}
                            id="filled-error-helper-text"
                            type="text"
                            name="value"
                            variant="outlined"
                        />
                    </InputLabel>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button color="primary" className={styles.btn} type="submit" variant="contained">
                    Confirm
                </Button>
                <Button
                    color="primary"
                    className={styles.btn}
                    variant="outlined"
                    onClick={() => dispatch({ type: SET_POPUP, payLoad: '' as PopupType })}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};
