import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, IconButton, Collapse, Button } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import {
    CardAddForm,
    IssueCreateForm,
    IssueField,
    CancelButton,
    GameSettings,
    CardField,
    GameInfo,
    CardFieldSelectCover,
    ScrumMaster,
    LinkToLobby,
    StartButton,
    MembersField,
} from '../../components';
import styles from './Lobby.module.scss';

export const Lobby: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    useEffect(() => {
        const { provider } = globalState.ws;
        provider?.updateProviderState(globalState);
        if (!globalState.ws.socket) provider?.connects();
    }, [globalState]);
    const [open, setOpen] = useState(true);
    const history = useHistory();
    return (
        <div className={styles.lobby}>
            <div className={styles.container}>
                {globalState.currentUser.roleInGame !== 'dealer' && (
                    <Collapse in={open}>
                        <Alert
                            action={
                                <IconButton
                                    aria-label="close"
                                    color="inherit"
                                    size="small"
                                    onClick={() => {
                                        setOpen(false);
                                    }}
                                >
                                    <CloseIcon fontSize="inherit" />
                                </IconButton>
                            }
                            icon={<CheckIcon fontSize="inherit" />}
                            severity="success"
                        >
                            Welcome to Poker Planning lobby! You are waiting for game to start.
                        </Alert>
                    </Collapse>
                )}
                <section className={styles.top}>
                    <GameInfo />
                    <ScrumMaster />
                    <LinkToLobby />
                    {globalState.currentUser.roleInGame === 'dealer' && (
                        <div className={styles.top__buttons}>
                            <StartButton />
                            <CancelButton />
                        </div>
                    )}
                    {globalState.currentUser.roleInGame !== 'dealer' && (
                        <div className={styles.exitField}>
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => history.push('/')}
                                className={styles.exitBtn}
                            >
                                Exit
                            </Button>
                        </div>
                    )}
                </section>
                <section className={styles.members}>
                    <h4>Members</h4>
                    <MembersField classNames={styles.members__cardField} />
                </section>
                <section className={styles.issues}>
                    <h4>Issues:</h4>
                    <IssueField classNames={styles.issues__cardField} />
                </section>
                {globalState.currentUser.roleInGame === 'dealer' && (
                    <>
                        <section className={styles.settings}>
                            <h4>Game settings:</h4>
                            <GameSettings />
                        </section>
                        <section className={styles.cards}>
                            <h4>Select cover:</h4>
                            <CardFieldSelectCover />
                        </section>
                        <section className={styles.cards}>
                            <h4>Cards values:</h4>
                            <CardField />
                        </section>
                    </>
                )}
            </div>

            <Modal
                open={globalState.popup === 'createIssue'}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <IssueCreateForm />
            </Modal>
            <Modal
                open={globalState.popup === 'createCard'}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <CardAddForm />
            </Modal>
        </div>
    );
};
