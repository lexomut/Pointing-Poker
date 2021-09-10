import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { UserCard, Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <UserCard
                name="Mark"
                initials="MZ"
                position="junior front-end developer"
                onKick={() => {
                    alert('kick off');
                }}
            />
            <UserCard name="Linda Atkins" initials="LA" position="senior" currentUser />
            <UserCard
                name="Barsik"
                initials="JL"
                position="junior lion"
                imgSrc="https://placekitten.com/200/200"
                onKick={() => {
                    alert('kick off');
                }}
            />
            <UserCard
                name="Max "
                initials="MM"
                position="middle"
                imgSrc="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg"
                onKick={() => {
                    alert('kick off');
                }}
            />
            <Footer />
        </div>
    );
};

export default App;
