import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import config from "../config.json";
import "./PasswordGenerator.css";

function PasswordGenerator() {
  const [passWord, setPassword] = useState("");
  const navigate = useNavigate();

  const generateNumber = () => {
    axios
      .get(`${config.API_BASE_URL}/generate_password`)
      .then((response) => {
        setPassword(response.data.result);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="PasswordGenerator">
      <button className="goBackBtn" onClick={goBack}>
        Go Back
      </button>
      <p>Generated password:</p>
      <span className="generatedPass">{passWord}</span>
      <button onClick={generateNumber}>Generate a Random Password</button>
    </div>
  );
}

export default PasswordGenerator;
