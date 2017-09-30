import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import { filters, altFilters } from './../fixtures/filters.fixture';
import { ExpenseListFilters } from '../../components/ExpenseListFilters.js';

let setTextFilter, sortByDate,sortByAmount, setEndDate, setStartDate, wrapper;

beforeEach(()=>{
  setTextFilter= jest.fn();
  sortByDate= jest.fn();
  sortByAmount= jest.fn();
  setStartDate= jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters = {filters}
      setTextFilter = {setTextFilter}
      sortByDate = {sortByDate}
      sortByAmount = {sortByAmount}
      setStartDate = {setStartDate}
      setEndDate = {setEndDate}
    />
  )
})

// Should render ExpenseListFilters with default values
test("should render ExpenseListFilters correctly", ()=>{
  expect(wrapper).toMatchSnapshot();
});

// Should render ExpenseListFilters with alternative values
test("should render ExpenseListFilter with altFilter correctly", ()=>{
  wrapper.setProps({filters:altFilters});
  expect(wrapper).toMatchSnapshot();
});

// Should handle text change
test("should handle textChange", ()=>{
  const value = "bill"
  wrapper.find('input').simulate('change', {target:{value}});
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
  expect(wrapper).toMatchSnapshot();
});



// Should sort the ExpenseListFilters either by date or amount
  test("should sort ExpenseListFilters by date", ()=>{
    const value = 'date';
    wrapper.setProps({filters:altFilters});
    wrapper.find('select').simulate('change', {target:{value}});
    expect(sortByDate).toHaveBeenCalled();
  });

  test("should sort ExpenseListFilters by amount", ()=>{
    const value = 'amount';
    wrapper.find('select').simulate('change', {target:{value}});
    expect(sortByAmount).toHaveBeenCalled();
  });

  // Should handle startDate and endDateChanges
  
  test("should handle date changes", ()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
  });

  // Should handle calendar focus 
  test("should handle onFocusChange", ()=>{
    const calendarFocused = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  })