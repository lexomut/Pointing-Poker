import React from 'react';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Button } from '@material-ui/core';
import { IssueButton } from './components/buttons';
import { Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Button color="primary" variant="contained" onClick={() => alert('Put logic here')}>
                start game
            </Button>
            <Button color="primary" variant="outlined" onClick={() => alert('Put logic here')}>
                cancel game
            </Button>
            <IssueButton />
            <ThreeDRotation />
            <Footer />
        </div>
    );
};

export default App;
