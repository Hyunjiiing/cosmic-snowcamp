import { useState } from "react";
import { Navbar, Container, Nav, Row } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import DetailPage from "./pages/Detail.js";
import axios from "axios";

function App() {
  let [shoes, updateShoes] = useState(data);
  let navigate = useNavigate();
  let result;
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shoeses</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail/0");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="background">
                <img src="https://media.istockphoto.com/id/1343547742/vector/snickers-shoes-vector-illustration-cartoon-flat-collection-of-man-woman-fashion-footwear-in.jpg?b=1&s=170667a&w=0&k=20&c=ONJBmeRLapxnejcZohFFly5ev4cJk059Mlq6C_8hZLo="></img>
              </div>

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
          path="/detail/:id"
          element={
            <div>
              <DetailPage shoes={shoes} />
            </div>
          }
        />
      </Routes>
      <button
        onClick={() => {
          axios
            .get("https://codingapple1.github.io/shop/data2.json")
            .then((result) => {
              let copy = [...shoes, ...result.data];
              updateShoes(copy);
            });
        }}
      >
        더보기
      </button>
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
