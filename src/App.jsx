import React from "react";
import Router from "./router";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/search"}>Search</Link>
      <Router/>
    </>
  )
};

export default App;
