import React from 'react';
import { UserCard } from './UserCard';

export const DemoUserCards: React.FC = () => {
    return (
        <>
            <UserCard
                name="Mark"
                initials="MZ"
                jobPosition="junior front-end developer"
                UserID={1}
            />
            <UserCard
                name="Linda Atkins"
                initials="LA"
                jobPosition="senior"
                currentUser
                UserID={1}
            />
            <UserCard
                name="Barsik"
                initials="JL"
                jobPosition="junior lion"
                imgSrc="https://placekitten.com/200/200"
                UserID={1}
            />
            <UserCard
                name="Max "
                initials="MM"
                jobPosition="middle"
                imgSrc="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                UserID={2}
            />
        </>
    );
};
