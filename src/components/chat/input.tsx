import React, { Dispatch, useContext, useState } from 'react';
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

    const send = () => {
        if (!wsProvider) return;
        wsProvider.sendChatMessage(text);
        setText('');
    };

    const handler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === 'NumpadEnter') send();
    };

    return (
        <Box className={styles.chat__input}>
            <Box sx={{ flexGrow: 1 }}>
                <Input
                    fullWidth
                    id="outlined-textarea"
                    multiline
                    onKeyPress={handler}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
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
                    onClick={() => send()}
                >
                    Send
                </Button>
            </Box>
        </Box>
    );
};
