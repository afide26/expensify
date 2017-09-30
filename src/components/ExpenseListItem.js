import React from 'react';
import moment from 'moment';
import numeral from 'numeral'
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description,note, amount, createdAt})=>{
  return(
    <div>
      <Link to={`/edit/${id}`}>
        <h3><strong>{description}</strong></h3>
      </Link>
      <p>
        Amount due: {numeral(amount).format('$0,0.00')} - 
        Created at: {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
      <p>Note: <em>{note}</em></p>
      <code></code>
      <hr/>
    </div>
  )
}


export default ExpenseListItem;