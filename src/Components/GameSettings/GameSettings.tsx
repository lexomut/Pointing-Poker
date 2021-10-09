import TextField from '@material-ui/core/TextField/TextField';
import React, { ChangeEvent, Dispatch, useContext, useEffect, useState } from 'react';
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core';
import { GameSettingsInterface } from '../../types/game';
import { Switch } from '../switch';
import styles from './GameSettings.module.scss';
import { Timer } from './Timer';
import { Action } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SET_GAME_TEMP_SETTINGS } from '../../state/ActionTypesConstants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export const GameSettings: () => JSX.Element = () => {
    const { dispatch }: { dispatch: Dispatch<Action> } = useContext(GlobalContext);
    const [settings, setSettings] = useState<GameSettingsInterface>({
        timer: 120,
        dealerIsPlaying: true,
        scoreType: 'Story Point',
        shortScoreType: 'SP',
        isTimerNeeded: false,
        changingCardInRoundEnd: false,
        cardsDeckType: 'fibonacci',
        freeGameEnter: false,
        cardsBackClass: 'bgMountains',
    });
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSettings({ ...settings, cardsDeckType: event.target.value as string });
    };

    useEffect(() => {
        dispatch({
            type: SET_GAME_TEMP_SETTINGS,
            payLoad: { property: 'gameSettings', value: settings },
        });
    }, [settings, dispatch]);
    const switchers = [
        {
            value: settings.dealerIsPlaying,
            label: 'Scrum master as player:',
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
        {
            value: settings.freeGameEnter,
            label: 'Allow new members to join:',
            callback: (state: boolean) => setSettings({ ...settings, freeGameEnter: state }),
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

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Cards Deck</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={settings.cardsDeckType}
                    onChange={handleChange}
                >
                    <MenuItem value="fibonacci">Fibonacci Sequence</MenuItem>
                    <MenuItem value="powersOfTwo">Powers of Two</MenuItem>
                    <MenuItem value="custom">Create your deck</MenuItem>
                </Select>
            </FormControl>

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

            {settings.isTimerNeeded && (
                <div className={styles.label}>
                    Round time:
                    <Timer
                        handler={(seconds: number) => {
                            setSettings({ ...settings, timer: seconds });
                        }}
                    />
                </div>
            )}
        </div>
    );
};
