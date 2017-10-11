
import authReducer from './../../reducers/auth';

test("should store uid when user logged in", ()=>{
  const action = {
    type:'LOGIN', 
    uid:'12jkfjk'
  }
  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});

test("should clear id when user logs out", ()=>{
  const action = {
    type:'LOGOUT'
  };
  const state = authReducer({uid:'anything'}, action);
  expect(state).toEqual({});
});