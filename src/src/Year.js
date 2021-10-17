// @flow

import Month from "./Month";
import * as React from "react";
import { addMonths } from "date-fns";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "33% 34% 33%",
    gridTemplateRows: "25% 25% 25% 25%",
  },
};

export default function Year({ year }: { year: number }): any {
  const inputYear = new Date(year, 0);
  const months = [...Array(12).keys()].map((month) =>
    addMonths(inputYear, month)
  );
  return (
    <div style={styles.container}>
      {months.map((month) => (
        <Month date={month} key={month.toString()} />
      ))}
    </div>
  );
}
