import React from 'react';
import styles from './GameSettings.module.css';

const GameSettings: () => JSX.Element = () => {
    return (
        <div className={styles.settings__wrap}>
            <label htmlFor="masterRole">
                Scram master as player:
                <input id="masterRole" type="checkbox" />
            </label>
            <label htmlFor="changeCard">
                Changing card in round end:
                <input id="changeCard" type="checkbox" />
            </label>
            <label htmlFor="isTimer">
                Is timer needed:
                <input id="isTimer" type="checkbox" />
            </label>
            <label htmlFor="scoreType">
                Score type:
                <input id="scoreType" type="text" />
            </label>
            <label htmlFor="scoreTypeShort">
                Score type (Short):
                <input id="scoreTypeShort" type="text" />
            </label>
            <label htmlFor="time">
                Round time:
                <input id="time" type="text" />
            </label>
        </div>
    );
};

export default GameSettings;
