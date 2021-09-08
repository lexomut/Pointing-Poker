import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Switch } from './components/switch';
import { Footer } from './components';
import styles from './style.module.scss';

const App: React.FC = () => {
    const [switchOne, setSwitchOne] = useState(true);
    return (
        <div className={styles.container}>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <Switch
                label="Scrum master as player:"
                checked={switchOne}
                onChange={() => setSwitchOne(!switchOne)}
            />
            <Footer />
        </div>
    );
};

export default App;
