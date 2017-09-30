import React from 'react';
import ExpenseForm from './../../components/ExpenseForm';
import moment from 'moment';
import { shallow } from 'enzyme';
import expenses from './../fixtures/expense.fixture';

test("should render ExpenseForm correctly", ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseForm with data correctly", ()=>{
  const state = expenses[1];
  const wrapper = shallow(<ExpenseForm {...state}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render error for invalid form submission", ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {preventDefault:()=>{}});

  // If there's an error the error string's length is > 0
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

// Test if the description state is set for input change
test("should update the description in state if description change is submitted", ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(0).simulate('change', {target:{value: "new value"}});
  expect(wrapper).toMatchSnapshot();
});

// Test if the amount state is set for input change
test("should update the amount in state if valid input is submitted", ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(1).simulate('change', {target:{value: 900}});
  expect(wrapper.state('amount')).toBe(900);
  expect(wrapper).toMatchSnapshot();
});

// Test if the amount state is set for input change
test("should not update the amount in state if invalid input was submitted", ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(1).simulate('change', {target:{value: '12few'}});
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});

// Test if the textarea state is set for input change
test("should update the textarea in state if textarea onChange is submitted", ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('input').at(1).simulate('change', {target:{value: "new text from test"}});
  expect(wrapper).toMatchSnapshot();
});

// Test onSubmit with properties
test("should call onSubmit with valid props", ()=>{
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
  expect(wrapper.find('form').simulate('submit', {
    preventDefault:()=> {}
  }));

  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description:expenses[0].description,
    note: expenses[0].note,
    amount:expenses[0].amount,
    createdAt: expenses[0].createdAt
  })
});

// Test onDateChange props
test("should set new date on date change",()=>{
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
})

// Test onFocusChange props
test("should change calendarFocused on focus change", ()=>{
  const wrapper = shallow(<ExpenseForm/>);
  const focused =true;
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
  expect(wrapper.state('calendarFocused')).toBe(focused)
})





