import Button from '@material-ui/core/Button/Button';
import InputLabel from '@material-ui/core/InputLabel/InputLabel';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import Select from '@material-ui/core/Select/Select';
import TextField from '@material-ui/core/TextField/TextField';
import React, { Dispatch, useContext, useState } from 'react';
import styles from './IssueCreateForm.module.scss';
import { Action, GlobalState, PopupType } from '../../types/GlobalState';
import { Issue, Priority } from '../../types/game';
import { GlobalContext } from '../../state/Context';
import { SET_POPUP } from '../../state/ActionTypesConstants';

export const IssueCreateForm: React.FC = () => {
    const { globalState, dispatch }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const [issue, setIssue] = useState<Issue>({
        name: '',
        link: '',
        priority: 'Medium',
        id: new Date().getTime().toString(36) + Math.random().toString(36).slice(2),
        dealer: true,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await globalState.ws.provider?.changeValueOfGameProperty('issues', [
            ...globalState.game.issues,
            issue,
        ]);
        dispatch({ type: SET_POPUP, payLoad: '' as PopupType });
    };
    const inputData = [
        {
            label: 'Title:',
            required: true,
            value: issue.name,
            onChange: (value: string) => {
                setIssue({ ...issue, name: value });
            },
            name: 'name',
        },
        {
            label: 'Link',
            required: false,
            value: issue.link,
            onChange: (value: string) => {
                setIssue({ ...issue, link: value });
            },
            name: 'link',
        },
    ];

    return (
        <form onSubmit={handleSubmit} className={styles.modal}>
            <div className={styles.registration}>
                <div className={styles.top}>
                    <h2>Create Issue</h2>
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
                    <InputLabel id="priority">
                        Priority
                        <Select
                            labelId="priority"
                            id="filled-error-helper-text"
                            value={issue.priority}
                            onChange={(e) => {
                                setIssue({ ...issue, priority: e.target.value as Priority });
                            }}
                            variant="outlined"
                        >
                            {['Critical', 'High', 'Medium', 'Low'].map((item) => (
                                <MenuItem key={item} value={item}>
                                    {item}
                                </MenuItem>
                            ))}
                        </Select>
                    </InputLabel>
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
                    onClick={() => dispatch({ type: SET_POPUP, payLoad: '' as PopupType })}
                >
                    Cancel
                </Button>
            </div>
        </form>
    );
};
