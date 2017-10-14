import React, { Component } from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import ExpenseDashboardPage from './../components/ExpenseDashboard';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpensePage';
import LoginPage from './../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFoundPage from './../components/NotFoundPage';

export const history = createHistory();

const AppRouter = ()=>(
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
</Router>
);









export default AppRouter;