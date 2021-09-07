import React from 'react';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Button, IssueButton } from './components/buttons';

const App: React.FC = () => {
    return (
        <div>
            <Button variant="contained" onClick={() => alert('Put logic here')}>
                start game
            </Button>
            <Button variant="outlined" onClick={() => alert('Put logic here')}>
                cancel game
            </Button>
            <IssueButton onClick={() => alert('Put logic here')} />
            <ThreeDRotation />
        </div>
    );
};

export default App;
