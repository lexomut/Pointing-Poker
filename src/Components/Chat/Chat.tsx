import React from 'react';
import { message } from '../../data';
import styles from './Chat.module.css';
import MemberCard from '../MemberCard/MemberCard';

const Chat: () => JSX.Element = () => {
    console.log(styles);
    return (
        <aside className={styles.chat}>
            {message.map(({ text, firstName, lastName, job, id }) => {
                return (
                    <div key={id} className={styles.chat__message}>
                        <div className={styles.chat__message__text}>{text}</div>
                        <MemberCard
                            classNames="memberCard_small"
                            firstName={firstName}
                            lastName={lastName}
                            job={job}
                        />
                    </div>
                );
            })}
        </aside>
    );
};

export default Chat;
