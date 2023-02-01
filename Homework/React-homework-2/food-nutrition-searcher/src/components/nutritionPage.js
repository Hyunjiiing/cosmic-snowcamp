import Table from "react-bootstrap/Table";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import {
  PieChart,
  Pie,
  Legend,
  Sector,
  Cell,
  ResponsiveContainer,
} from "recharts";

function NutritionPage(props) {
  return (
    <Table bordered hover>
      <tbody>
        {props.itemContents.map((a, idx) => {
          return (
            <tr>
              <td>{idx}</td>
              <Link
                to={{
                  pathname: "/piechartPage",
                  state: { fat: a[6], protein: a[5], carbonydrate: a[4] },
                }}
              >
                {a[0]}
              </Link>
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
