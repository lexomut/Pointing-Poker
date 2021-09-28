import React from 'react';
import { UserCard } from './UserCard';

export const DemoUserCards: React.FC = () => {
    return (
        <>
            <UserCard
                name="Mark"
                initials="MZ"
                position="junior front-end developer"
                userID={1}
                size="large"
            />
            <UserCard
                name="Linda Atkins"
                initials="LA"
                position="senior"
                currentUser
                userID={1}
                size="large"
            />
            <UserCard
                name="Barsik"
                initials="JL"
                position="junior lion"
                imgSrc="https://placekitten.com/200/200"
                userID={1}
                size="large"
            />
            <UserCard
                name="Max "
                initials="MM"
                position="middle"
                imgSrc="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                userID={2}
                size="large"
            />
        </>
    );
};
