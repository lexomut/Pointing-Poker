import React from 'react';
import { UserCard } from './UserCard';

export const DemoUserCards: React.FC = () => {
    return (
        <>
            <UserCard
                name="Mark"
                initials="MZ"
                jobPosition="junior front-end developer"
                userID="1"
                size="large"
                roleInGame="player"
            />
            <UserCard
                name="Linda Atkins"
                initials="LA"
                jobPosition="senior"
                currentUser
                userID="1"
                size="large"
                roleInGame="player"
            />
            <UserCard
                name="Barsik"
                initials="JL"
                jobPosition="junior lion"
                imgSrc="https://placekitten.com/200/200"
                userID="1"
                size="large"
                roleInGame="player"
            />
            <UserCard
                name="Max "
                initials="MM"
                jobPosition="middle"
                imgSrc="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                userID="2"
                size="large"
                roleInGame="player"
            />
        </>
    );
};
