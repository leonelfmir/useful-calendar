// @flow
import "./App.css";
import LayOut from "./src/LayOut";
import * as React from "react";
import { useEffect, useState } from "react";
import Year from "./src/Year";
import type { DaysToMark } from "./src/Year";
import { getYear } from "date-fns";

function App(): any {
  const [data, setData] = useState<?InputData>(null);
  useEffect(() => {
    const currentYear = getYear(new Date());
    getData().then((yearsData) => {
      const d = yearsData.map((year) => {
        if (year.year < currentYear) {
          return null;
        }
        return {
          ...year,
          dates: year.dates.map((date) => {
            const da = Date.parse(date.date);
            const dd = { ...date, date: da };
            return dd;
          }),
        };
      });
      const valideYears = d.filter(Boolean);
      setData(valideYears);
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
