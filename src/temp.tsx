import React, { Dispatch, FC, useContext, useState } from 'react';
import { GlobalContext } from './state/Context';
import { ChatMessage } from './types/ChatMessage';
import { Action, GlobalState } from './types/GlobalState';
import { WSProvider } from './api/WSProvider';

export const Temp: FC = () => {
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
                <div key={chatMessage.id}>
                    <span>{chatMessage.user.firstName}</span> <span>{chatMessage.text}</span>
                </div>
            ))}
        </>
    );
};
