// A component in react is just a javascript function
//in react if first letter is small it takes it as a builtin html component so in order to make our custom html components we need to make sure first letter of the word should be in capital letters.
import React,{useState} from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

  // const expensedate = new Date(2021,11,13);
  // const expensetitle = "this is the title";
  // const expenseprice = "Price";

  // const month=props.date.toLocaleString('en-US',{month: 'long'});
  // const day=props.date.toLocaleString('en-US', {day: '2-digit'});
  // const year=props.date.getFullYear();
  
  // let title=props.title;

  const [titled,setTitle]=useState(props.title); //ye bs first time hi value change krega state function kyunki react ko pta chl jaata hai agr ise dusri baar execute ho rha to phir vo vhi value show krta hai jo update hui this 1st time execute hone pr.
// in above function we can write const as we are not changing the value using the const.
  const clicked = () => {
    setTitle("updated!!");
    // title="updated!!"
    console.log(titled);
  }

  return(
      <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{titled}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clicked}>change title</button>
      </Card>
      </li>
  );
}

export default ExpenseItem;
