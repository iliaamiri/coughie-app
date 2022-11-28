import { useState } from "preact/hooks";
import Header from "./components/header";
import Home from "./routes/home";
import { Router } from "preact-router";
import Tutorial from "./routes/tutorial";
import Checkin from "./routes/daily/checkin";
import Plant from "./routes/daily/plant";
import Achievement from "./routes/achievement";
import Tracker from "./routes/tracker";
import Communities from "./routes/communities";
import Navbar from "./components/navbar";
import "./app.css";

export function App() {
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Home path="/home" />
        <Tutorial path="/tutorial" />
        <Checkin path="/daily/checkin" />
        <Plant path="/daily/plant" />
        <Achievement path="/achievement" />
        <Tracker path="/tracker" />
        <Communities path="/communities" />
      </Router>
   
    <Navbar></Navbar>
    </>
    
  );
}
