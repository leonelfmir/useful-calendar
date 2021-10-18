// @flow

import type { DaysToMark } from "./Year";

import { format, isEqual, isSameDay } from "date-fns";
import * as React from "react";
import Tooltip from "./Tooltip";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    height: "20px",
  },
  holiday: {
    border: "1px solid red",
    backgroundColor: "lightblue",
  },
  today: {
    border: "1px solid black",
    backgroundColor: "gray",
  },
};
type Props = { date: ?Date, daysToMark?: DaysToMark };
export default function Day({ date, daysToMark }: Props): any {
  if (date == null) {
    return null;
  }
  const day = date != null ? format(date, "d") : null;
  const holiday =
    date != null ? daysToMark?.find((d) => isEqual(date, d.date)) : null;
  const isHoliday = holiday != null;
  const isToday = isSameDay(date, new Date());
  const style = isToday
    ? { ...styles.container, ...styles.today }
    : isHoliday
    ? { ...styles.container, ...styles.holiday }
    : styles.container;

  const cell = <div style={style}>{day}</div>;

  return isHoliday ? (
    <Tooltip text={holiday?.description ?? ""}>{cell}</Tooltip>
  ) : (
    cell
  );
}
