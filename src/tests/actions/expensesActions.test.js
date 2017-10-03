import { startAddExpense,addExpense, removeExpense, editExpense } from '../../actions/expensesActions.js';
import expenses from './../fixtures/expense.fixture';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk])

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
  // Pass the data from expenses fixture
  const action = addExpense(expenses[2]);

  expect(action).toEqual({
    type:'ADD_EXPENSE',
    expense:expenses[2]
  })
});


test('should add expense to database and store', (done)=>{
  const store = createMockStore({});
  const expenseData = {
    description:'Dog',
    amount: 500,
    note:"Cleo's new sister",
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:"ADD_EXPENSE",
      expense:{
        id:expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done)=>{
  const store = createMockStore({});
  const expenseDefaults = {
    description:'', 
    note:'', 
    amount:0, 
    createdAt:0
  };
  

  store.dispatch(startAddExpense(expenseDefaults)).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:"ADD_EXPENSE",
      expense:{
        id:expect.any(String),
        ...expenseDefaults
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});








// // ADD Expense Test with default values
// test('should set up add expense action with default values', ()=>{
//   const action = addExpense();
//   expect(action).toEqual({
//     type:'ADD_EXPENSE',
//     expense:{
//       description:'', 
//       note:'', 
//       amount:0, 
//       createdAt:0,
//       id:expect.any(String)
//     }
//   })
// })