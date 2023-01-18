import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailPage(props) {
  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      <p>"숫자를 입력하세요"</p>;
    }
  }, [num]);

  console.log("안녕");

  let [count, setCount] = useState(0);

  let { id } = useParams();

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default DetailPage;
