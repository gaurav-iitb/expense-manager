import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';
import { useLayoutEffect } from 'react';
function ExpensesList(prop){

    // let notfound = <p className="paragraph">no expenses found</p>;
  if(prop.item.length===0){
    return <h2 className='expenses-list_fallback'></h2>
  } 

  return <ul className='expenses-list'>
       { prop.item.map((expens) => (
      <ExpenseItem
        key={expens.id} //key is very important to add with map or else we will face different types of errors or bugs.
        title={expens.title}
        amount={expens.amount}
        date={expens.date}
      /> 
    )) }
  </ul>
}
export default ExpensesList;