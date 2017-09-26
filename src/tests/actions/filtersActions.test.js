import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} 
from '../../actions/filtersActions';
import moment from 'moment';


// SET_TEXT_FILTER Test with values
test('should generate setTextFilter action object', ()=>{
  const text = 'rent';
  const action = setTextFilter(text);

  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text
  })
});

// SET_TEXT_FILTER Test with default values
test('should set up setTextFilter action object', ()=>{
  const action = setTextFilter();

  expect(action).toEqual({
    type:'SET_TEXT_FILTER',
    text:''
  })
});

// SET_START_DATE Test
test('should set up setStartDate action object', ()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
  })
});

// SET_END_DATE Test
test('should set up setEndDate action object', ()=>{
  const action = setEndDate(moment(1000));
  expect(action).toEqual({
    type:'SET_END_DATE',
    endDate:moment(1000)
  })
});

// SORT_BY_AMOUNT Test
test('should set up sortByAmount action object', ()=>{
  const action = sortByAmount();
  expect(action).toEqual({type:'SORT_BY_AMOUNT'})
});

// SORT_BY_DATE Test
test('should set up sortByDate action object', ()=>{
  const action = sortByDate();
  expect(action).toEqual({type:'SORT_BY_DATE'})
});