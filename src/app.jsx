import Home from "./routes/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tutorial from "./routes/tutorial";
import Checkin from "./routes/daily/checkin";
import Plant from "./routes/daily/plant";
import Achievement from "./routes/achievement";
import Tracker from "./routes/tracker";
import Communities from "./routes/communities";
import Navbar from "./components/navbar";
import Questionnaire from "./routes/questionaire";
import Profile from "./routes/user";
import "./app.css";

export function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questionnaire />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/daily/checkin" element={<Checkin />} />
          <Route path="/daily/plant" element={<Plant />} />
          <Route path="/achievement" element={<Achievement />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/user" element={<Profile />} />
        </Routes>
      </BrowserRouter>

      <Navbar></Navbar>
    </>
  );
}
