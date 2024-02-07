import React, { useState } from "react";
import axios from "axios";

function NumberGenerator() {
  const [number, setNumber] = useState("");

  const generateNumber = () => {
    axios
      .get("http://localhost:8000/generate_number")
      .then((response) => {
        setNumber(response.data.result);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div>
      <button onClick={generateNumber}>Generate Number</button>
      <p>Generated number: {number}</p>
    </div>
  );
}

export default NumberGenerator;
