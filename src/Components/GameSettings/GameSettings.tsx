import TextField from '@material-ui/core/TextField/TextField';
import React, { ChangeEvent, Dispatch, useContext, useEffect, useState } from 'react';
import { GameSettingsInterface } from '../../types/game';
import { Switch } from '../switch';
import styles from './GameSettings.module.scss';
import { Timer } from './Timer';
import { Action } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SET_GAME_SETTINGS, SET_GAME_TEMP_SETTINGS } from '../../state/ActionTypesConstants';

const GameSettings: () => JSX.Element = () => {
    const { dispatch }: { dispatch: Dispatch<Action> } = useContext(GlobalContext);
    const [settings, setSettings] = useState<GameSettingsInterface>({
        timer: 120,
        dealerIsPlaying: true,
        scoreType: '',
        shortScoreType: '',
        isTimerNeeded: false,
        changingCardInRoundEnd: false,
    });

    useEffect(() => {
        dispatch({
            type: SET_GAME_TEMP_SETTINGS,
            payLoad: { property: 'gameSettings', value: settings as GameSettingsInterface },
        });
    }, [settings, dispatch]);
    const switchers = [
        {
            value: settings.dealerIsPlaying,
            label: 'Scram master as player:',
            callback: (state: boolean) => setSettings({ ...settings, dealerIsPlaying: state }),
        },
        {
            value: settings.isTimerNeeded,
            label: ' Is timer needed:',
            callback: (state: boolean) => setSettings({ ...settings, isTimerNeeded: state }),
        },
        {
            value: settings.changingCardInRoundEnd,
            label: 'Changing card in round end:',
            callback: (state: boolean) =>
                setSettings({ ...settings, changingCardInRoundEnd: state }),
        },
    ];

    const textFields = [
        {
            value: settings.scoreType,
            label: 'Score type:',
            callback: (e: ChangeEvent<HTMLInputElement>) => {
                setSettings({ ...settings, scoreType: e.target.value });
            },
        },
        {
            value: settings.shortScoreType,
            label: 'Score type (Short):',
            callback: (e: ChangeEvent<HTMLInputElement>) => {
                setSettings({ ...settings, shortScoreType: e.target.value });
            },
        },
    ];
    return (
        <div className={styles.settings__wrap}>
            {switchers.map(({ value, label, callback }) => (
                <div key={label} className={styles.label}>
                    {label}
                    <Switch label="" value={value} toggle={callback} />
                </div>
            ))}
            {textFields.map(({ value, label, callback }) => (
                <div key={label} className={styles.label}>
                    {label}
                    <TextField
                        fullWidth
                        id="outlined-basic"
                        variant="outlined"
                        value={value}
                        onChange={callback}
                    />
                </div>
            ))}

            <div className={styles.label}>
                Round time:
                <Timer
                    handler={(seconds: number) => {
                        setSettings({ ...settings, timer: seconds });
                    }}
                />
            </div>
        </div>
    );
};

export default GameSettings;
