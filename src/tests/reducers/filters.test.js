import filtersReducer from '../../reducers/filtersReducer';
import moment from 'moment';

//DEFAULT TEST for '@@INIT' 
test('should accept default values for filters Reducer', ()=>{
  const state = filtersReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

// TEXT FILTER TEST
test('should set filter to passed text', ()=>{
  const state = filtersReducer(undefined,{type:'SET_TEXT_FILTER', text:'rent'});
  expect(state).toEqual({
    text:'rent',
    sortBy:'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

// SORT_BY_DATE TEST
test('should sort state by date', ()=>{
  const state = filtersReducer(undefined,{type:'SORT_BY_DATE'});
  expect(state.sortBy).toEqual('date')
});

// SORT_BY_AMOUNT TEST
test('should sort state by amount', ()=>{
  const currentState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
  }
  const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
  expect(state).toEqual({
    text:'',
    sortBy:'amount',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
  })
});

// SET_START_DATE TEST LONG METHOD
test('should set startDate of state', ()=>{
  const state = filtersReducer(undefined,{type:'SET_START_DATE', startDate:'1000abc'});
  expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate: '1000abc',
    endDate: moment().endOf('month')
  })
});

// SET_END_DATE TEST SHORT METHOD
test('should set endDate of state', ()=>{
  const endDate = moment().endOf('month');
  const state = filtersReducer(undefined,{type:'SET_END_DATE', endDate});
  expect(state.endDate).toEqual(endDate);
});