import { useState } from 'react';

const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [job, setJob] = useState('');

export const inputData = [
    {
        label: 'Your first name:',
        required: true,
        value: firstName,
        onChange: setFirstName,
        name: 'firstName',
    },
    {
        label: 'Your last name:',
        required: false,
        value: lastName,
        onChange: setLastName,
        name: 'lastName',
    },
    {
        label: 'Your job position:',
        required: false,
        value: job,
        onChange: setJob,
        name: 'job',
    },
];
