import { Avatar, Button, InputLabel, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import UploadButton from '../UploadButton';
import styles from './RegistrationForm.module.scss';
import { CreateUser, createUser } from '../../api/CreateUser';
import { NewSwitch } from '../NewSwitch';

interface IRegistrationForm {
    setOpen: (value: React.SetStateAction<boolean>) => void;
}

export const RegistrationForm: React.FC<IRegistrationForm> = ({ setOpen }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [position, setObserver] = useState(false);
    const [data, setData] = useState<CreateUser>();
    const [avatar, setAvatar] = useState<File>();
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (firstName.trim() !== '') {
            setData({ firstName, lastName, job, position, avatar });
            history.push('/lobby');
        }
    };
    useEffect(() => {
        if (data) createUser(data);
    }, [data]);

    const inputData = [
        {
            label: 'Your first name:',
            required: true,
            value: firstName,
            onChange: setFirstName,
            name: 'firstName',
        },
        {
            label: 'Your first name:',
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

    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Connect to lobby</h2>
                    <div className={styles.SwitchContainer}>
                        <NewSwitch
                            label="Connect as Observer"
                            setObserver={setObserver}
                            isObserver={position}
                        />
                    </div>
                </div>
                <div className={styles.inputs}>
                    {inputData.map(({ label, required, value, onChange, name }) => {
                        return (
                            <InputLabel key={name} htmlFor={name}>
                                {label}
                                <TextField
                                    required={required}
                                    value={value}
                                    onChange={(e) => onChange(e.target.value)}
                                    id="filled-error-helper-text"
                                    type="text"
                                    name={name}
                                    variant="outlined"
                                />
                            </InputLabel>
                        );
                    })}

                    <div className={styles.upload}>
                        <p>Image:</p>
                        <div className={styles.upload__buttons}>
                            <UploadButton setImage={setAvatar} />
                        </div>
                        <Avatar src={avatar ? URL.createObjectURL(avatar) : '/broken-image.jpg'}>
                            {firstName && lastName ? `${firstName[0]}${lastName[0]}` : null}
                        </Avatar>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button color="primary" className={styles.btn} type="submit" variant="contained">
                    Confirm
                </Button>
                <Button
                    color="primary"
                    className={styles.btn}
                    variant="outlined"
                    onClick={() => setOpen(false)}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};
