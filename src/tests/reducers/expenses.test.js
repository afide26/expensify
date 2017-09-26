import moment from 'moment';
import expensesReducer from '../../reducers/expensesReducer';
import dummyData from './../fixtures/expense.fixture';
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

  const state = expensesReducer(dummyData, {type:'ADD_EXPENSE',expense});
  expect(state).toEqual([...dummyData,expense])
});



// REMOVE_EXPENSE TEST WITH ID
test("should remove expense from array with the given id", ()=>{
  const action = {type:'REMOVE_EXPENSE', id:dummyData[1].id};
  const state = expensesReducer(dummyData, action);
  expect(state).toEqual([dummyData[0], dummyData[2]])
});

// REMOVE_EXPENSE TEST WITHOUT ID
test("should remove expense from array with the given id", ()=>{
  const action = {type:'REMOVE_EXPENSE', id:'-1'};
  const state = expensesReducer(dummyData, action);
  expect(state).toEqual(dummyData);
});

//EDIT_EXPENSE TEST WITH VALID ID
test('should edit expense items with updates', ()=>{
  const action = {type:'EDIT_EXPENSE', id:dummyData[0].id, updates:{note:"Keep the receipt", amount: 0}}
  const state = expensesReducer(dummyData, action);

  expect(state[0].amount).toEqual(0);
  expect(state[0].note).toEqual("Keep the receipt");
});

//EDIT_EXPENSE TEST WITHOUT VALID ID
test('should edit expense items with updates', ()=>{
  const action = {type:'EDIT_EXPENSE', id:-1, updates:{note:"Keep the receipt", amount: 0}}
  const state = expensesReducer(dummyData, action);

  expect(state).toEqual(dummyData);
});