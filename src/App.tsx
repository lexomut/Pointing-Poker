import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Footer, DemoUserCards } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <DemoUserCards />
            <Footer />
        </div>
    );
};

export default App;
