import React from 'react';
import { Redirect, Route, Switch, useRouteMatch, Link } from 'react-router-dom';
import { NotFound } from '../notFound';

export const Invitation: React.FC = () => {
    const { path } = useRouteMatch();
    const isAuthorized = true; // DEMO => TODO replace with selector from REDUX
    const isDealer = true;

    return (
        <Switch>
            <Route exact path={`${path}`}>
                Popup to connect
                <Link to={`${path}/lobby`}>Link to lobby</Link>
            </Route>
            <Route exact path={`${path}/lobby`}>
                {isAuthorized ? <h2>Lobby for all players</h2> : <Redirect to="/" />}
                <Link to={`${path}/settings`}>Link to settings</Link>
            </Route>
            <Route exact path={`${path}/settings`}>
                {isAuthorized && isDealer ? <h2>Lobby for dealer</h2> : <Redirect to="/" />}
                <Link to={`${path}/game`}>Link to game</Link>
            </Route>
            <Route exact path={`${path}/game`}>
                {isAuthorized ? <h2>Game</h2> : <Redirect to="/" />}
                <Link to="/">Link to popup</Link>
            </Route>
            <Route exact path="*">
                <NotFound />
                <Link to="/">Link to main</Link>
            </Route>
        </Switch>
    );
};
