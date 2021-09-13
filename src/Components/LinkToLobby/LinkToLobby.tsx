import React from 'react';
import styles from './LinkToLobby.module.css';

const LinkToLobby: () => JSX.Element = () => {
    const currentURL = window.location.href;

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
