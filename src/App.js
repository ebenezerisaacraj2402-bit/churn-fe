import React, { useState } from "react";
import ChurnForm from "./components/ChurnForm";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app">
      <ChurnForm setResult={setResult} />
      <Result result={result} />
    </div>
  );
}

export default App;
