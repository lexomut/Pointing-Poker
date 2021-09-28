import React from 'react';
import { FormControlLabel, FormGroup, Switch as MaterialSwitch } from '@material-ui/core';

type Props = {
    label: string;
    setObserver: React.Dispatch<React.SetStateAction<boolean>>;
    isObserver: boolean;
};

export const NewSwitch: React.FC<Props> = (props: Props) => {
    const { label, setObserver, isObserver } = props;
    return (
        <FormGroup>
            <FormControlLabel
                control={<MaterialSwitch color="primary" size="medium" checked={isObserver} />}
                label={label}
                onClick={() => setObserver(!isObserver)}
                labelPlacement="start"
            />
        </FormGroup>
    );
};
