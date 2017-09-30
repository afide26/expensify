import React, { Component } from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesActions';


export class AddExpensePage extends Component{
  constructor(props){
    super(props);
  };

  render(){
    return(
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm
        buttonLabel="Add"
        onSubmit = {(expense)=>{
          this.props.addExpense(expense);
          this.props.history.push('/')
        }}
      />
    </div>   
    )
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addExpense: (expense)=> dispatch(addExpense(expense))
  }
}
export default connect(undefined, mapDispatchToProps)(AddExpensePage);