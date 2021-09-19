import React, { Dispatch, FC, useContext, useState } from 'react';
import { Button, TextField, Box } from '@material-ui/core';
import Send from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import { Action, GlobalState } from '../../types/GlobalState';
import { GlobalContext } from '../../state/Context';
import { WSProvider } from '../../api/WSProvider';
import './chat.scss';

const useStyles = makeStyles(() => ({
    button: {
        margin: ' 5px',
    },
}));

export const ChatInput: FC = () => {
    const classes = useStyles();
    const { globalState }: { globalState: GlobalState; dispatch: Dispatch<Action> } =
        useContext(GlobalContext);
    const [text, setText] = useState<string>('');
    const wsProvider: WSProvider | undefined = globalState.ws.provider;
    function send() {
        if (!wsProvider) return;
        wsProvider.sendChatMessage(text);
        setText('');
    }
    return (
        <div className="chat__input">
            <Box sx={{ flexGrow: 1 }}>
                <TextField
                    fullWidth
                    id="outlined-textarea"
                    multiline
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    variant="outlined"
                    size="small"
                    disabled={!globalState.ws.status}
                />
            </Box>
            <Box>
                <Button
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
        </div>
    );
};
