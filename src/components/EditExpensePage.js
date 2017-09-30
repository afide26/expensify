import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { editExpense,removeExpense } from '../actions/expensesActions';

export class EditExpensePage extends Component{
  onSubmit = (expense)=>{
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = ()=>{
    this.props.removeExpense({id:this.props.expense.id})
    this.props.history.push('/');
  };

  render(){
    return(
      <div className="edit-expense">
        <ExpenseForm 
            buttonLabel = "Edit" 
            expense = {this.props.expense}
            onSubmit={this.onSubmit}
        />
        <div className="edit-expense__remove">
          <button
            className="edit-expense--button"
            onClick={this.onRemove}
          >
            Remove
          </button>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch, props)=>{
  return{
    editExpense: (id,expense) => dispatch(editExpense(id,expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
  }
}
const mapStateToProps = (state,props)=>{
  return(
    {
      expense:state.expenses.find((expense)=> expense.id === props.match.params.id)
    }
  )
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);