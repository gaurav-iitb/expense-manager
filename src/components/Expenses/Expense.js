import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expense(usingpops) {
  const [Year, SetYear] = useState("2020"); //ise newdata function ke andr nhi likh skte baahr hi likhna pdega
  function Newdata(dataentered) {
    SetYear(dataentered);
    // console.log('expense.js');
    // console.log(dataentered);
  }

  const result = usingpops.expense.filter((oldexpense) => {
    return oldexpense.date.getFullYear().toString() === Year;
  });


  //method 3 for printing no expenses found

  // let notfound = <p className="paragraph">no expenses found</p>;
  // if(result.length>0){
  //   notfound=result.map((expens) => (
  //     <ExpenseItem
  //       key={expens.id} //key is very important to add with map or else we will face different types of errors or bugs.
  //       title={expens.title}
  //       amount={expens.amount}
  //       date={expens.date}
  //     /> 
  //   ))
  // } 
// shifting method 3 to another component named expenseslist
  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter Years={Year} fromexpense={Newdata} />

        {/*
        method 1 for printing no expenses found

        {result.length === 0 ? (  //use of ternary operator 
          <p className="paragraph">no expenses found</p>
        ) : (
          result.map((expens) => (
            <ExpenseItem
              key={expens.id} //key is very important to add with map or else we will face different types of errors or bugs.
              title={expens.title}
              amount={expens.amount}
              date={expens.date}
            /> 
          ))
        )}  */}

        {/* 
        method 2 for printing no expenses found

        {result.length === 0 && <p className="paragraph">no expenses found</p>}
        {result.length>0 &&
        result.map((expens) => (
          <ExpenseItem
            key={expens.id} //key is very important to add with map or else we will face different types of errors or bugs.
            title={expens.title}
            amount={expens.amount}
            date={expens.date}
          /> 
        ))
      }  */}
      <ExpensesChart expenses={result} />
      <ExpensesList item ={result}/>
       
      {/* the above notfound is written for method 3 */}
        

      </Card>
    </div>
  );
}
export default Expense;
