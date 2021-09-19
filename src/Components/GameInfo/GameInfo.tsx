import React, { useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { TextField } from '@material-ui/core';
import styles from './GameInfo.module.scss';

export const GameInfo = () => {
    const [title, setTitle] = useState('');
    const [isInput, setIsInput] = useState(false);

    return (
        <div className={styles.gameInfo}>
            {isInput && (
                <TextField
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="filled-error-helper-text"
                    type="text"
                    variant="outlined"
                />
            )}
            {!isInput && <h4>{title}()</h4>}
            <CreateIcon className={styles.icon} onClick={() => setIsInput(!isInput)} />
        </div>
    );
};
