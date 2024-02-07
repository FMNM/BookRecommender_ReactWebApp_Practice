import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config.json";
import "./NumberGenerator.css";

function NumberGenerator() {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const generateNumber = () => {
    axios
      .get(`${config.API_BASE_URL}/generate_number`)
      .then((response) => {
        setNumber(response.data.result);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="NumberGenerator">
      <button onClick={generateNumber}>Generate Number</button>
      <p>Generated number: {number}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default NumberGenerator;
