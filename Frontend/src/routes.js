import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MapPage from './pages/MapPage';
import ListPage from './pages/ListPage';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={MapPage} />
            <Route exact path='/list' component={ListPage} />
        </Switch>
    )
}
