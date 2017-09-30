import React from 'react';
import { AddExpensePage } from '../../components/AddExpense';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expense.fixture';

let addExpense, history, wrapper;

beforeEach(()=>{
  addExpense = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(<AddExpensePage history={history} addExpense={addExpense}/>);
})
test("should add new expense on dispatch", ()=>{
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", ()=>{
  const expense = expenses[0];
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expense);
})