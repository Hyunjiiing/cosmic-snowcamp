import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import NutritionPage from "./components/nutritionPage";
import { PieChart } from "./components/piechartPage";

function App() {
  let [itemContents, setItemContents] = useState([]);

  const request = async () => {
    console.log("버튼이 눌렸슴둥!!");
    let url =
      "http://openapi.foodsafetykorea.go.kr/api/4553171ad33c41b59f9e/I2790/json/1/100";
    try {
      const sampleData = await axios.get(url);
      let result = sampleData.data.I2790.row.map((a) => {
        let ret = [a.DESC_KOR, a.NUTR_CONT1];
        return ret;
      });

      setItemContents(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <>
        <Link to="/">홈홈홈</Link>
        <Link to="/nutritionPage">영야영양</Link>
        <Link to="/piechartPage">파이차트</Link>
      </>
      <h1>음식 영양성분 검색기</h1>
      <div className="input-group mb-3">
        <input
          type="input"
          placeholder="음식을 입력하세요"
          className="form-control"
        />
        <input
          type="button"
          value="입력"
          className="btn btn-outline-secondary"
        />
      </div>
      <button onClick={request}>버튼</button>
      <div>
        {itemContents.map((a) => {
          return (
            <div key="{a}">
              {a[0]} {a[1]}kcal
            </div>
          );
        })}
      </div>

      <br></br>
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route
          path="/nutritionPage"
          element={<NutritionPage></NutritionPage>}
        />
        <Route path="/piechartPage" element={<PieChart></PieChart>} />
      </Routes>
    </div>
  );
}

export default App;
