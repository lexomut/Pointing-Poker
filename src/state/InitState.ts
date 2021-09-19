import { GlobalState } from '../types/GlobalState';

export const initState: GlobalState = {
    ws: { status: false, provider: undefined },

    currentUser: {
        userID: '',
        firstName: 'Alex',
        lastName: 'Pirozerskiy',
        role: 'player',
        jobPosition: 'junior',
        initials: 'AP',
    },
    game: {
        chatMessages: [],
        gameID: '614705fa65ac5609b1bf41c7',
        users: [],
        status: 'new',
    },
};
