import { ChatMessage } from './ChatMessage';
import { Game } from './game';

export interface State {
    chatMessages: Array<ChatMessage>;
    game: Game;
}
