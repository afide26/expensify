import { firebase,googleAuthProvider } from '../firebase/firebase'

// export const startLogin = ()=>{
//   return ()=> {
//     return firebase.auth().signInWithPopup(googleAuthProvider).then((result)=>{
//       const token = result.credential.accessToken;
//       const user = result.user
//     }).catch((error)=>{
//       console.log('Error message stated: ', error)
//     })
//   };
// };
const startLogin = ()=>{
  return ()=>{
    firebase.auth().signInWithPopup(googleAuthProvider);
  }
}