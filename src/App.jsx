import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatePage from "./pages/catepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CatePage />} />
      </Routes>
    </Router>
  );
}

export default App;