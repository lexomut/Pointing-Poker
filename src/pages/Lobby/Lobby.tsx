import React, { useContext, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import LinkToLobby from '../../components/LinkToLobby';
import ScramMaster from '../../components/ScramMaster';
import styles from './Lobby.module.scss';
import { StartButton } from '../../components/StartButton';
import CancelButton from '../../components/CancelButton';
import MembersField from '../../components/MembersField/MembersField';
import GameSettings from '../../components/GameSettings';
import CardField from '../../components/CardField';
import { GameInfo } from '../../components/GameInfo';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { Chat } from '../../components/chat';
import { IssueCreateForm, IssueField } from '../../components';

export const Lobby: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);

    useEffect(() => {
        const { provider } = globalState.ws;
        provider?.updateProviderState(globalState);
        if (!globalState.ws.socket) provider?.connects();
    }, [globalState]);

    return (
        <div className={styles.lobby}>
            <div className={styles.container}>
                <section className={styles.top}>
                    <GameInfo />
                    <ScramMaster />
                    <LinkToLobby />
                    {globalState.currentUser.role === 'dealer' && (
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
                {globalState.currentUser.role === 'dealer' && (
                    <>
                        {' '}
                        <section className={styles.settings}>
                            <h4>Game settings:</h4>
                            <GameSettings />
                        </section>
                        <section className={styles.cards}>
                            <h4>Add card values:</h4>
                            <CardField classNames={styles.cards__cardField} />
                        </section>
                    </>
                )}
            </div>
            <Chat />

            <Modal
                open={globalState.popup === 'createIssue'}
                onClose={() => console.log('попап закрыт')}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <IssueCreateForm />
            </Modal>
        </div>
    );
};
