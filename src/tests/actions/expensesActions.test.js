import { 
  startSetExpenses, 
  setExpenses, 
  startAddExpense,
  addExpense, 
  removeExpense, 
  startRemoveExpense,
  editExpense,
  startEditExpense
} from '../../actions/expensesActions.js';
import expenses from './../fixtures/expense.fixture';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'aef1126';
const defaultAuthState = { auth: {uid}};
const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
  const expensesData = {};
  expenses.forEach(({id, description,amount, note, createdAt})=>{
    expensesData[id] = {description, amount, note, createdAt}
  });
  database.ref(`users/${uid}/expenses/`).set(expensesData).then(()=>done())
});

// REMOVE Expense Test
test('should setup remove expense action object', ()=>{
  const action = removeExpense({id:'123abcd'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id:'123abcd'
  });
});

test("should remove expense from Firebase", (done)=>{
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;

  store.dispatch(startRemoveExpense({id})).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot)=>{
    expect(snapshot.val()).toBeFalsy();
    done();
  });
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

test("should edit Expense from Firebase", (done)=>{
  const store = createMockStore(defaultAuthState);
  const id = expenses[1].id;
  const updates = { description:"New Expense from startEditExpense"};

  store.dispatch(startEditExpense(id, updates))
    .then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type:"EDIT_EXPENSE",
        id,
        updates
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    }).then((snapshot)=>{
      expect(snapshot.val().description).toBe(updates.description);
      done();
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
  const store = createMockStore(defaultAuthState);
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
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done)=>{
  const store = createMockStore(defaultAuthState);
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
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot)=>{
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
    });
});

// SET_EXPENSES 
test("should setup expense action object with some data",()=>{
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type:'SET_EXPENSES',
    expenses
  })
});

// SET_START_EXPENSES

test("should start set expenses action and return expenses",(done)=>{
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
      const actions = store.getActions();
      expect(actions[0]).toEqual({type:'SET_EXPENSES', expenses})
      done();
    })

  }
)