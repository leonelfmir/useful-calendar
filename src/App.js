// @flow
import "./App.css";
import LayOut from "./src/LayOut";
import * as React from "react";
import { useEffect, useState } from "react";
import Year from "./src/Year";
import type { DaysToMark } from "./src/Year";

function App(): any {
  const [data, setData] = useState<?InputData>(null);
  useEffect(() => {
    getData().then((yearsData) => {
      const d = yearsData.map((year) => {
        return {
          ...year,
          dates: year.dates.map((date) => {
            const da = Date.parse(date.date);
            const dd = { ...date, date: da };
            return dd;
          }),
        };
      });
      setData(d);
    });
  }, [setData]);

  if (data == null) {
    return null;
  }

  return (
    <LayOut>
      {data.map((d) => (
        <Year key={d.year} year={d.year} daysToMark={d.dates} />
      ))}
    </LayOut>
  );
}

async function getData() {
  const data = await fetch("holidays.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return data.json();
}
export default App;

type InputData = $ReadOnlyArray<{
  year: number,
  dates: DaysToMark,
}>;
