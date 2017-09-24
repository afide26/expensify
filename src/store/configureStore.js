import { createStore, combineReducers } from 'redux';

// IMPORTING REDUCERS
import expensesReducer from './../reducers/expensesReducer';
import filtersReducer from './../reducers/filtersReducer';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
