import React from 'react';
import LinkToLobby from '../../components/LinkToLobby';
import ScramMaster from '../../components/ScramMaster';
import styles from './Lobby.module.css';
import StartButton from '../../components/StartButton';
import CancelButton from '../../components/CancelButton';
import MembersField from '../../components/MembersField/MembersField';
import IssueField from '../../components/IssueField/IssueField';
import GameSettings from '../../components/GameSettings';
import CardField from '../../components/CardField';
import Chat from '../../components/Chat';

const Lobby: () => JSX.Element = () => {
    return (
        <div className={styles.lobby}>
            <div className={styles.container}>
                <section className={styles.top}>
                    <h4>Spring 23 planning ()</h4>
                    <ScramMaster />
                    <LinkToLobby />
                    <div className={styles.top__buttons}>
                        <StartButton />
                        <CancelButton />
                    </div>
                </section>
                <section className={styles.members}>
                    <h4>Members</h4>
                    <MembersField classNames={styles.members__cardField} />
                </section>
                <section className={styles.issues}>
                    <h4>Issues:</h4>
                    <IssueField classNames={styles.issues__cardField} />
                </section>
                <section className={styles.settings}>
                    <h4>Game settings:</h4>
                    <GameSettings />
                </section>
                <section className={styles.cards}>
                    <h4>Add card values:</h4>
                    <CardField classNames={styles.cards__cardField} />
                </section>
            </div>
            <Chat />
        </div>
    );
};

export default Lobby;
