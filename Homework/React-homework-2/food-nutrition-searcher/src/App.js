import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import NutritionPage from "./components/nutritionPage";
import PieChartComponent from "./components/piechartPage";

function App() {
  let [wait, ChangeWait] = useState(false);
  let [itemContents, setItemContents] = useState([]);
  let [content, changeContent] = useState("");
  let navigate = useNavigate();

  const request = async () => {
    console.log("버튼이 눌렸슴둥!!");
    let url = `http://openapi.foodsafetykorea.go.kr/api/4553171ad33c41b59f9e/I2790/json/1/100/DESC_KOR=${content}`;
    try {
      ChangeWait(true);
      const sampleData = await axios.get(url);
      let result = sampleData.data.I2790.row.map((a) => {
        let ret = [
          a.DESC_KOR,
          a.GROUP_NAME,
          a.MAKER_NAME,
          a.NUTR_CONT1,
          a.NUTR_CONT2,
          a.NUTR_CONT3,
          a.NUTR_CONT4,
          a.NUTR_CONT5,
        ];
        return ret;
      });
      setItemContents(result);
      ChangeWait(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <h1>음식 영양성분 검색기</h1>
      <div className="input-group mb-3">
        <input
          type="input"
          placeholder="음식을 입력하세요"
          className="form-control"
          onChange={(e) => {
            changeContent(e.target.value);
          }}
        />
        <input
          onClick={() => {
            request();
            navigate("/nutritionPage");
          }}
          type="button"
          value="입력"
          className="btn btn-outline-secondary"
        />
      </div>
      <br></br>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route
          path="/nutritionPage"
          element={
            <NutritionPage
              wait={wait}
              itemContents={itemContents}
            ></NutritionPage>
          }
        />
        <Route
          path="/piechartPage"
          element={<PieChartComponent></PieChartComponent>}
        />
      </Routes>
    </div>
  );
}

export default App;
