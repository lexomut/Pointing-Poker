import React, { useContext, useEffect, useState } from 'react';
import { Modal, IconButton, Collapse, Button, Card } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import {
    VoteForm,
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
import { User } from '../../types/user';

export const Lobby: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const history = useHistory();
    const isPendingUser = globalState.game.pendingUsers.some(
        (user: User) => globalState.currentUser.userID === user.userID,
    );
    useEffect(() => {
        const { provider } = globalState.ws;
        provider?.updateProviderState(globalState);
        if (!globalState.ws.socket) provider?.connects();
    }, [globalState]);

    useEffect(() => {
        if (
            globalState.game.kickedUsersID.some(
                (item: string) => item === globalState.currentUser.userID,
            ) ||
            globalState.game.pendingUsers.some(
                (user: User) => globalState.currentUser.userID === user.userID,
            )
        )
            return;
        if (globalState.game.status !== 'new') {
            if (
                globalState.game.users.every(
                    (user: User) => globalState.currentUser.userID !== user.userID,
                ) &&
                !globalState.game.users.some(
                    (user: User) => globalState.currentUser.userID === user.userID,
                )
            ) {
                globalState.ws.provider?.changeValueOfGameProperty('pendingUsers', [
                    ...globalState.game.pendingUsers,
                    globalState.currentUser,
                ]);
                return;
            }
            if (globalState.game.status !== 'canceled') {
                history.push(`/${globalState.game.gameID}/game`);
            }
        }
    }, [
        globalState.game.users,
        globalState.currentUser,
        globalState.game.gameID,
        globalState.game.kickedUsersID,
        globalState.game.pendingUsers,
        globalState.game.status,
        globalState.ws.provider,
        history,
    ]);

    function checkVoted(): boolean {
        if (
            !globalState.game.vote ||
            globalState.game.vote.kickID === globalState.currentUser.userID ||
            !globalState.game.kickedUsersID.every((id) => id !== globalState.currentUser.userID)
        )
            return false;
        return globalState.game.vote.votedUsersID.every(
            (votedUserID: string) => votedUserID !== globalState.currentUser.userID,
        );
    }

    const [open, setOpen] = useState(true);
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
                                onClick={async () => {
                                    history.push('/');
                                    await globalState.ws.provider?.changeValueOfGameProperty(
                                        'users',
                                        [
                                            ...globalState.game.users.filter(
                                                (user) =>
                                                    user.userID !== globalState.currentUser.userID,
                                            ),
                                        ],
                                    );
                                }}
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
                <div>
                    <IssueCreateForm />
                </div>
            </Modal>
            <Modal
                open={globalState.popup === 'createCard'}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <CardAddForm />
                </div>
            </Modal>
            <Modal
                open={checkVoted()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div>
                    <VoteForm />
                </div>
            </Modal>
            <Modal
                open={isPendingUser}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <div>
                    <Card className={styles.modal}>
                        <h4>please wait until they let you in</h4>
                    </Card>
                </div>
            </Modal>
        </div>
    );
};
