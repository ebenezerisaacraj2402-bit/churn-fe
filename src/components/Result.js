import React from "react";

const Result = ({ result }) => {
  if (!result) return null;

  return (
    <div className="result">
      <h3>Prediction: {result.prediction}</h3>
      <h4>Probability: {result.probability}</h4>
    </div>
  );
};

export default Result;
