import "./App.css";
import React from "react";
import useChangeText from "./hooks/useChangeText";
import useClock from "./hooks/useClock";

function App() {
  // Change Text
  const { text, changeText } = useChangeText();

  // Clock
  const date = useClock(new Date());

  return (
    <div style={{ padding: "10px" }}>
      <button onClick={changeText}>改变文字</button>
      <h1>{`Hello, ${text}!`}</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;
