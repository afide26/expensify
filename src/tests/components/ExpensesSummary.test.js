import React from 'react';
import moment from 'moment';
import expenses from './../fixtures/expense.fixture';
import { ExpensesSummary } from './../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import totalExpenses from './../../selectors/expenses-total';


let wrapper;


test("should render summary with multiple expenses", ()=>{
  const wrapper = shallow(<ExpensesSummary 
                            expenses={expenses} 
                            totalExpenses={totalExpenses(expenses)}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render summary with 1 expense", ()=>{
  const expense = [{id:2, amount: 900}]
  const wrapper = shallow(<ExpensesSummary 
                            expenses={expenses} 
                            totalExpenses={totalExpenses(expenses)}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render summary with 1 expense", ()=>{
  const expense = []
  const wrapper = shallow(<ExpensesSummary 
                            expenses={expenses} 
                            totalExpenses={totalExpenses(expenses)}/>);
  expect(wrapper).toMatchSnapshot();
});