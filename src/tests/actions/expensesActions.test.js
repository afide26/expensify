import { addExpense, removeExpense, editExpense } from '../../actions/expensesActions.js';

// REMOVE Expense Test
test('should setup remove expense action object', ()=>{
  const action = removeExpense({id:'123abcd'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abcd'
  })
});


// EDIT Expense Test
test('should set up edit expense action object', ()=>{
  const action = editExpense('1234fgh', {description:'Dummy expense',note:"Test", amount:'1234'});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'1234fgh',
    updates:{
      description:'Dummy expense',
      note:"Test", 
      amount:'1234'
    }
  })
});

// ADD Expense Test with provided values
test('should set up add expense action object with values', ()=>{
  const newExpense = {description:"New Expense", note:'test', amount: 450, createdAt:1000};
  const action = addExpense(newExpense);

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      ...newExpense,
      id: expect.any(String)
    }
  })
});

// ADD Expense Test with default values
test('should set up add expense action with default values', ()=>{
  const action = addExpense();
  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:{
      description:'', 
      note:'', 
      amount:0, 
      createdAt:0,
      id:expect.any(String)
    }
  })
})