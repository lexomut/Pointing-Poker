import Button from '@material-ui/core/Button/Button';
import React, { Dispatch, useContext } from 'react';
import styles from './VoteForm.module.scss';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';

export const VoteForm: React.FC = () => {
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        globalState.ws.provider?.sendVote(true);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Vote</h2>
                </div>
            </div>
            <h4>
                {`user ${globalState.game.vote?.author.firstName}
             prompts to kick out  ${
                 globalState.game.users.find(
                     (user) => user.userID === globalState.game.vote?.kickID,
                 )?.firstName
             }`}
            </h4>
            <div className={styles.buttons}>
                <Button color="primary" className={styles.btn} type="submit" variant="contained">
                    Kick user
                </Button>
                <Button
                    color="primary"
                    className={styles.btn}
                    variant="outlined"
                    onClick={() => globalState.ws.provider?.sendVote(false)}
                >
                    Don &#39; t kick
                </Button>
            </div>
        </form>
    );
};
