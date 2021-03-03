import { useState } from "react";

function useChangeText() {
  const [text, setText] = useState("Word");

  /**
   * const state = useState("Word");
   * const text = state[0];
   * const setText = state[1];
   */

  function changeText() {
    text === "Word" ? setText("React") : setText("Word");
  }

  return { text, changeText };
}

export default useChangeText;
