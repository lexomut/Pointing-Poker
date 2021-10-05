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
        dealer: {
            userID: '',
            firstName: '',
            lastName: '',
            roleInGame: 'player',
            jobPosition: '',
            initials: '',
        } as User,
        issues: [
            {
                name: 'InitState',
                priority: 'Low',
                current: true,
                dealer: false,
                id: '111',
                score: '-',
                statistic: [
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                ],
            },
            {
                name: 'InitState2',
                priority: 'Critical',
                current: false,
                dealer: true,
                id: '112',
                score: '-',
                statistic: [
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                ],
            },
            {
                name: 'InitState3',
                priority: 'High',
                current: false,
                dealer: false,
                id: '113',
                score: '-',
                statistic: [
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                    { id: '234', value: '545', voteResult: '45%' },
                ],
            },
        ],
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
