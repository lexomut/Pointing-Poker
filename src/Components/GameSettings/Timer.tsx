import React, { ChangeEvent, useMemo, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import styles from './GameSettings.module.scss';

export const Timer = ({ handler }: { handler: (arg: number) => void }): JSX.Element => {
    const [time, setTime] = useState({ minutes: 1, seconds: 20 });
    const selectMap = useMemo(() => {
        return {
            minutesMap: Array.from(Array(60).keys()),
            secondsMap: Array.from(Array(6).keys()).map((item) => item * 10),
        };
    }, []);

    const minutesHandler = (e: ChangeEvent<{ name?: string; value: unknown }>) => {
        setTime({ ...time, minutes: e.target.value as number });
        handler((e.target.value as number) * 60 + time.seconds);
    };
    const secondsHandler = (e: ChangeEvent<{ name?: string; value: unknown }>) => {
        setTime({ ...time, seconds: e.target.value as number });
        handler(time.minutes * 60 + (e.target.value as number));
    };

    return (
        <div className={styles.timer}>
            <InputLabel id="minutes">minutes</InputLabel>
            <Select
                labelId="minutes"
                id="demo-simple-select"
                value={time.minutes}
                onChange={minutesHandler}
            >
                {selectMap.minutesMap.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
            <InputLabel id="seconds">seconds</InputLabel>
            <Select
                labelId="seconds"
                id="demo-simple-select"
                value={time.seconds}
                label=""
                onChange={secondsHandler}
            >
                {selectMap.secondsMap.map((item) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};
