import React, { useCallback } from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

export const IssueButton: React.FC = (): JSX.Element => {
    const handlerClick = useCallback(() => {
        alert('Put logic here');
    }, []);
    return (
        <MaterialButton
            color="secondary"
            variant="outlined"
            onClick={handlerClick}
            endIcon={<AddIcon />}
        >
            create new issue
        </MaterialButton>
    );
};
