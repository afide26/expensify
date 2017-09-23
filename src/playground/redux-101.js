import { createStore } from 'redux';
// ACTION GENERATORS
// Functions that generate action objects

// const incrementCount = (payload = {})=>(
//   {
//     type:'INCREMENT',
//     incrementBy:typeof payload.incrementBy === 'number' ?payload.incrementBy : 1
//   }
// )

const incrementCount= ({incrementBy=1}= {})=>(
  {
    type:'INCREMENT',
    incrementBy
  }
);

const decrementCount = ({decrementBy=1}={})=>(
  {
    type:'DECREMENT',
    decrementBy
  }
);

const resetCount = ()=>(
  {
    type:'RESET'
  }
);

const setCount = ({count}={})=>(
  {
    type:'SET',
    count
  }
);

const countReducer = (state={count:0}, action)=>{
    switch(action.type){
      case 'INCREMENT':
       return { count: state.count + action.incrementBy};
  
      case 'DECREMENT':
       return state.count >=1 ? { count: state.count - action.decrementBy} : 'Value is below 1';
      
      case 'SET':
        return typeof action.count === 'number' ? {count: action.count} : 'You need to enter a number'
  
      case 'RESET':
       return { count: 0}
      default:
       return state;
    }
  }
const store = createStore(countReducer);

// State Getter
// Watch and listen to state
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})


// Actions - object that get sent to the store
// SET
//SET

// Increment
// store.dispatch({
//   type:'INCREMENT',
//   incrementBy: 50
// });
store.dispatch(incrementCount({incrementBy:5}))

// unsubscribe();

// Decrement
store.dispatch(decrementCount({decrementBy:2}));


// Increment
store.dispatch(incrementCount({incrementBy:3}));

// Reset
store.dispatch(resetCount());

//SET
// store.dispatch({
//   type:'SET',
//   count: 101
// })


store.dispatch(setCount({count:99}))

// Object Spread Example

// const user = {
//   id:uuid(),
//   name:"Alan"
// }

// const newUser = {...user, name:"Alan Fidelino", age:45, sex: 'Male'};
// console.log('New User', newUser);
