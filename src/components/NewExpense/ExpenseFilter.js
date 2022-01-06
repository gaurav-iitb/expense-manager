import React from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  function Transfer(event) {
    // props.fromexpense(event.)
    // console.log('a');
    console.log(event.target.value);
    props.fromexpense(event.target.value);
  }
  // const result = props.filter(word => word.length > 6);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.Years} onChange={Transfer}>
          <option value="2022">
            2022
          </option>
          <option value="2021">
            2021
          </option>
          <option value="2020">
            2020
          </option>
          <option value="2019">
            2019
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
