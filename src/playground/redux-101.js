import { createStore } from 'redux';

const store = createStore((state={count:0}, action)=>{

  switch(action.type){
    case 'INCREMENT':
     return { count: state.count + 1};
    case 'DECREMENT':
     return state.count >=1 ? { count: state.count -1} : 'Value is below 1';
    case 'RESET':
     return { count: 0}
    default:
     return state;
  }

});

console.log(store.getState());

// Actions - object that get sent to the store
// Increment
store.dispatch({
  type:'INCREMENT'
});




// Decrement
store.dispatch({
  type:'DECREMENT'
})

// Reset
store.dispatch({
  type:'RESET'
});

// store.dispatch({
//   type:'INCREMENT'
// });
// store.dispatch({
//   type:'INCREMENT'
// });



// State Getter
console.log(store.getState());