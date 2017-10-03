import React from 'react';
import { AddExpensePage } from '../../components/AddExpense';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expense.fixture';

let startAddExpense, history, wrapper;

beforeEach(()=>{
  startAddExpense = jest.fn();
  history = { push: jest.fn()};
  wrapper = shallow(<AddExpensePage history={history} startAddExpense={startAddExpense}/>);
})
test("should add new expense on dispatch", ()=>{
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", ()=>{
  const expense = expenses[0];
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expense);
})