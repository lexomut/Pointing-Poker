import React from 'react';
import LinkToLobby from '../../Components/LinkToLobby';
import ScramMaster from '../../Components/ScramMaster';
import styles from './Lobby.module.css';
import StartButton from '../../Components/StartButton';
import CancelButton from '../../Components/CancelButton';
import MembersField from '../../Components/MembersField/MembersField';
import { cards, issues, message } from '../../data';

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
                    <div className={styles.issues__cardField}>
                        {issues.map(({ issueNumber, priority, id }) => {
                            return (
                                <div className={styles.memberCard} key={id}>
                                    {`Issue ${issueNumber} <br/> ${priority} priority`}
                                </div>
                            );
                        })}
                    </div>
                </section>
                <section className={styles.settings}>
                    <h4>Game settings:</h4>
                    <div className={styles.settings__wrap}>
                        <label htmlFor="masterRole">
                            Scram master as player:
                            <input id="masterRole" type="checkbox" />
                        </label>
                        <label htmlFor="changeCard">
                            Changing card in round end:
                            <input id="changeCard" type="checkbox" />
                        </label>
                        <label htmlFor="isTimer">
                            Is timer needed:
                            <input id="isTimer" type="checkbox" />
                        </label>
                        <label htmlFor="scoreType">
                            Score type:
                            <input id="scoreType" type="text" />
                        </label>
                        <label htmlFor="scoreTypeShort">
                            Score type (Short):
                            <input id="scoreTypeShort" type="text" />
                        </label>
                        <label htmlFor="time">
                            Round time:
                            <input id="time" type="text" />
                        </label>
                    </div>
                </section>
                <section className={styles.cards}>
                    <h4>Add card values:</h4>
                    <div className={styles.cards__cardField}>
                        {cards.map(({ rating, id }) => {
                            return (
                                <div key={id} className={styles.playCard}>
                                    {rating}
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
            <aside className={styles.chat}>
                {message.map(({ text, firstName, lastName, job, id }) => {
                    return (
                        <div key={id} className={styles.chat__message}>
                            <div className={styles.chat__message__text}>{text}</div>
                            <div className={styles.memberCard_small}>
                                {`${firstName} ${lastName} ${job}`}
                            </div>
                        </div>
                    );
                })}
            </aside>
        </div>
    );
};

export default Lobby;
