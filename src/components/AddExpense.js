import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expensesActions';


export class AddExpensePage extends Component{
  onSubmit = (expense)=>{
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }

  render(){
    return(
    <div>
      <div className="page-header">
        <div className="content-container">
        <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          buttonLabel="Add"
          onSubmit = {this.onSubmit}
        />
      </div>
    </div>   
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    startAddExpense: (expense)=> dispatch(startAddExpense(expense))
  }
}
export default connect(undefined, mapDispatchToProps)(AddExpensePage);