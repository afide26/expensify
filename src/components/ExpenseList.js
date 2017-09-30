import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export const ExpenseList = (props)=>(
  <div>
    { props.expenses.length === 0 ? (
      <p>No Expenses</p>
    ) :(
        <ul>
        <li>
          {props.expenses.map((expense)=>(
            <ExpenseListItem 
              key={expense.id} 
              id={expense.id}
              {...expense}
            />
          ))}
        </li>
      </ul>
    )}

  </div>
);

const mapStateToProps = (state)=>(
  {
    expenses:selectedExpenses(state.expenses, state.filters)
  }
)

export default connect(mapStateToProps)(ExpenseList)

