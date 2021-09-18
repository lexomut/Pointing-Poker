import { GlobalState } from '../types/GlobalState';

export const initState: GlobalState = {
    ws: { status: false, provider: undefined },

    currentUser: {
        userID: '',
        lastName: '',
        firstName: 'Alex',
        jobPosition: 'user',
    },
    game: {
        chatMessages: [],
        gameID: '6143654cb3ea186faaeae677',
        users: [],
        status: 'new',
    },
};
