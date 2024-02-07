import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NumberGenerator from "./components/NumberGenerator";
import "./App.css";

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/number-generator">Go to Number Generator</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/number-generator" element={<NumberGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
