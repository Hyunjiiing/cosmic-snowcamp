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
  let [likes, likesChange] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <br></br>
      <button
        className="button"
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          titleChange(copy);
        }}
      >
        글수정
      </button>
      <button
        className="button"
        onClick={() => {
          let copy = [...title];
          copy.sort();
          titleChange(copy);
        }}
      >
        가나다순
      </button>
      <div className="list">
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
      </div>{" "}
      {title.map(function () {
        return (
          <div className="list">
            <h4>{title[1]}</h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
