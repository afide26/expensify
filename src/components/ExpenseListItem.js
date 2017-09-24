import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description,note, amount, createdAt})=>{
  return(
    <div>
      <Link to={`/edit/${id}`}>
        <h3><strong>{description}</strong></h3>
      </Link>
      <p>Amount due: ${amount}</p>
      <p>Note: <em>{note}</em></p>
      <code>Created at: {moment(createdAt).format("MMMM Do, YYYY")}</code>
      <hr/>
    </div>
  )
}


export default ExpenseListItem;