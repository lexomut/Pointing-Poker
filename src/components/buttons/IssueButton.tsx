import React, { Dispatch, useContext } from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Action, PopupType } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { SET_POPUP } from '../../state/ActionTypesConstants';

export const IssueButton: React.FC = (): JSX.Element => {
    const { dispatch }: { dispatch: Dispatch<Action> } = useContext(GlobalContext);
    const handlerClick = () => {
        dispatch({ type: SET_POPUP, payLoad: 'createIssue' as PopupType });
    };
    return (
        <MaterialButton
            color="secondary"
            variant="contained"
            onClick={handlerClick}
            endIcon={<AddIcon />}
        >
            create new issue
        </MaterialButton>
    );
};
