import React, { Component } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import totalExpenses from './../selectors/expenses-total';
import selectedExpenses from './../selectors/expenses';


export class ExpensesSummary extends Component {
  expenseTerm = (expenses)=>{
    return expenses.length === 0 || expenses.length === 1
           ? 'expense'
           : 'expenses'
  }
  render(){
    return(
      <div>
        <p>You are viewing - {this.props.expenses.length} {this.expenseTerm(this.props.expenses)} </p>
        <p>The total amount of all expenses is - {numeral(this.props.totalExpenses).format('$0,0.00')}</p>
      </div>
    )
  }
}
const mapStateToProps = (state)=>(
  {
    totalExpenses: totalExpenses(selectedExpenses(state.expenses, state.filters)),
    expenses: selectedExpenses(state.expenses, state.filters)
  }
)

export default connect(mapStateToProps)(ExpensesSummary);