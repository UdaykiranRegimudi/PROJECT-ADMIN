import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const Graphs = () => {
  const options = {
    theme: "dark1",
    animationEnabled: true,
    title: {
      text: "PROJECTS REPORT",
    },
    axisY: {
      title: "Number of Projects",
      suffix: "",
    },
    data: [
      {
        type: "splineArea",
        xValueFormatString: "MMM",
        yValueFormatString: "",
        showInLegend: true,
        legendText: "Months",
        dataPoints: [
          { x: new Date(2020, 1), y: 10 },
          { x: new Date(2020, 2), y: 20 },
          { x: new Date(2020, 3), y: 7 },
          { x: new Date(2020, 4), y: 15 },
          { x: new Date(2020, 5), y: 30 },
          { x: new Date(2020, 6), y: 12 },
          { x: new Date(2020, 7), y: 32 },
          { x: new Date(2020, 8), y: 15 },
          { x: new Date(2020, 9), y: 5 },
          { x: new Date(2020, 10), y: 7 },
          { x: new Date(2020, 11), y: 15 },
          { x: new Date(2020, 12), y: 11 },
        ],
      },
    ],
  };
  return (
    <div
      style={{ width: "57%", marginLeft: "7vh", backgroundColor: "black" }}
      className="mt-5"
    >
      <CanvasJSChart options={options} />
    </div>
  );
};
export default Graphs;
