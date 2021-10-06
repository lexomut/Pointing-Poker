import { Button, Modal, Collapse, IconButton } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CloseIcon from '@material-ui/icons/Close';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import styles from './CancelButton.module.scss';

export const CancelButton: () => JSX.Element = () => {
    const history = useHistory();
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const [cancelGame, setCancelGame] = useState(false);
    const [open, setOpen] = useState(false);

    const buttonHandler = () => {
        globalState.ws.provider?.changeValueOfGameProperty('status', 'canceled');
        setCancelGame(true);
        setOpen(true);
    };

    return (
        <>
            <Button
                disabled={!globalState.ws.status}
                color="primary"
                variant="outlined"
                onClick={buttonHandler}
            >
                cancel game
            </Button>
            <Modal
                open={cancelGame}
                onClose={() => {
                    setCancelGame(false);
                    history.push('/');
                }}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className={styles.cancelAlert}>
                    <Collapse in={open}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                        history.push('/');
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                        >
                            The game was canceled
                        </Alert>
                    </Collapse>
                </div>
            </Modal>
        </>
    );
};
