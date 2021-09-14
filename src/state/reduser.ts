import { ChatMessage } from '../types/ChatMessage';
import { State } from '../types/State';

export type Action =
    | { type: 'addChatMessage'; payLoad: ChatMessage }
    | { type: 'doSameThink'; payLoad: unknown };

export function reducer(state: State, action: Action) {
    switch (action.type) {
        case 'addChatMessage': {
            const chatMessage = action.payLoad;
            return { ...state, chatMessages: [...state.chatMessages, chatMessage] };
        }
        default:
            throw new Error('unknown action');
    }
}
