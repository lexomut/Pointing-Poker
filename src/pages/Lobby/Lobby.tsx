import React, { useContext, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import { useHistory } from 'react-router-dom';
import { Card } from '@material-ui/core';
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
    Chat,
    ScramMaster,
    LinkToLobby,
    StartButton,
    MembersField,
} from '../../components';
import styles from './Lobby.module.scss';
import { User } from '../../types/user';

export const Lobby: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const history = useHistory();
    const isPaddingUser = globalState.game.pendingUsers.some(
        (user: User) => globalState.currentUser.userID === user.userID,
    );

    useEffect(() => {
        const { provider } = globalState.ws;
        provider?.updateProviderState(globalState);
        if (!globalState.ws.socket) provider?.connects();
    }, [globalState]);

    useEffect(() => {
        function sendRequestEnterToGame() {
            globalState.ws.provider?.changeValueOfGameProperty('pendingUsers', [
                ...globalState.game.pendingUsers,
                globalState.currentUser,
            ]);
        }
        function passNext() {
            if (
                globalState.game.kickedUsersID.some(
                    (item: string) => item === globalState.currentUser.userID,
                )
            )
                return;
            if (globalState.game.status !== 'new') {
                if (
                    globalState.game.pendingUsers.some(
                        (user: User) => globalState.currentUser.userID === user.userID,
                    )
                )
                    return;
                if (
                    globalState.game.users.every(
                        (user: User) => globalState.currentUser.userID !== user.userID,
                    )
                ) {
                    sendRequestEnterToGame();
                } else history.push(`/${globalState.game.gameID}/game`);
            }
        }
        passNext();
    }, [globalState, history]);

    function checkVoted(): boolean {
        if (!globalState.game.vote) return false;
        if (globalState.game.vote.kickID === globalState.currentUser.userID) return false;
        if (!globalState.game.kickedUsersID.every((id) => id !== globalState.currentUser.userID))
            return false;
        return globalState.game.vote.votedUsersID.every(
            (votedUserID: string) => votedUserID !== globalState.currentUser.userID,
        );
    }

    return (
        <div className={styles.lobby}>
            <div className={styles.container}>
                <section className={styles.top}>
                    <GameInfo />
                    <ScramMaster />
                    <LinkToLobby />
                    {globalState.currentUser.roleInGame === 'dealer' && (
                        <div className={styles.top__buttons}>
                            <StartButton />
                            <CancelButton />
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
            {globalState.chatOpen && <Chat />}

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
            <Modal
                open={checkVoted()}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <VoteForm />
            </Modal>
            <Modal
                open={isPaddingUser}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Card className={styles.modal}>
                    <h4>please wait until they let you in</h4>
                </Card>
            </Modal>
        </div>
    );
};
