import React from 'react';
import ExpenseListItem from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expense.fixture';

// const expense = {
//   id:1,
//   description:'Rent',
//   note:'monthly',
//   createdAt: 145405012333,
//   amount:'3000'
// }

const expense = expenses[0];

// Long hand
test("should render the ExpenseListItem with data", ()=>{
  const { id, description, note, amount, createdAt } = expense;
  const wrapper = shallow(<ExpenseListItem 
                            id={id} 
                            description={description}
                            amount={amount}
                            note={note}
                            />);

  expect(wrapper).toMatchSnapshot();
});

// Short hand
test("should render the ExpenseListItem with data", ()=>{
  const wrapper = shallow(<ExpenseListItem {...expense}/>);
  expect(wrapper).toMatchSnapshot();
})