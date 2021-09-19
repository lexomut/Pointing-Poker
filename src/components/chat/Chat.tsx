import React, { Dispatch, FC, useContext, useState } from 'react';
import { GlobalContext } from '../../state/Context';
import { Action, GlobalState } from '../../types/GlobalState';
import { ChatMessage } from '../../types/ChatMessage';
import { WSProvider } from '../../api/WSProvider';
import { ChatMessageComponent } from './ChatMessageComponent';

export const Chat: FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const [text, setText] = useState<string>('');
    const wsProvider: WSProvider | undefined = globalState.ws.provider;
    function send() {
        if (!wsProvider) return;
        wsProvider.sendChatMessage(text);
        setText('');
    }
    return (
        <>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button type="button" disabled={!globalState.ws.status} onClick={send}>
                Send
            </button>
            {globalState.game.chatMessages.map((chatMessage: ChatMessage) => (
                <ChatMessageComponent
                    key={chatMessage.id}
                    message={chatMessage}
                    currentUserID={globalState.currentUser.userID}
                />
            ))}
        </>
    );
};
