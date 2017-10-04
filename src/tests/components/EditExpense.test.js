import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expense.fixture';

let editExpense, history, startRemoveExpense, wrapper;

beforeEach(()=>{
  editExpense= jest.fn();
  history= {push:jest.fn()};
  startRemoveExpense = jest.fn();
  wrapper = shallow(<EditExpensePage 
                      history={history} 
                      editExpense={editExpense} 
                      startRemoveExpense={startRemoveExpense}
                      expense={expenses[0]}
                      />);
})

test('should render EditExpensePage', ()=>{
  expect(wrapper).toMatchSnapshot();
});

test("should handle EditExpense", ()=>{
  const expense = expenses[0]
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test("should handle RemoveExpense",()=>{
  const expense = expenses[0];
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expense.id})
});
