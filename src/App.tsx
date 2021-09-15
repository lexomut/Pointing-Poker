import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <>
            <header className={styles.fakeHeader}>Header will be here</header>
            <div className={styles.fakeContent}>
                <Button>pointing-poker</Button>
                <ThreeDRotation />
            </div>
            <Footer />
        </>
    );
};

export default App;
