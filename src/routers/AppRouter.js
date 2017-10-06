import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';


import Header from './../components/Header';
import ExpenseDashboardPage from './../components/ExpenseDashboard';
import AddExpensePage from './../components/AddExpense';
import EditExpensePage from './../components/EditExpensePage';
import LoginComponent from './../components/LoginPage';
import NotFoundPage from './../components/NotFoundPage';

const AppRouter = ()=>(
  <BrowserRouter>
  <div>
    <Header/>
    <Switch>
      <Route path="/" component={LoginComponent} exact={true}/>
      <Route path="/dashboard" component={ExpenseDashboardPage} />
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit/:id" component={EditExpensePage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </div>
</BrowserRouter>
);









export default AppRouter;