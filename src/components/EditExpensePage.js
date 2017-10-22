import React, { Component } from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startEditExpense,startRemoveExpense } from '../actions/expensesActions';

export class EditExpensePage extends Component{
  onSubmit = (expense)=>{
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };

  onRemove = ()=>{
    this.props.startRemoveExpense({id:this.props.expense.id})
    this.props.history.push('/');
  };

  render(){
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm 
              buttonLabel = "Save Expense" 
              expense = {this.props.expense}
              onSubmit={this.onSubmit}
          />
          <button
            className="button button-secondary"
            style={{width:"100%"}}
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
    startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
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