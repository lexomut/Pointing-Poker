import React, { FC } from 'react';
import { ChatMessage } from '../../types/ChatMessage';
import { User } from '../../types/user';
import { ChatText } from './ChatText';
import { UserCard } from '../UserCard';
import { SERVER_URL } from '../../api/url';
import styles from './chat.module.scss';

export const ChatMessageComponent: FC<{ message: ChatMessage; currentuserID: string }> = ({
    message,
    currentuserID,
}) => {
    const { text, user }: { text: string; user: User } = message;
    const current = currentuserID === user.userID;
    return (
        <div className={styles.chat__message}>
            <ChatText text={text} current={current} />
            <UserCard
                name={user.firstName}
                initials={user.firstName[0] + (user.lastName || '')[0]}
                jobPosition={user.jobPosition ? user.jobPosition : ''}
                imgSrc={SERVER_URL + user.imgSrc}
                userID={+user.userID}
                currentUser={current}
            />
        </div>
    );
};
