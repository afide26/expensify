import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filtersActions';

class ExpenseListFilters extends Component{
  state={
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate})=>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocused)=>{
    this.setState(()=>({calendarFocused}))
  }

  render(){
    return(
      <div>
        <label htmlFor="search">Search:</label> 
        <input 
          name="search"
          type="text" 
          value={this.props.filters.text}
          onChange={(e)=>{
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <label htmlFor="sort">Sort By:</label>
        <select 
          name="sort" 
          value={this.props.filters.sortBy}
          onChange={(e)=> 
          e.target.value ==='date' ? this.props.dispatch(sortByDate()) :      
          this.props.dispatch(sortByAmount())}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput ={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          showClearDates={true}
          isOutsideRange={()=> false}
        />
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return{
    filters:state.filters
  }
}


export default connect(mapStateToProps)(ExpenseListFilters);

