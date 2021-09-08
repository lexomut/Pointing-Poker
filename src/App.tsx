import React from 'react';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Button, IssueButton } from './components/buttons';
import { Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    return (
        <div className={styles.container}>
            <Button variant="contained" onClick={() => alert('Put logic here')}>
                start game
            </Button>
            <Button variant="outlined" onClick={() => alert('Put logic here')}>
                cancel game
            </Button>
            <IssueButton onClick={() => alert('Put logic here')} />
            <ThreeDRotation />
            <Footer />
        </div>
    );
};

export default App;
