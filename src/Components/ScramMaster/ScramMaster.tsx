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
    const scramMaster = globalState.game.users.find((user: User) => user.role === 'dealer');
    return (
        <div className={styles.scramMaster}>
            <Typography>Scrum master:</Typography>
            {scramMaster ? (
                <UserCard
                    initials={scramMaster.initials}
                    name={`${scramMaster.firstName} ${scramMaster.lastName}`}
                    jobPosition={scramMaster.jobPosition ? scramMaster.jobPosition : ''}
                    userID={scramMaster.userID}
                    currentUser={scramMaster.userID === globalState.currentUser.userID}
                    size="large"
                    imgSrc={SERVER_URL + scramMaster.imgSrc}
                />
            ) : (
                'Loading...'
            )}
        </div>
    );
};
