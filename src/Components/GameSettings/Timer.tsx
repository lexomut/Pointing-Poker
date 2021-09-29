import React, { useMemo, useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import styles from './GameSettings.module.scss';

export const Timer = ({ hendler }: { hendler: (arg: number) => void }) => {
    const [time, setTime] = useState({ minutes: 1, seconds: 20 });
    const selectMap = useMemo(() => {
        return {
            minutesMap: Array.from(Array(60).keys()),
            secondsMap: Array.from(Array(6).keys()).map((item) => item * 10),
        };
    }, []);

    return (
        <div className={styles.timer}>
            <InputLabel id="minutes">minutes</InputLabel>
            <Select
                labelId="minutes"
                id="demo-simple-select"
                value={time.minutes}
                // label="minutes"
                onChange={(e) => {
                    setTime({ ...time, minutes: e.target.value as number });
                    hendler(time.minutes * 50 + time.seconds);
                }}
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
                label=".
"
                onChange={(e) => {
                    setTime({ ...time, seconds: e.target.value as number });
                    hendler(time.minutes * 50 + time.seconds);
                }}
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
