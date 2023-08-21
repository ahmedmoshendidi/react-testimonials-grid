import React from "react";
import ReactDOM from "react-dom";
import Card from "./components/Card.js";
import Data from "./data.js";
import "./index.css";

let arr = Data.map((item) => <Card item={item} />);

function App() {
  return <main className="container">{arr}</main>;
}
export default App;
