import "./ExpenseForm.css";
import React,{useState} from "react";
import { getCombinedModifierFlags } from "typescript";

function ExpenseForm(props) {

    const [enteredtitle,setEnteredTitle]=useState('')
    const [enteredamount,setEnteredAmount]=useState('')
    const [enteredDate,setEnteredDate]=useState('')
    
    // instead of making three sets we can make one state comprising all of them 
    // const [userInput,setUserInput] = useState({
    //     enteredtitle: '',
    //     enteredamount: '',
    //     entereddate: '',
    // })

    const titlechanger= (event) => {
        setEnteredTitle(event.target.value);

        // for three states combined
        // setEnteredTitle({
        //     ...userInput,
        //     enteredtitle: event.target.value,
        // })
        //    the above three states function will be sometimes wrong so below is the correct function
        //    setEnteredTitle((prevState) =>{
        //        return {...prevState,enteredtitle: event.target.value };
        //    })
    }
    const amountchanger= (event) => {
        setEnteredAmount(event.target.value);
    }
    const datechanger= (event) => {
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    }

    const submitHandler = (event) =>{
        event.preventDefault();  //helps in preventing the page from reloading when clicked on add expense button

        const expenseData = {

            title: enteredtitle,
        amount: +enteredamount,
            date: new Date(enteredDate)

        };
        // console.log(expenseData);

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    }

    

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={enteredtitle} onChange={titlechanger} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={enteredamount} min="0.01" step="0.01" onChange={amountchanger} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={datechanger} />
        </div>
      </div>

      
      <div className="new-expense__actions">
      <button type="button" onClick={props.close}>Cancel</button>
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
