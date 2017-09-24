import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

const ExpenseList = (props)=>(
  <div>
    <h2>Expense List - {props.expenses.length>0 ? props.expenses.length : <small><em>No records found</em></small>} </h2>
    <ul>
      <li>
        {props.expenses.map((expense)=>(
          <ExpenseListItem 
            key={expense.id} 
            {...expense}
          />
        ))}
      </li>
    </ul>
  </div>
);

const mapStateToProps = (state)=>(
  {
    expenses:selectedExpenses(state.expenses, state.filters)
  }
)

export default connect(mapStateToProps)(ExpenseList)

