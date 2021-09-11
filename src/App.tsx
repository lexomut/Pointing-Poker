import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { CardBack, CoffeeCard, Footer, GameCard } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <CoffeeCard />
            <GameCard value={1} scoreType="SP" isEditable={false} />
            <GameCard value={13} scoreType="SP" isEditable />
            <CardBack />
            <Footer />
        </div>
    );
};

export default App;
