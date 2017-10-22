import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import totalExpenses from './../selectors/expenses-total';
import selectedExpenses from './../selectors/expenses';


export const ExpensesSummary =({expensesCount, totalExpenses}) => {
  const expenseTerm = (expenses)=>{
    return expenses === 0 || expenses=== 1
           ? 'expense'
           : 'expenses'
  };

  const formattedAmount = (amount)=>{
    return numeral(amount).format('$0,0.00');
  }

  return(
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing - <span>{expensesCount}</span> {expenseTerm(expensesCount)}  
          - totalling: <span>{formattedAmount(totalExpenses)}</span>
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}




const mapStateToProps = (state)=>{
  const filteredExpenses = selectedExpenses(state.expenses, state.filters);
  return{
    expensesCount: filteredExpenses.length,
    totalExpenses: totalExpenses(filteredExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary);