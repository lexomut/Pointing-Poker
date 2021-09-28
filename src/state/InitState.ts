import { CurrentUser, GlobalState } from '../types/GlobalState';
import { User } from '../types/user';
import { Card, GameSettings } from '../types/game';

export const initState: GlobalState = {
    ws: { status: false, provider: undefined },

    currentUser: {
        userID: '3434',
        firstName: 'Alex',
        lastName: 'Pirozerskiy',
        role: 'player',
        jobPosition: 'junior',
        initials: 'AP',
    } as CurrentUser,
    game: {
        chatMessages: [],
        gameID: '614705fa65ac5609b1bf41c7',
        users: [],
        status: 'new',
        startTimer: undefined,
        dealer: {
            userID: '3434',
            firstName: 'Alex',
            lastName: 'Pirozerskiy',
            role: 'player',
            jobPosition: 'junior',
            initials: 'AP',
        } as User,
        issues: [],
        cards: [],
        selectedCards: [
            {
                card: {
                    id: 123,
                    value: 1,
                    scoreType: '',
                    isEditable: false,
                } as Card,
                user: {
                    userID: '3434',
                    firstName: 'Alex',
                    lastName: 'Pirozerskiy',
                    role: 'player',
                    jobPosition: 'junior',
                    initials: 'AP',
                } as User,
            },
        ],
        gameSettings: {
            dealerIsPlaying: false,
            scoreType: '',
            shortScoreType: '',
        } as GameSettings,
    },
};
