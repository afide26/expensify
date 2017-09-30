import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ()=>(
  <header className="header">
    <img src="../../images/AFavicon.png" className="header__image"/>
    <h1 className="header__title">Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
  </header>
)


export default Header;