import React, { Component } from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboard';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpensePage';
import LoginPage from './../components/LoginPage';
import NotFoundPage from './../components/NotFoundPage';

export const history = createHistory();

const AppRouter = ()=>(
  <Router history={history}>
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <Route path="/dashboard" component={ExpenseDashboardPage} />
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit/:id" component={EditExpensePage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
</Router>
);









export default AppRouter;