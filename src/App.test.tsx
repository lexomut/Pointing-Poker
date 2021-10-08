import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react main page', () => {
    render(
        <Router>
            <App />
        </Router>,
    );

    const pageElement = screen.getByText(/planning/i);

    expect(pageElement).toBeInTheDocument();
});

test('renders app', () => {
    const app = render(
        <Router>
            <App />
        </Router>,
    );

    expect(app).not.toBeNull();
});
