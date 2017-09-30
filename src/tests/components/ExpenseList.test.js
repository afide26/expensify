import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import { shallow } from 'enzyme';

// Use dummy data from fixtures
import expenses from './../fixtures/expense.fixture';

test('should render ExpenseList with expenses', ()=>{
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseList with empty props", ()=>{
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});