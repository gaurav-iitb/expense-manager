import React from 'react';
import './Card.css'
// propse.children is used to show the contents between our own created Card component (i.e between <Card> and </Card> )in files like Expense.js, Expense-item.js.

function Card(propse){
    const classes= 'card ' + propse.className;
    return(
        <div className={classes}>  
            {propse.children}
        </div>
    )

}
export default Card; 