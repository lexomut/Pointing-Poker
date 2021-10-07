import { GlobalState } from '../types/GlobalState';

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
            cardsBackClass: 'bgMountains',
            cardsDeckType: 'fibonacci',
            freeGameEnter: false,
            timer: 120,
        },
        cards: [],
    },

    currentUser: {
        userID: '',
        firstName: 'Alex',
        lastName: 'Pirozerskiy',
        roleInGame: 'player',
        jobPosition: 'junior',
        initials: 'AP',
    },

    game: {
        title: '',
        chatMessages: [],
        gameID: undefined,
        users: [],
        status: 'new',
        startTimer: undefined,
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
        },
        issues: [],
        cards: [],
        selectedCards: [
            {
                card: {
                    id: '123',
                    value: '1',
                },
                user: {
                    userID: '3434',
                    firstName: 'Alex',
                    lastName: 'Pirozerskiy',
                    roleInGame: 'player',
                    jobPosition: 'junior',
                    initials: 'AP',
                },
            },
        ],
        gameSettings: {
            dealerIsPlaying: false,
            scoreType: '',
            shortScoreType: '',
            isTimerNeeded: false,
            changingCardInRoundEnd: false,
            cardsBackClass: 'bgMountains',
            cardsDeckType: 'fibonacci',
            freeGameEnter: false,
            timer: 120,
        },

        round: {
            issueID: '',
            roundID: '',
            status: 'pending',
        },
    },
};
