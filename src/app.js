import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


import { addExpense } from './actions/expensesActions';
import { setTextFilter,sortByAmount,sortByDate } from './actions/filtersActions';

const store = configureStore();


const unsubscribe = store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses)
});

store.dispatch(addExpense({description:'Water Bill', note:'Due next week', amount: 30000, createdAt: 1406477500000}));

store.dispatch(addExpense({description:'Gas Bill', note:'due next month', amount: 4000, createdAt: 1506477600000}));

store.dispatch(addExpense({description:'Bill for Gym Membership for Krav Maga', note:'quarterly due', amount: 40000, createdAt: 1306477600000}));
store.dispatch(addExpense({description:'Bill for Web Developers Org Membership', note:'this is free for one year only', amount: 0, createdAt: 1206477600000}));
// store.dispatch(setTextFilter('Gas'));

// setTimeout(()=>{
//   store.dispatch(setTextFilter('Bill'));
// }, 3000)



const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);
unsubscribe();

ReactDOM.render(jsx, document.querySelector("#app"));
