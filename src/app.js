import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { startSetExpenses } from './actions/expensesActions';
import { setTextFilter,sortByAmount,sortByDate } from './actions/filtersActions';
import {firebase} from './firebase/firebase';


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);


ReactDOM.render(<p>Loading...</p>, document.querySelector("#app"));
store.dispatch(startSetExpenses()).then(()=>{
  ReactDOM.render(jsx, document.querySelector("#app"));
});

firebase.auth().onAuthStateChanged((user)=>{
  if(user){
    console.log('log out');
  }else{
    console.log('log out');
  }
})