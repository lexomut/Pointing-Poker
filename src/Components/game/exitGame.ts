import { GlobalState } from '../../types/GlobalState';

export function gameExit(globalState: GlobalState, callBack: () => void): void {
    globalState.ws.provider?.changeValueOfGameProperty('users', [
        ...globalState.game.users.filter((user) => user.userID !== globalState.currentUser.userID),
    ]);
    callBack();
}
