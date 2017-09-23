import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// Expenses Reducer
const defaultExpensesState = [];

const expensesReducer = (state=defaultExpensesState, action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state,action.expense]

    case 'REMOVE_EXPENSE':
      return state.filter(({id})=> id !== action.id);
    
    case 'EDIT_EXPENSE':
      return state.map((expense)=> expense.id === action.id ? {...expense, ...action.updates} : expense);
    default:
     return state;
  }
};

// Expenses Action creators
const addExpense = ({description='', note='', amount=0, createdAt=0}={})=>(
  {
    type:'ADD_EXPENSE',
    expense:{
      id:uuid(),
      description,
      note,
      amount, 
      createdAt
    }
  }
);

const removeExpense = ({id}={})=>(
  {
    type: 'REMOVE_EXPENSE',
    id
  }
)

const editExpense = (id, updates)=>(
  {
    type:'EDIT_EXPENSE',
    id, 
    updates
  }
);


// Filters Reducer
const defaultFilterState = {
  text:'',
  sortBy:'date',
  startDate:undefined,
  endDate: undefined
}
const filtersReducer = (state=defaultFilterState, action)=>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
      return {...state, text:action.text};
    case 'SORT_BY_DATE':
      return {...state, sortBy:'date'};
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy:'amount'};
    case 'SET_START_DATE':
      return {...state, startDate: state.startDate};
    case 'SET_END_DATE':
      return {...state, endDate: start.endDate};
    default:
     return state;
  }
}


// Filter Action Creators
const setTextFilter = (text='')=>{
  return{
    type:"SET_TEXT_FILTER",
    text
  }
}

const sortByDate = ()=>(
  {
    type:'SORT_BY_DATE'
  }
);

const sortByAmount = ()=>(
  {
    type:'SORT_BY_AMOUNT'
  }
);

const setStartDate = (startDate)=>(
  {
    type:'SET_START_DATE',
    startDate
  }
);

const setEndDate = (endDate)=>(
  {
    type:'SET_END_DATE',
    endDate
  }
);

// Store with combinedReducers
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const demoState = {
  expenses:[{
    id:uuid(),
    description:'React filter usage',
    note: 'This was the payment for the month',
    amount: 54500,
    createdAt: 4000
  }],
  filters:{
    text:'rent',
    sortBy:'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// const unsubscribe = store.subscribe(()=>(console.log(store.getState())));

// Using expenses with filters
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate })=>{
  return expenses.filter((expense)=>{
    const startDateMatch = typeof startDate !=='number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    const description = expense.description.toLowerCase();
    const textMatch = description.includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if(sortBy==='date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    }else if(sortBy ==='amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
}
const unsubscribe = store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})
const expenseOne = store.dispatch(addExpense({description:'Expense to remove', note:'Test note', amount:10000, createdAt:1000}));

const expenseTwo = store.dispatch(addExpense({description:'Car payment', note:'Test rent one', amount:106000, createdAt:-2000}));

const expenseThree = store.dispatch(addExpense({description:'Payment for car', note:'Car payment two', amount:120000, createdAt:3300}));

const expenseFour = store.dispatch(addExpense(demoState.expenses[0]));

// store.dispatch(removeExpense({id:expenseTwo.expense.id}));

// Edit expense
store.dispatch(editExpense(expenseOne.expense.id, {description:"Description filter"}));

// Filter expense

// store.dispatch(setTextFilter('car'));
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(2000));
// store.dispatch(setEndDate(3000));
// store.dispatch(setTextFilter('usage'));
unsubscribe();

