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
          }),
        };
      });
      setData(d);
    });
  }, [setData]);

  if (data == null) {
    return null;
  }

  const year = 2021;
  const holidays = data.find((d) => d.year === year)?.dates;
  if (holidays == null) {
    return null;
  }

  return (
    <LayOut>
      <Year year={year} daysToMark={holidays} />
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
