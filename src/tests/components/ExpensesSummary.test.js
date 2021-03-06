import React from 'react';
import moment from 'moment';
import expenses from './../fixtures/expense.fixture';
import { ExpensesSummary } from './../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import totalExpenses from './../../selectors/expenses-total';


let wrapper;


test("should render summary with multiple expenses", ()=>{
  const wrapper = shallow(<ExpensesSummary 
                            expensesCount={3} 
                            totalExpenses={2300030}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render summary with 1 expense", ()=>{
  const expense = [{id:2, amount: 900}]
  const wrapper = shallow(<ExpensesSummary 
                            expensesCount={1} 
                            totalExpenses={500}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render summary without any expense", ()=>{
  const expense = []
  const wrapper = shallow(<ExpensesSummary 
                            expensesCount={0} 
                            totalExpenses={0}/>);
  expect(wrapper).toMatchSnapshot();
});