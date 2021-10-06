import React, { useContext } from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { GlobalContext } from '../../state/Context';
import { GlobalState } from '../../types/GlobalState';
import styles from './LinkToLobby.module.scss';

export const LinkToLobby: () => JSX.Element = () => {
    const { globalState }: { globalState: GlobalState } = useContext(GlobalContext);
    const currentURL = `${window.location.origin}/${globalState.game.gameID}`;

    return (
        <div className={styles.linkToLobby}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField
                        id="outlined-read-only-input"
                        label="Link to lobby"
                        fullWidth
                        defaultValue={currentURL}
                        InputProps={{
                            readOnly: true,
                            endAdornment: (
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={() => {
                                        navigator.clipboard.writeText(currentURL);
                                    }}
                                    endIcon={<FileCopyIcon />}
                                >
                                    Copy
                                </Button>
                            ),
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};
