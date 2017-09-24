import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filtersActions';

const ExpenseListFilters = (props)=>(
  <div>
    <label htmlFor="search">Search:</label> 
    <input 
      name="search"
      type="text" 
      value={props.filters.text}
      onChange={(e)=>{
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <label htmlFor="sort">Sort By:</label>
    <select 
      name="sort" 
      onChange={(e)=> 
      e.target.value ==='date' ? props.dispatch(sortByDate()) :      
      props.dispatch(sortByAmount())}>
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

const mapStateToProps = (state)=>{
  return{
    filters:state.filters
  }
}

const mapDispatchToProps = (dispatch)=>{

}

export default connect(mapStateToProps)(ExpenseListFilters);

