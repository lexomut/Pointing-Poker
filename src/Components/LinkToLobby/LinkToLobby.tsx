import React, { useContext } from 'react';
import Button from '@material-ui/core/Button/Button';
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
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => {
                        navigator.clipboard.writeText(currentURL);
                    }}
                >
                    Copy
                </Button>
            </div>
        </div>
    );
};

export default LinkToLobby;
