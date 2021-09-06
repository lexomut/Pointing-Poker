import React from 'react';
import { Button } from '@material-ui/core';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import { Footer } from './components';

const App: React.FC = () => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <Button>pointing-poker</Button>
            <ThreeDRotation />
            <Footer />
        </div>
    );
};

export default App;
