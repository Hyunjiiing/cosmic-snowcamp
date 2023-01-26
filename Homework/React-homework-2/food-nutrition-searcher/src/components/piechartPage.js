import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["fat", 179.46],
  ["protein", 120],
  ["carbonydrate", 319.2],
];

export const options = {
  title: "My Daily Activities",
};

export function PieChart() {
  return (
    <>
      <h2>오리고기죽</h2>
      <h3>1회 섭취량 당 칼로리 618.71 kcal</h3>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
}
