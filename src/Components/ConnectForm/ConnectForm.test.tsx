import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import { ConnectForm } from './ConnectForm';

test('click connection form, show registration form', () => {
    const { getByTestId } = render(
        <Router>
            <ConnectForm id="kfsldkkskf" open isDealer setOpen={() => {}} setIsDealer={() => {}} />
        </Router>,
    );
    const node = getByTestId('show-registration-form-btn');
    fireEvent.click(node);
});
