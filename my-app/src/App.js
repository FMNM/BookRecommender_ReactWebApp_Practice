import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PasswordGenerator from "./components/PasswordGenerator";
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
          <Route path="/number-generator" element={<PasswordGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
