
// My code
// export default (expenses)=>{
//   const amounts = expenses.map((expense)=> expense.amount);
//   return expenses.length > 0 ? amounts.reduce((total, amount)=> total + amount,0) : 0
// };

// Instructor's code

export default (expenses) => {
  return expenses.map((expense)=>expense.amount)
    .reduce((sum, value)=> sum + value, 0 )
}