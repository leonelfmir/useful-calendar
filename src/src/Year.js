// @flow

import Month from "./Month";
import * as React from "react";
import { addMonths } from "date-fns";
type DayToMark = {
  date: Date,
  description?: string,
};
export type DaysToMark = $ReadOnlyArray<DayToMark>;
const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "33% 34% 33%",
    gridTemplateRows: "25% 25% 25% 25%",
  },
};
type Props = {
  year: number,
  daysToMark?: DaysToMark,
};
export default function Year({ year, ...props }: Props): any {
  const inputYear = new Date(year, 0);
  const months = [...Array(12).keys()].map((month) =>
    addMonths(inputYear, month)
  );
  return (
    <div style={styles.container}>
      {months.map((month) => (
        <Month {...props} date={month} key={month.toString()} />
      ))}
    </div>
  );
}
