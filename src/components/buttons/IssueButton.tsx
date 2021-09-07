import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

interface Props {
    onClick: () => void;
}

const IssueButton: React.FC<Props> = (props: Props): JSX.Element => {
    const { onClick } = props;
    return (
        <MaterialButton
            color="secondary"
            variant="outlined"
            onClick={onClick}
            endIcon={<AddIcon />}
        >
            create new issue
        </MaterialButton>
    );
};

export default IssueButton;
