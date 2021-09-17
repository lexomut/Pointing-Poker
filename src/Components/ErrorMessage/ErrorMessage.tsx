import Popover from '@material-ui/core/Popover';
import React from 'react';
import styles from './ErrorMessage.module.scss';

interface ErrorMessageProps {
    id: 'simple-popover' | undefined;
    open: boolean;
    anchorEl: HTMLButtonElement | null;
    onClose: () => void;
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ id, open, anchorEl, onClose, message }) => {
    return (
        <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <p className={styles.error}>{message}</p>
        </Popover>
    );
};

export default ErrorMessage;
