// @flow
import "./App.css";
import LayOut from "./src/LayOut";
import React from "react";
import Year from "./src/Year";
import type { DaysToMark } from "./src/Year";

function App(): any {
  const year = 2021;
  const holidays: DaysToMark = [
    {
      date: new Date(2021, 10, 25),
      describe: "Thanksgiving",
    },
  ];
  return (
    <LayOut>
      <Year year={year} daysToMark={holidays} />
    </LayOut>
  );
}

export default App;
