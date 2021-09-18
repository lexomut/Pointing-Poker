import { Avatar, Button, InputLabel, Switch, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import UploadButton from '../UploadButton';
import styles from './RegistrationForm.module.scss';
import { IFormData } from '../../types';
import { createUser } from '../../api/server';

interface IRegistrationForm {
    setOpen: (value: React.SetStateAction<boolean>) => void;
}

const RegistrationForm: React.FC<IRegistrationForm> = ({ setOpen }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [observer, setObserver] = useState(false);
    const [data, setData] = useState<IFormData>();
    const [image, setImage] = useState<File>();
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (firstName.trim() !== '') {
            setData({ firstName, lastName, job, observer, image });
            history.push('/lobby');
        }
    };
    useEffect(() => {
        if (data) createUser(data);
    }, [data]);

    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Connect to lobby</h2>
                    <p>
                        Connect as <br /> Observer
                    </p>
                    <Switch value={observer} onChange={() => setObserver(!observer)} />
                </div>
                <div className={styles.inputs}>
                    <InputLabel htmlFor="firstName">
                        Your first name:
                        <TextField
                            required
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            id="filled-error-helper-text"
                            type="text"
                            name="firstName"
                            variant="outlined"
                        />
                    </InputLabel>

                    <InputLabel htmlFor="lastName">
                        Your last name:
                        <TextField
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            id="filled-error-helper-text"
                            variant="outlined"
                            name="lastName"
                        />
                    </InputLabel>

                    <InputLabel htmlFor="job">
                        Your job position:
                        <TextField
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            id="filled-error-helper-text"
                            name="job"
                            variant="outlined"
                        />
                    </InputLabel>

                    <div className={styles.upload}>
                        <p>Image:</p>
                        <div className={styles.upload__buttons}>
                            <UploadButton setImage={setImage} />
                        </div>
                        <Avatar src={image ? URL.createObjectURL(image) : '/broken-image.jpg'}>
                            {firstName && lastName ? `${firstName[0]}${lastName[0]}` : null}
                        </Avatar>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button className={styles.btn} type="submit" variant="outlined">
                    Confirm
                </Button>
                <Button className={styles.btn} variant="outlined" onClick={() => setOpen(false)}>
                    Cancel
                </Button>
            </div>
        </form>
    );
};

export default RegistrationForm;
