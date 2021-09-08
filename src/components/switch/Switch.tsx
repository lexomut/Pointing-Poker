import React from 'react';
import { FormControlLabel, FormGroup, Switch as MaterialSwitch } from '@material-ui/core';

type Props = {
    checked: boolean;
    onChange: () => void;
    label: string;
};
export const Switch: React.FC<Props> = (props: Props) => {
    const { checked, onChange, label } = props;
    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <MaterialSwitch
                        color="primary"
                        size="medium"
                        checked={checked}
                        onChange={onChange}
                    />
                }
                label={label}
                labelPlacement="start"
            />
        </FormGroup>
    );
};
