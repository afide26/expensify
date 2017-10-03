import moment from 'moment';
import expensesReducer from '../../reducers/expensesReducer';
import expenses from './../fixtures/expense.fixture';
// TEST START of REDUX STORE

test('should set the state to empty array', ()=>{
  const state = expensesReducer(undefined, {type:'@@INIT'});
  expect(state).toEqual([]);
})
const defaultState = []

// ADD_EXPENSE TEST
test('should test if expense is added when addExpense is called',()=>{
  const expense={
    id:'1',
    description:'Laundry',
    note:'test',
    amount:'3900', 
    createdAt:0
  }

  const state = expensesReducer(expenses, {type:'ADD_EXPENSE',expense});
  expect(state).toEqual([...expenses,expense])
});



// REMOVE_EXPENSE TEST WITH ID
test("should remove expense from array with the given id", ()=>{
  const action = {type:'REMOVE_EXPENSE', id:expenses[1].id};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
});

// REMOVE_EXPENSE TEST WITHOUT ID
test("should remove expense from array with the given id", ()=>{
  const action = {type:'REMOVE_EXPENSE', id:'-1'};
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//EDIT_EXPENSE TEST WITH VALID ID
test('should edit expense items with updates', ()=>{
  const action = {type:'EDIT_EXPENSE', id:expenses[0].id, updates:{note:"Keep the receipt", amount: 0}}
  const state = expensesReducer(expenses, action);

  expect(state[0].amount).toEqual(0);
  expect(state[0].note).toEqual("Keep the receipt");
});

//EDIT_EXPENSE TEST WITHOUT VALID ID
test('should edit expense items with updates', ()=>{
  const action = {type:'EDIT_EXPENSE', id:-1, updates:{note:"Keep the receipt", amount: 0}}
  const state = expensesReducer(expenses, action);

  expect(state).toEqual(expenses);
});

// SET_EXPENSES 
test("should set expenses", ()=>{
  const action = {type:'SET_EXPENSES', expenses:[expenses[1]]};
  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1]]);
})