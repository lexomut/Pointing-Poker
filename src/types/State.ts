export interface State {
    chatMessages: Array<ChatMessage>;
}
export interface ChatMessage {
    author: string;
    text: string;
}
