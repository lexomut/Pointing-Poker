import React, { useContext } from 'react';
import { UserCard } from '../UserCard';
import { GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { User } from '../../types/user';
import { SERVER_URL } from '../../api/url';

interface IMemberField {
    classNames: string;
}

export const MembersField: React.FC<IMemberField> = ({ classNames }) => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const users = globalState.game.users.filter((user: User) => user.roleInGame !== 'dealer');

    return (
        <div className={classNames}>
            {users.map(
                ({
                    firstName,
                    lastName,
                    jobPosition,
                    userID,
                    imgSrc,
                    initials,
                    roleInGame,
                }: User) => {
                    return (
                        <UserCard
                            initials={initials}
                            name={`${firstName} ${lastName}`}
                            jobPosition={jobPosition || ''}
                            userID={userID}
                            currentUser={userID === globalState.currentUser.userID}
                            key={userID}
                            size="large"
                            roleInGame={roleInGame}
                            imgSrc={SERVER_URL + imgSrc}
                        />
                    );
                },
            )}
        </div>
    );
};
