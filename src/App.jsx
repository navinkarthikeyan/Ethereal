import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Tracker from "./components/Tracker";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tracker" element={<Tracker />} />
    </Routes>
  );
}

export default App;
