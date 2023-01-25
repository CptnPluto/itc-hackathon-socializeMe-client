import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import CategoryPage from "./pages/CategoryPage/CategoryPage";
import ChooseEventPage from "./pages/ChooseEventPage/ChooseEventPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import LocationPage from "./pages/LocationsPage/LocationPage";
import LocationPageTo from "./pages/LocationsPage/LocationPageTo";
import ResultsPAge from "./pages/ResultsPage/ResultsPAge";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");

  const clickMe = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/hello`);
    setShow(!show);
    setMessage(res.data);
    console.log(res);
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chooseLocation" element={<LocationPage />} />
        <Route path="/chooseLocationTo" element={<LocationPageTo />} />
        <Route path="/chooseCategory" element={<CategoryPage />} />
        <Route path="/chooseEvent" element={<ChooseEventPage />} />
        <Route path="/results" element={<ResultsPAge />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
