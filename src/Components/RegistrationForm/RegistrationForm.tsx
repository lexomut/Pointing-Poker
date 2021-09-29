import { Avatar, Button, InputLabel, TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React, { Dispatch, useContext, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import UploadButton from '../UploadButton';
import styles from './RegistrationForm.module.scss';
import { CreateUserInterface, createUser } from '../../api/CreateUser';
import { NewSwitch } from '../NewSwitch';
import { Action, CurrentUser, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SET_CURRENT_USER } from '../../state/ActionTypesConstants';

interface IRegistrationForm {
    setOpen: (value: React.SetStateAction<boolean>) => void;
    isDealer: boolean;
}

export const RegistrationForm: React.FC<IRegistrationForm> = ({ setOpen, isDealer }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [isObserver, setIsObserver] = useState(false);
    const [avatar, setAvatar] = useState<File>();
    const history = useHistory();
    const [isConnecting, setIsConnecting] = useState(false);
    const { dispatch, globalState }: { dispatch: Dispatch<Action>; globalState: GlobalState } =
        useContext(GlobalContext);
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let jobPosition: 'dealer' | 'observer' | 'player';
        switch (true) {
            case isDealer:
                jobPosition = 'dealer';
                break;
            case isObserver:
                jobPosition = 'observer';
                break;
            default:
                jobPosition = 'player';
        }
        if (firstName.trim() !== '') {
            const data: CreateUserInterface = {
                firstName,
                lastName,
                jobPosition: job,
                role: jobPosition,
                avatar,
            };
            setIsConnecting(true);
            const currentUser: CurrentUser | undefined = await createUser(data);
            setIsConnecting(false);
            if (!currentUser?.userID) return;
            dispatch({ type: SET_CURRENT_USER, payLoad: currentUser });
            history.push(`/${globalState.game.gameID}/lobby`);
        }
    };
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
                    {!isDealer && (
                        <div className={styles.SwitchContainer}>
                            <NewSwitch
                                label="Connect as Observer"
                                setObserver={setIsObserver}
                                isObserver={isObserver}
                            />
                        </div>
                    )}
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
                <Button
                    disabled={isConnecting}
                    color="primary"
                    className={styles.btn}
                    type="submit"
                    variant="contained"
                    
                >
                    {isConnecting ? <CircularProgress /> : 'Confirm'}
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
