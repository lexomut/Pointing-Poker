import React from 'react';
import { Button as MaterialButton } from '@material-ui/core';

interface Props {
    children: JSX.Element | JSX.Element[] | string;
    variant?: 'text' | 'outlined' | 'contained';
    onClick: () => void;
}

const Button: React.FC<Props> = (props: Props): JSX.Element => {
    const { variant, children, onClick } = props;
    return (
        <MaterialButton color="primary" variant={variant} onClick={onClick}>
            {children}
        </MaterialButton>
    );
};

Button.defaultProps = {
    variant: 'contained',
};
export default Button;
