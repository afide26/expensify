import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect} from 'react-router-dom';
import Header from './../components/Header';

export const PrivateRoute = ({
  isAuthenticated, 
  component:Component,
  ...rest
})=>(
  <Route {...rest} component={()=> (
      isAuthenticated ? (
        <div>
          <Header/>
          <Component {...rest} />
        </div>
      ):(
        <Redirect to="/"/>
      )
    )} />
);

const mapStateToProps = (state)=>(
  {
    isAuthenticated: !!state.auth.uid
  }
);

export default connect(mapStateToProps)(PrivateRoute);