import Table from "react-bootstrap/Table";
import { Routes, Route, Link, Outlet, useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Legend,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

function NutritionPage(props) {
  let navigate = useNavigate();
  return props.wait == true ? (
    <p>기다려주세요</p>
  ) : (
    <Table bordered hover>
      <tbody>
        {props.itemContents.map((a, idx) => {
          return (
            <tr>
              <td>{idx}</td>
              <td
                className="onCursor"
                onClick={() => {
                  navigate("/piechartPage", {
                    state: {
                      fat: a[6],
                      protein: a[5],
                      carbonydrate: a[4],
                      calorie: a[3],
                      foodName: a[0],
                    },
                  });
                }}
              >
                {a[0]}
              </td>
              <td>{a[1]}</td>
              <td>{a[2]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
export default NutritionPage;
