import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Header, Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <Footer />
        </div>
    );
};

export default App;
