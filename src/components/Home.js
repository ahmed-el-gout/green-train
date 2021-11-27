import React from "react";
import Menu from "./home/Menu";
import Main from "./home/Main";
// import "../style/home.css"

function Home() {
  return (
    <div className="home containe-fluid   d-flex flex-column ">
      <Menu />
      <Main />
    </div>
  );
}

export default Home;
