import Button from '@material-ui/core/Button/Button';
import React, { Dispatch, useContext } from 'react';
import styles from './LetInUserToGameForm.module.scss';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { User } from '../../types/user';

type Props = {
    user: User;
};

export const LetInUserToGameForm = (props: Props): JSX.Element => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const { user } = props;

    const getOutPendingUsers = async () => {
        await globalState.ws.provider?.changeValueOfGameProperty('pendingUsers', [
            ...globalState.game.pendingUsers.filter(
                (pendingUser) => pendingUser.userID !== user.userID,
            ),
        ]);
    };
    if (globalState.game.users.some((_user) => _user.userID === user.userID)) getOutPendingUsers();

    const letIn = async () => {
        await globalState.ws.provider?.changeValueOfGameProperty('users', [
            ...globalState.game.users,
            user,
        ]);
        await getOutPendingUsers();
        await globalState.ws.provider?.changeValueOfGameProperty('selectedCards', [
            ...globalState.game.selectedCards,
            { card: undefined, user },
        ]);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await letIn();
    };
    const cancelHandler = () => {
        globalState.ws.provider?.changeValueOfGameProperty('kickedUsersID', [
            ...globalState.game.kickedUsersID,
            user.userID,
        ]);
        getOutPendingUsers();
    };

    if (globalState.game.gameSettings.freeGameEnter) letIn();
    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Let in user</h2>
                </div>
            </div>
            <h4>{`let the user ${user.firstName} into the game`}</h4>
            <div className={styles.buttons}>
                <Button color="primary" className={styles.btn} type="submit" variant="contained">
                    let in user
                </Button>
                <Button
                    color="primary"
                    className={styles.btn}
                    variant="outlined"
                    onClick={cancelHandler}
                >
                    Kick him/her
                </Button>
            </div>
        </form>
    );
};
