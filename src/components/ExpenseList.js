import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectedExpenses from '../selectors/expenses';

export const ExpenseList = (props)=>(
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-larger-screen">Expense</div>
      <div className="show-for-larger-screen">Amount</div>
    </div>
    <div className="list-body">
    { props.expenses.length === 0 ? (
      <div className="list-item list-item--message">
        <span>No Expenses</span>
      </div>
    ) 
    :(
        <div>
          {props.expenses.map((expense)=>(
            <ExpenseListItem 
              key={expense.id} 
              id={expense.id}
              {...expense}
            />
          ))}
        </div>
    )}
    </div>
  </div>
);

const mapStateToProps = (state)=>(
  {
    expenses:selectedExpenses(state.expenses, state.filters)
  }
)

export default connect(mapStateToProps)(ExpenseList)

