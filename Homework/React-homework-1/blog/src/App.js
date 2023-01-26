/* eslint-disable */
import "./App.css";
import { useState } from "react";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  Navigate,
} from "react-router-dom";
import { user, items, articles } from "./data.js";
import Info from "./components/infoPage";
import Articles from "./components/articlesPage";
import Works from "./components/worksPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header></Header>}>
          <Route className="text" path="info" element={<Info></Info>} />
          <Route path="articles" element={<Articles />} />
          <Route path="works" element={<Works />} />
        </Route>
        <Route path="*" element={<h4>404 : 없는페이지임</h4>} />
      </Routes>
    </div>
  );
}

const ButtonBar = (probs) => {
  let [btnClass, setBtnClass] = useState([
    "pagebutton",
    "pagebutton",
    "pagebutton",
  ]);

  const btnColorChange = (idx) => {
    let temp = [...btnClass];
    temp[0] = "pagebutton";
    temp[1] = "pagebutton";
    temp[2] = "pagebutton";
    temp[idx] = "pagebutton presspagebutton";
    setBtnClass(temp);
  };
  return (
    <>
      <button
        className={btnClass[0]}
        onClick={() => {
          btnColorChange(0);
          probs.navigate("info");
        }}
      >
        작가소개
      </button>
      <button
        className={btnClass[1]}
        onClick={() => {
          btnColorChange(1);
          probs.navigate("articles");
        }}
      >
        글{items.length}
      </button>
      <button
        className={btnClass[2]}
        onClick={() => {
          btnColorChange(2);
          probs.navigate("works");
        }}
      >
        작품{articles.articlesSrc.length}
      </button>
    </>
  );
};

const Header = () => {
  let navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="black-nav">
        <h4>Blog💖</h4>
      </div>
      <br></br>
      <button
        className="pagebutton"
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <Profile></Profile>
      <div></div>
      <ButtonBar navigate={navigate}></ButtonBar>
      <Outlet></Outlet>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="text">
      <h2>{user.username}</h2>
      <img src={user.userImgPath} width="120px"></img>
      <div>{user.userJob}</div>
      <div>구독자수 : {user.userFollower}</div>
      <div>작가수 : {user.userFollowing}</div>
    </div>
  );
};

export default App;
