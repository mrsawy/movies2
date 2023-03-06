import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
// import Search from "./components/Search"
// import NotFound from "./components/not-found"


ReactDOM.render(
  <BrowserRouter>
<App />
    </BrowserRouter>
,
  document.getElementById("root")
);





