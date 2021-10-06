import { CurrentUser, GlobalState } from '../types/GlobalState';
import { User } from '../types/user';
import { Card, GameSettingsInterface } from '../types/game';

export const initState: GlobalState = {
    ws: { status: false, provider: undefined },
    popup: '',
    chatOpen: false,
    temporaryDialerSettings: {
        gameSettings: {
            dealerIsPlaying: false,
            scoreType: '',
            shortScoreType: '',
            isTimerNeeded: false,
            changingCardInRoundEnd: false,
        } as GameSettingsInterface,
        cards: [],
        cartBackClass: 'bgMountains',
    },

    currentUser: {
        userID: '',
        firstName: 'Alex',
        lastName: 'Pirozerskiy',
        roleInGame: 'player',
        jobPosition: 'junior',
        initials: 'AP',
    } as CurrentUser,
    game: {
        title: '',
        chatMessages: [],
        gameID: undefined,
        users: [],
        status: 'new',
        startTimer: undefined,
        cartBackClass: 'bgMountains',
        kickedUsersID: [],
        vote: undefined,
        pendingUsers: [],
        statistic: [],
        dealer: {
            userID: '',
            firstName: '',
            lastName: '',
            roleInGame: 'player',
            jobPosition: '',
            initials: '',
        } as User,
        issues: [],
        cards: [],
        selectedCards: [
            {
                card: {
                    id: '123',
                    value: '1',
                } as Card,
                user: {
                    userID: '3434',
                    firstName: 'Alex',
                    lastName: 'Pirozerskiy',
                    roleInGame: 'player',
                    jobPosition: 'junior',
                    initials: 'AP',
                } as User,
            },
        ],
        gameSettings: {
            dealerIsPlaying: false,
            scoreType: '',
            shortScoreType: '',
            isTimerNeeded: false,
            changingCardInRoundEnd: false,
        } as GameSettingsInterface,
        round: {
            issueID: '',
            roundID: '',
            status: 'pending',
        },
    },
};
