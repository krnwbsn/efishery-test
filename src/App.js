import React from 'react';
import pages from './pages';
import { Switch, Route, Router } from 'react-router-dom';
import history from './history';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ROUTES } from './configs';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <CssBaseline />
        <Router
          history={history}
        >
          <Switch>
            <Route
              component={pages.Home}
              exact
              path={ROUTES.HOME()}
            />
            <Route
              component={pages.Add}
              exact
              path={ROUTES.ADD()}
            />
            <Route
              component={pages.Edit}
              exact
              path={ROUTES.EDIT(':id')}
            />
          </Switch>
        </Router>
      </main>
    );
  }
}
