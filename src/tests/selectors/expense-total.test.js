import totalExpenses from '../../selectors/expenses-total';
import moment from 'moment';
import expenses from './../fixtures/expense.fixture';




test("should render total of all expenses", ()=>{
  const amounts = totalExpenses(expenses);
  expect(amounts).toEqual(143845);
});

test("should render 0 if there are no expenses", ()=>{
  const expenses = []
  const amounts = totalExpenses(expenses);
  expect(amounts).toEqual(0);
});
test("should render amount of one expense if there is only one expense", ()=>{
  const amounts = totalExpenses([expenses[1]]);
  expect(amounts).toEqual(139500);
});