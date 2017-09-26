import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

// Create Dummy Data to test
const expenses = [
  {
    id:'1',
    description: 'Gum',
    note:'now',
    amount: 395,
    createdAt: 0
  },
  {
    id:'2',
    description: 'Rent',
    note:'ever',
    amount: 139500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id:'3',
    description: 'Credit Card',
    note:'test',
    amount: 3950,
    createdAt: moment(0).add(4,'days').valueOf()
  }  
];


// Filter by text value
test('should filter by text value', ()=>{
  const filters = {
    text:'e',
    sortBy:'amount',
    startDate:undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2]]);
});

// Test filter by start date
test('should filter by startDate', ()=>{
  const filters = {
    text:'e',
    sortBy:'amount',
    startDate:undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[1], expenses[2]]);
});

// Test filter by end date
test('should filter by endDate', ()=>{
  const filters = {
    text:'e',
    sortBy:'amount',
    startDate:undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[1], expenses[2]]);
});

// Test sort by date
test('should sort by date', ()=>{
  const filters = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

// Test sort by amount
test('should sort by date', ()=>{
  const filters = {
    text:'',
    sortBy:'amount',
    startDate:undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses,filters);
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]]);
});
