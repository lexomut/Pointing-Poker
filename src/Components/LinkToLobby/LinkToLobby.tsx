import React, { useContext } from 'react';
import styles from './LinkToLobby.module.scss';
import { GlobalContext } from '../../state/Context';
import { GlobalState } from '../../types/GlobalState';

const LinkToLobby: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const currentURL = `${window.location.origin}/${globalState.game.gameID}`;

    return (
        <div className={styles.linkToLobby}>
            <p>Link to Lobby:</p>
            <div className={styles.linkToLobby__controls}>
                <div className={styles.linkToLobby__controls__url}>{currentURL}</div>
                <button
                    onClick={() => {
                        navigator.clipboard.writeText(currentURL);
                    }}
                    type="button"
                >
                    Copy
                </button>
            </div>
        </div>
    );
};

export default LinkToLobby;
