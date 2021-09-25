import React, { Dispatch, FC, useContext, useEffect } from 'react';
import { GlobalContext } from '../../state/Context';
import { Action, GlobalState } from '../../types/GlobalState';
import { ChatMessage } from '../../types/ChatMessage';
import { ChatMessageComponent } from './ChatMessageComponent';
import { ChatInput } from './input';
import { ADD_WS_PROVIDER_TO_GLOBAL_STATE } from '../../state/ActionTypesConstants';
import { WSProvider } from '../../api/WSProvider';
import styles from './chat.module.scss';

export const Chat: FC = () => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const chatRef = React.useRef<HTMLDivElement>(null);

    // этот useEffect перенесется в нест/:id'
    useEffect(() => {
        async function addWSProvider() {
            const provider = new WSProvider(globalState, dispatch);
            await dispatch({ type: ADD_WS_PROVIDER_TO_GLOBAL_STATE, payLoad: provider });
            globalState.ws.provider?.connects();
        }
        addWSProvider();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (globalState.game.chatMessages.length > 0) {
            if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [globalState.game.chatMessages]);

    return (
        <div className={styles.chat}>
            <div ref={chatRef} className={styles.chat__messages_container}>
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
