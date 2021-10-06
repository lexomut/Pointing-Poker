import { GlobalState } from '../../types/GlobalState';

export function gameOver(globalState: GlobalState, callBack: () => void): void {
    globalState.ws.provider?.changeValueOfGameProperty('status', 'over');

    callBack();
}
