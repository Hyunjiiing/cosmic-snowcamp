import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [itemContents, setItemContents] = useState("기다려주세요");

  const request = async () => {
    console.log("hello!");
    let url =
      "http://openapi.foodsafetykorea.go.kr/api/4553171ad33c41b59f9e/I2790/json/1/5";
    const sampleData = await axios.get(url);
    console.log(sampleData);

    let result = sampleData.data.getAttractionKr.item.map((a, i) => {
      <Box title={a.DESC_KOR} contents={a.NUTR_CONT1}></Box>;
    });
    setItemContents(result);
  };

  return (
    <div className="App">
      <button onClick={request}>버튼</button>
      <div>{itemContents}</div>
    </div>
  );
}

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <h4>{props.contents}</h4>
    </div>
  );
};
export default App;
