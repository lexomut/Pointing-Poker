import React, { Dispatch, FC, useContext, useEffect } from 'react';
import { GlobalContext } from '../../state/Context';
import { Action, GlobalState } from '../../types/GlobalState';
import { ChatMessage } from '../../types/ChatMessage';
import { ChatMessageComponent } from './ChatMessageComponent';
import { ChatInput } from './input';
import './chat.scss';

export const Chat: FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const chatRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [globalState.game.chatMessages]);

    return (
        <div className="chat">
            <div ref={chatRef} className="chat__messages-container">
                {globalState.game.chatMessages.map((chatMessage: ChatMessage) => (
                    <ChatMessageComponent
                        key={chatMessage.id}
                        message={chatMessage}
                        currentUserID={globalState.currentUser.userID}
                    />
                ))}
            </div>
            <ChatInput />
        </div>
    );
};
