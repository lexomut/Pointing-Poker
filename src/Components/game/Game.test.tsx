import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Game } from './Game';

test('renders game page', () => {
    const gamePage = render(
        <Router>
            <Game />
        </Router>,
    );

    expect(gamePage).not.toBeNull();
});
