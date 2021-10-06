import React from 'react';
import { FormControlLabel, FormGroup, Switch as MaterialSwitch } from '@material-ui/core';

type Props = {
    label: string;
    toggle: (arg: boolean) => void;
    value: boolean;
};

export const Switch: React.FC<Props> = (props: Props) => {
    const { label, toggle, value } = props;

    return (
        <FormGroup>
            <FormControlLabel
                control={<MaterialSwitch color="primary" size="medium" checked={value} />}
                label={label}
                onClick={() => toggle(!value)}
                labelPlacement="start"
            />
        </FormGroup>
    );
};
