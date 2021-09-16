import React, { Dispatch, FC, useContext, useState } from 'react';
import { GlobalContext } from './state/Context';
import { ChatMessage } from './types/ChatMessage';
import { GlobalState } from './types/GlobalState';
import { Action } from './state/ActionTypes';
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
        <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
            <button type="button" disabled={!globalState.ws.status} onClick={send}>
                Send
            </button>
            <div>
                {globalState.game.chatMessages.map((chatMessage: ChatMessage) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={chatMessage.id}>
                        <span>{chatMessage.userName}</span> <span>{chatMessage.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
