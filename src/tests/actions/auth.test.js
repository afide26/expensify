
import { login, logout } from './../../actions/Auth';

test("should dispatch login when user visits the app", ()=>{
  const uid = 'djkfljlkjl'
  const action = login(uid);
  expect(action).toEqual({
    type:'LOGIN',
    uid
  })
});


test("should dispatch logout when user logs out from  the app", ()=>{
  const action = logout();
  expect(action).toEqual({
    type:'LOGOUT'
  })
})