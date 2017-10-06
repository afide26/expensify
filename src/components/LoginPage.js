import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from './../actions/Auth';

export const LoginComponent = ({startLogin})=>{
  return(
    <div className="login">
      <form name="Login" className="login">
        <button onClick={startLogin}>Login with Google</button>
      </form> 
    </div>
  )
}


const mapDispatchToProps = (dispatch)=>{
  return{
    startLogin: ()=> dispatch(startLogin())
  }
};

export default connect(undefined,mapDispatchToProps)(LoginComponent)