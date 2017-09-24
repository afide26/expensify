import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expensesActions';

const ExpenseListItem = ({dispatch, id, description,note, amount, createdAt})=>{
  return(
    <div>
      <h3><strong>{description}</strong></h3>
      <p>Amount due: ${amount/100}.00</p>
      <p>Note: <em>{note}</em></p>
      <code>Created at: {createdAt}</code>
      <button onClick={()=>(dispatch(removeExpense({id})))}>
        Remove
      </button>
      <hr/>
    </div>
  )
}


export default connect()(ExpenseListItem);