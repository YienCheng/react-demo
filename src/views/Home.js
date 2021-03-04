import React from "react";
import { Prompt } from "react-router-dom";

function Home() {
  return (
    <>
      <Prompt message={"确认离开吗？"} />
      <h2>Home</h2>
    </>
  );
}

export default Home;
