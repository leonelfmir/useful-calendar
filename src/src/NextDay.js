// @flow
import { closestIndexTo, differenceInDays, format } from "date-fns";
import type { DaysToMark } from "./Year";
import * as React from "react";
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textTransform: "uppercase",
  },
};
type Props = {
  daysToMark?: DaysToMark,
};
export default function NexDay({ daysToMark }: Props): any {
  if (daysToMark == null || daysToMark.length === 0) {
    return null;
  }

  const dates = daysToMark.map((d) => d.date) ?? [];
  const nextDate = closestIndexTo(new Date(), dates);
  const closest = daysToMark[nextDate];
  const formatedDate = format(closest.date, "PPPP");
  const distance = differenceInDays(closest.date, new Date());
  return (
    <div style={styles.container}>
      <div>Next: {formatedDate}</div>
      <div>{closest.description}</div>
      <div>in {distance} days </div>
    </div>
  );
}
