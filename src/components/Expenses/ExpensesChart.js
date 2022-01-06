import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart= props =>{
    
    const chartdatapoints=[
        {label: 'Jan',value: 0},
        {label: 'Feb',value: 0},
        {label: 'Mar',value: 0},
        {label: 'Apr',value: 0},
        {label: 'May',value: 0},
        {label: 'Jun',value: 0},
        {label: 'Jul',value: 0},
        {label: 'Aug',value: 0},
        {label: 'Sept',value: 0},
        {label: 'Oct',value: 0},
        {label: 'Nov',value: 0},
        {label: 'Dec',value: 0},
    ];

    for(const expense of props.expenses){  //"of" is used with arrays while "in" is used with objects inside the for loop. //here props.expenses is an array
        const expenseMonth= expense.date.getMonth();  // starting at 0 => January => 0
        // console.log(expenseMonth);
        chartdatapoints[expenseMonth].value+= expense.amount;
   
    }

    return <Chart datapoints={chartdatapoints} />
}

export default ExpensesChart;