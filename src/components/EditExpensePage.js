import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense,removeExpense } from '../actions/expensesActions';

const EditExpensePage = (props)=>{
  return(
    <div className="edit-expense">
      <ExpenseForm 
          buttonLabel = "Edit" 
          expense = {props.expense}
          onSubmit={(expense)=>{
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <div className="edit-expense__remove">
        <button
          
          className="edit-expense--button"
          onClick={()=>{
            props.dispatch(removeExpense({id:props.expense.id}))
            props.history.push('/');
          }}
        >
          Remove
        </button>
      </div>
  </div>
  )
}

const mapStateToProps = (state,props)=>{
  return(
    {
      expense:state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
  )
}
export default connect(mapStateToProps)(EditExpensePage);