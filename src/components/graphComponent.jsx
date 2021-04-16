import React from "react";
import { useSelector } from "react-redux";
import { Line } from "react-chartjs-2";

const GraphComponent = () => {
  const trendLabels = useSelector((state) => Object.keys(state.graphReducer));
  const trendData = useSelector((state) => {
    let dataset = [];
    for (let key in state.graphReducer) dataset.push(state.graphReducer[key]);
    return dataset;
  });

  return (
    <div className="graph-component">
      <Line
        data={{
            labels:[...trendLabels],
            datasets:[
                {
                    backgroundColor:"rgba(234,248,239,0.7)",
                    borderColor:"#06b458",
                    data:[...trendData]
                }
            ],
        }}
        options={{
          title: {
            display: true,
            text: "Last 60 Days trend",
            fontSize: 18,
          },
          legend: {
            display: false,
          },
        }}
      />
    </div>
  );
};

export default GraphComponent;
