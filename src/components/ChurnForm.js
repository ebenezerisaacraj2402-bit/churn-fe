import React, { useState } from "react";
import axios from "axios";

const ChurnForm = ({ setResult }) => {
  const [formData, setFormData] = useState({
    gender: 1,
    senior: 0,
    tenure: "",
    monthly: "",
    total: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://churn-be-xo7e.onrender.com/predict",
        formData
      );

      setResult(response.data);
    } catch (error) {
      console.error("Error:", error);
      alert("Backend not connected!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Customer Churn Prediction</h2>

      <select name="gender" onChange={handleChange}>
        <option value="1">Male</option>
        <option value="0">Female</option>
      </select>

      <select name="senior" onChange={handleChange}>
        <option value="0">Not Senior Citizen</option>
        <option value="1">Senior Citizen</option>
      </select>

      <input
        type="number"
        name="tenure"
        placeholder="Tenure (months)"
        onChange={handleChange}
        required
      />

      <input
        type="number"
        step="0.01"
        name="monthly"
        placeholder="Monthly Charges"
        onChange={handleChange}
        required
      />

      <input
        type="number"
        step="0.01"
        name="total"
        placeholder="Total Charges"
        onChange={handleChange}
        required
      />

      <button type="submit">Predict</button>
    </form>
  );
};

export default ChurnForm;
