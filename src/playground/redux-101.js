import { createStore } from 'redux';

const store = createStore((state={count:0}, action)=>{

  switch(action.type){
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
     return { count: state.count + incrementBy};

    case 'DECREMENT':
     const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
     return state.count >=1 ? { count: state.count - decrementBy} : 'Value is below 1';
    
    case 'SET':
      return {count: action.count};

    case 'RESET':
     return { count: 0}
    default:
     return state;
  }

});

// State Getter
// Watch and listen to state
const unsubscribe = store.subscribe(()=>{
  console.log(store.getState());
})


// Actions - object that get sent to the store
// SET
//SET
store.dispatch({
  type:'SET',
  count: 101
});

// Increment
store.dispatch({
  type:'INCREMENT',
  incrementBy: 50
});

// unsubscribe();

// Decrement
store.dispatch({
  type:'DECREMENT',
  decrementBy: 5
})


// Increment
store.dispatch({
  type:'INCREMENT'
});
store.dispatch({
  type:'INCREMENT'
});

// Reset
store.dispatch({
  type:'RESET'
});

//SET
store.dispatch({
  type:'SET',
  count: 101
})



