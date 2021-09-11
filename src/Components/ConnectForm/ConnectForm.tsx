import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import React, { useState } from 'react';
import { connectGame } from '../../api/server';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import RegistrationForm from '../RegistrationForm';
import styles from './ConnectForm.module.css';

interface IConnectForm {
    open: boolean;
    setOpen: (value: React.SetStateAction<boolean>) => void;
}

const ConnectForm: React.FC<IConnectForm> = ({ open, setOpen }) => {
    const [url, setUrl] = useState('');
    const [urlError, setUrlError] = useState(false);

    const handleConnect = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isConnect = await connectGame(url);
        if (isConnect) {
            setOpen(true);
        } else {
            setUrlError(true);
            setTimeout(() => {
                setUrlError(false);
            }, 2000);
        }
    };

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const openPop = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <form onSubmit={handleConnect} className={styles.connect}>
            <p>
                Connect to lobby by <span className={styles.highlight}>URL</span>:
            </p>
            <div className={styles.connect__control}>
                <input
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    type="text"
                    id="connect"
                />
                <Button
                    aria-describedby={id}
                    color="primary"
                    variant="outlined"
                    type="submit"
                    onClick={handleClick}
                >
                    Connect
                </Button>
                {urlError && (
                    <ErrorMessage
                        id={id}
                        open={openPop}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        message="Invalid url!"
                    />
                )}
                <Modal
                    open={open}
                    onClose={() => setOpen(false)}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    <RegistrationForm setOpen={setOpen} />
                </Modal>
            </div>
        </form>
    );
};

export default ConnectForm;
