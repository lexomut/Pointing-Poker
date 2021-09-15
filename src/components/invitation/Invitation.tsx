import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

export const Invitation: React.FC = () => {
    const { path } = useRouteMatch();
    const isAuthorized = true; // DEMO => TODO replace with selector from REDUX
    const isDealer = true;

    return isAuthorized ? (
        <Switch>
            <Route exact path={`${path}`}>
                Popup to connect
            </Route>
            <Route exact path={`${path}/lobby`}>
                Lobby for all players
            </Route>
            {isDealer && (
                <Route exact path={`${path}/settings`}>
                    Lobby for dealer
                </Route>
            )}
            <Route exact path={`${path}/game`}>
                Game
            </Route>
            <Route exact path="*">
                404
            </Route>
        </Switch>
    ) : (
        <Switch>
            <Route exact path={`${path}`}>
                Popup to connect
            </Route>
            <Route exact path="*">
                404
            </Route>
        </Switch>
    );
};
