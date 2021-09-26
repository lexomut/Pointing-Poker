import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal';
import React, { Dispatch, useContext, useState } from 'react';
import { connectGame } from '../../api/server';
import { Game } from '../../types/game';
import { RegistrationForm } from '../RegistrationForm';
import styles from './ConnectForm.module.scss';
import { INIT_GAME } from '../../state/ActionTypesConstants';
import { Action } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

interface IConnectForm {
    open: boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void;
    setIsDealer: (value: React.SetStateAction<boolean>) => void;
    isDealer: boolean;
}

export const ConnectForm: React.FC<IConnectForm> = ({ open, setOpen, setIsDealer, isDealer }) => {
    const [url, setUrl] = useState('');
    const [urlError, setUrlError] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const { dispatch }: { dispatch: Dispatch<Action> } = useContext(GlobalContext);

    const handleConnect = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!url) return;
        setIsConnecting(true);
        const game: Game | undefined = await connectGame(url);
        setIsConnecting(false);
        if (game) {
            dispatch({ type: INIT_GAME, payLoad: game });
            setOpen(true);
            setIsDealer(false);
        } else {
            setUrlError(true);
            setTimeout(() => {
                setUrlError(false);
            }, 2000);
        }
    };

    return (
        <form onSubmit={handleConnect} className={styles.connect}>
            <p>
                Connect to lobby by <span className={styles.highlight}>URL</span>:
            </p>
            <div className={styles.connect__control}>
                <TextField
                    error={urlError}
                    required
                    id="filled-error-helper-text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    type="text"
                    helperText={urlError ? 'invalid URL' : ''}
                    variant="outlined"
                />
                <Button color="primary" variant="contained" type="submit" disabled={isConnecting}>
                    {isConnecting ? <CircularProgress /> : 'Connect'}
                </Button>

                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <RegistrationForm isDealer={isDealer} setOpen={setOpen} />
                </Modal>
            </div>
        </form>
    );
};
