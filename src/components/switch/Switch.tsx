import React, { useState } from 'react';
import { FormControlLabel, FormGroup, Switch as MaterialSwitch } from '@material-ui/core';

type Props = {
    label: string;
};

export const Switch: React.FC<Props> = (props: Props) => {
    const [checked, setChecked] = useState(true);
    const { label } = props;
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <MaterialSwitch
                        color="primary"
                        size="medium"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                }
                label={label}
                labelPlacement="start"
            />
        </FormGroup>
    );
};
