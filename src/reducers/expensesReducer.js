import { addExpense, removeExpense, editExpense } from './../actions/expensesActions';
// Expenses Reducer
const defaultExpensesState = [];

export default(state=defaultExpensesState, action)=>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state,action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=>(id !== action.id));
    case 'SET_EXPENSES':
      return action.expenses;
    case 'EDIT_EXPENSE':
      return state.map((expense)=> expense.id === action.id ? {...expense, ...action.updates} : expense);
    default:
     return state;
  }
};
