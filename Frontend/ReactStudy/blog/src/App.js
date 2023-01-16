/* eslint-disable */
import "./App.css";
import { useState } from "react";

function App() {
  let post = "역삼 우동 맛집";
  let [title, titleChange] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]); //Destructuring 문법
  let [likes, likesChange] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);
  let [indexTitle, setIndexTitle] = useState(0);
  let [inputValue, inputValueChange] = useState("");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      {/* <div className="list">
        <h4>
          {title[0]}{" "}
          <span
            onClick={() => {
              likesChange(likes + 1);
            }}
          >
            💖
          </span>{" "}
          {likes}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      {title.map(function (a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
                setIndexTitle(i);
              }}
            >
              {title[i]}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copy = [...likes];
                  copy[i] = copy[i] + 1;
                  likesChange(copy);
                }}
              >
                {" "}
                💖
              </span>{" "}
              {likes[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                titleChange(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          inputValueChange(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(inputValue);
          titleChange(copy);
        }}
      >
        입력
      </button>
      {modal == true ? <Modal title={title} indexTitle={indexTitle} /> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.indexTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
