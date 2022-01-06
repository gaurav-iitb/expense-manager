import React,{useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (prop) => {

    function SavedExpenseDataHandler(enteredData){
        const expensedata = {
            ...enteredData,
            id: Math.random().toString()
        }
        // console.log(expensedata);
        prop.finaldata(expensedata);
        setb(false)
    }
    const [b,setb]=useState(false);

    function formopener(){
        setb(true);
    }

    function formcloser(){
      setb(false);
    }
  return (
    <div className="new-expense">
     {!b && <button onClick={formopener}>Add New Expense</button>}
      
      {b && <ExpenseForm close={formcloser} onSaveExpenseData={SavedExpenseDataHandler} />}

    </div>
  );
};

export default NewExpense;
