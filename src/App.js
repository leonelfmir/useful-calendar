// @flow
import "./App.css";
import LayOut from "./src/LayOut";
import React from "react";
import Year from "./src/Year";

function App(): any {
  return (
    <LayOut>
      <Year year={2021} />
    </LayOut>
  );
}

export default App;
