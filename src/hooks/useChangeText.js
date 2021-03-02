import { useState } from "react";

function useChangeText() {
  const [text, setText] = useState("Word");

  function changeText() {
    text === "Word" ? setText("React") : setText("Word");
  }

  return { text, changeText };
}

export default useChangeText;
