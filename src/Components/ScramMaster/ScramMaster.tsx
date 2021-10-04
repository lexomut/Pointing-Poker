import React, { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { UserCard } from '../UserCard';
import { User } from '../../types/user';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SERVER_URL } from '../../api/url';
import styles from './ScramMaster.module.scss';

export const ScramMaster: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const scramMaster = globalState.game.users.find((user: User) => user.roleInGame === 'dealer');
    if (!scramMaster)
        return (
            <div className={styles.scramMaster}>
                <Typography>Scrum master:</Typography>
                Loading...
            </div>
        );
    const { initials, firstName, lastName, jobPosition, userID, roleInGame, imgSrc } = scramMaster;
    return (
        <div className={styles.scramMaster}>
            <Typography>Scrum master:</Typography>
            <UserCard
                initials={initials}
                name={`${firstName} ${lastName}`}
                jobPosition={jobPosition || ''}
                userID={userID}
                currentUser={userID === globalState.currentUser.userID}
                roleInGame={roleInGame}
                size="large"
                imgSrc={SERVER_URL + imgSrc}
            />
        </div>
    );
};
