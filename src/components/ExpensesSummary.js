import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    <div>
      <h3>You are viewing - {expensesCount} {expenseTerm(expensesCount)}  
        {'\n\n'}- Total Amount: {formattedAmount(totalExpenses)}
      </h3>
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