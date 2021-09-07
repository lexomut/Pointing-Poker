import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Switch } from './components/switch';

const App: React.FC = () => {
    const [switchOne, setSwitchOne] = useState(true);
    return (
        <div>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <Switch
                label="Scrum master as player:"
                checked={switchOne}
                onChange={() => setSwitchOne(!switchOne)}
            />
        </div>
    );
};

export default App;
