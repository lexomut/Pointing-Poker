import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Lobby } from './Lobby';

test('renders game page', () => {
    const lobbyPage = render(
        <Router>
            <Lobby />
        </Router>,
    );

    expect(lobbyPage).not.toBeNull();
});
