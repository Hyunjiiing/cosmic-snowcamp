import { useState } from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./pages/Detail.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate(-1);
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="main-bg"></div>

              <div className="container">
                <div className="row">
                  {shoes.map((a, i) => {
                    return <Card shoes={shoes[i]} i={i}></Card>;
                  })}
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/detail"
          element={
            <div>
              <DetailPage></DetailPage>
            </div>
          }
        />
        <Route path="*" element={<div>없는 페이지임</div>} />
        <Route path="/event" element={<About></About>}>
          <Route path="one" element={<h4>첫주문시 양배츄즙서비스</h4>} />
          <Route path="two" element={<h4>생일기념쿠폰받기</h4>} />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(probs) {
  return (
    <div className="col-md-4">
      {" "}
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (probs.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{probs.shoes.title}</h4>
      <p>{probs.shoes.price}</p>
    </div>
  );
}

export default App;
