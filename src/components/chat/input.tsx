import React, { Dispatch, useContext, useState, useEffect, useCallback } from 'react';
import { Button, Box, Input } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { WSProvider } from '../../api/WSProvider';
import styles from './chat.module.scss';

const useStyles = makeStyles(() => ({
    button: {
        margin: ' 5px',
    },
}));

export const ChatInput: React.FC = () => {
    const classes = useStyles();
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const [text, setText] = useState<string>('');
    const wsProvider: WSProvider | undefined = globalState.ws.provider;

    const send = useCallback(
        (message: string) => {
            if (!wsProvider) return;
            wsProvider.sendChatMessage(message);
            setText('');
        },
        [setText, wsProvider],
    );

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                event.preventDefault();
                send(text);
            }
        };
        document.addEventListener('keydown', listener);
        return () => {
            document.removeEventListener('keydown', listener);
        };
    }, [text, send]);

    return (
        <Box className={styles.chat__input}>
            <Box sx={{ flexGrow: 1 }}>
                <Input
                    fullWidth
                    id="outlined-textarea"
                    multiline
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    disabled={!globalState.ws.status}
                />
            </Box>
            <Box>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Send />}
                    disabled={!globalState.ws.status}
                    onClick={() => send(text)}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
};
