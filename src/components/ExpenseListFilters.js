import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filtersActions';

export class ExpenseListFilters extends Component{
  state={
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate})=>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }

  onFocusChange = (calendarFocused)=>{
    this.setState(()=>({calendarFocused}))
  }

  onTextChange = (e)=> {
    const text = e.target.value;
    this.props.setTextFilter(text);
  }

  onSortChange = (e)=>{
    if(e.target.value === 'date'){
      this.props.sortByDate();
    }else if( e.target.value === 'amount'){
      this.props.sortByAmount();
    }
  }

  render(){
    return(
      <div>
        <label htmlFor="search">Search:</label> 
        <input 
          name="search"
          type="text" 
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <label htmlFor="sort">Sort By:</label>
        <select 
          name="sort" 
          value={this.props.filters.sortBy}
          onChange = {this.onSortChange}
          >
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


const mapStateToProps = (state)=>({filters:state.filters})

const mapDispatchToProps = (dispatch)=>(
  {
    setTextFilter:(text) => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate)=> dispatch(setEndDate(endDate)),
  }
)


export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);

