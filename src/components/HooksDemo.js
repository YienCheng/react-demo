import React from "react";
import useChangeText from "../hooks/useChangeText";
import useClock from "../hooks/useClock";
export default function HooksDemo(props) {
  const { text, changeText } = useChangeText();
  const date = useClock();

  return (
    <div>
      <button onClick={changeText}>改变文字</button>
      <h1>{`Hello, ${text}!`}</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
