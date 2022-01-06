import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const datapointsvalues=props.datapoints.map(datapoint => datapoint.value);
    const totalmaximum= Math.max(...datapointsvalues); //here we have use spread argument as max fuction wants the list of elements instead of an array


  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxvalue={totalmaximum}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
