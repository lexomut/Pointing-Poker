import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export const Invitation: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                Popup to connect
            </Route>
            <Route exact path={`${path}/lobby`}>
                Lobby for all players
            </Route>
            <Route exact path={`${path}/settings`}>
                Lobby for dealer
            </Route>
            <Route exact path={`${path}/game`}>
                Game
            </Route>
            <Route exact path="*">
                404
            </Route>
        </Switch>
    );
};
