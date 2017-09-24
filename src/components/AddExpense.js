import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesActions';

const AddExpensePage = ({dispatch, history})=>(
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      buttonLabel="Add"
      onSubmit = {(expense)=>{
        console.log(expense);
        dispatch(addExpense(expense));
        history.push('/');
      }}
    />
  </div>
);

export default connect()(AddExpensePage);