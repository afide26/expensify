import React from 'react';
import ExpenseList from './../../components/ExpenseList';
import ExpenseListFilters from './../../components/ExpenseListFilters';
import ExpenseDashboard from './../../components/ExpenseDashboard';
import { shallow } from 'enzyme';


test("should render the ExpenseListDashboard with children", ()=>{
  const wrapper = shallow(<ExpenseDashboard/>);
  expect(wrapper).toMatchSnapshot();
})