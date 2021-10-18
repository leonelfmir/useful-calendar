// @flow

import type { DaysToMark } from "./Year";

import { format, isEqual } from "date-fns";
import * as React from "react";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    height: "20px",
  },
  holiday: {
    border: "1px solid red",
  },
};
type Props = { date: ?Date, daysToMark?: DaysToMark };
export default function Day({ date, daysToMark }: Props): any {
  const day = date != null ? format(date, "d") : null;
  const holiday =
    date != null ? daysToMark?.find((d) => isEqual(date, d.date)) : null;
  const style =
    holiday != null
      ? { ...styles.container, ...styles.holiday }
      : styles.container;
  return <div style={style}>{day}</div>;
}
