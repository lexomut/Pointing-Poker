import React from 'react';
import LinkToLobby from '../../Components/LinkToLobby';
import ScramMaster from '../../Components/ScramMaster';
import { IMember } from '../../types';
import styles from './Lobby.module.css';
import StartButton from '../../Components/StartButton';
import CancelButton from '../../Components/CancelButton';

interface IIssues {
    issueNumber: string;
    priority: 'low' | 'high';
    id: string;
}

interface ICard {
    image?: File;
    rating: string;
    id: string;
}

interface IMessage {
    firstName: string;
    lastName?: string;
    image?: File;
    job?: string;
    id: string;
    text: string;
}

const members: IMember[] = [
    { firstName: 'nick', lastName: 'kave', job: 'dev', id: '1' },
    { firstName: 'mike', lastName: 'bzhezinsky', job: 'design', id: '2' },
    { firstName: 'john', lastName: 'smith', job: 'batman', id: '3' },
    { firstName: 'miranda', lastName: 'harris', job: 'cleaner', id: '4' },
    { firstName: 'miranda', lastName: 'harris', job: 'cleaner', id: '8' },
    { firstName: 'miranda', lastName: 'harris', job: 'cleaner', id: '88' },
];

const issues: IIssues[] = [
    { issueNumber: '445', priority: 'low', id: '55' },
    { issueNumber: '211', priority: 'low', id: '444' },
    { issueNumber: '44445', priority: 'low', id: '33' },
    { issueNumber: '44545', priority: 'low', id: '222' },
    { issueNumber: '12', priority: 'high', id: '144' },
];

const cards: ICard[] = [
    { rating: '1', id: 'asd' },
    { rating: '2', id: 'accsd' },
    { rating: '3', id: 'asxd' },
    { rating: '5', id: 'aswsd' },
];

const message: IMessage[] = [
    { firstName: 'nick', lastName: 'kave', job: 'dev', id: 'f1', text: 'fsdfsdf' },
    { firstName: 'mike', lastName: 'bzhezinsky', job: 'design', id: 'f2', text: 'fsdfsdf' },
    { firstName: 'john', lastName: 'smith', job: 'batman', id: 'f3', text: 'fsdfsdf' },
];

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
                    <div className={styles.members__cardField}>
                        {members.map(({ firstName, lastName, job, id }) => {
                            return (
                                <div className={styles.memberCard} key={id}>
                                    {`${firstName} ${lastName} ${job}`}
                                </div>
                            );
                        })}
                    </div>
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
