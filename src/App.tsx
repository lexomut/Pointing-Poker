import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { DemoGameCards, Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <DemoGameCards />
            <Footer />
        </div>
    );
};

export default App;
