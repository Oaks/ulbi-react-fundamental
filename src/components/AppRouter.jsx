import React from "react";
import {Route, Switch} from 'react-router-dom';
import {routes} from '../router';

const AppRouter = () => {
    return (
        <Switch>
            {routes.map((route, index) =>
                <Route
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    key={index}
                />
            )}
        </Switch>
    )
}

export default AppRouter;

