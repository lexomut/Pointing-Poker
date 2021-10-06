import React, { ReactElement, useContext, useEffect, useState } from 'react';
import CreateIcon from '@material-ui/icons/Create';
import { TextField } from '@material-ui/core';
import styles from './GameInfo.module.scss';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

export const GameInfo = (): ReactElement => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);

    const [title, setTitle] = useState('');
    const [isInput, setIsInput] = useState(false);

    const handleSubmit = () => {
        if (isInput) globalState.ws.provider?.changeValueOfGameProperty('title', title);
        setIsInput(!isInput);
    };
    const handler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === 'NumpadEnter') handleSubmit();
    };

    useEffect(() => {
        setTitle(globalState.game.title);
    }, [globalState]);
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
                    onKeyPress={handler}
                />
            )}
            {!isInput && <h4>{title}</h4>}
            {globalState.currentUser.roleInGame === 'dealer' && globalState.ws.status && (
                <CreateIcon className={styles.icon} onClick={() => handleSubmit()} />
            )}
        </div>
    );
};
