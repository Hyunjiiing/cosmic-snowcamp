import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Legend,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

const PieChartComponent = (props) => {
  console.log(props);
  const data = [
    { name: "fat", value: 9 },
    { name: "protein", value: 4 },
    { name: "carbonydrate", value: 4 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
      <div>
        <div class="row d-flex justify-content-center text-center">
          <h1>{props.title}</h1>
          <h3>1회 섭취량 당 칼로리 {props.calorie}</h3>
          <hr />
          <div className="col-md-8">
            <ResponsiveContainer
              width={400}
              height={400}
              className="text-center"
            >
              <PieChart width={400} height={400}>
                <Legend layout="vertical" verticalAlign="top" align="top" />
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};
export default PieChartComponent;
