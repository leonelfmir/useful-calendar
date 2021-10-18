// @flow

import Week from "./Week";
import type { DaysToMark } from "./Year";
import { addDays, format, getDay, getDaysInMonth, isSunday } from "date-fns";
import * as React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    border: "1px solid black",
    marginTop: "5px",
  },
  title: {
    display: "flex",
    height: "20px",
    justifyContent: "center",
    textTransform: "uppercase",
  },
};

type Props = {
  date: Date,
  daysToMark?: DaysToMark,
};

export default function Month({ date, ...props }: Props): React$Element<"div"> {
  const weeks = getWeeks(date);

  return (
    <div style={styles.container}>
      <div style={styles.title}>{format(date, "MMMM")}</div>
      <table boder="1">
        <Title />
        <tbody>
          {weeks.map((week, i) => (
            <Week {...props} key={i} week={week} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Title() {
  const days = [
    "Monday",
    "Tuesday",
    "Wesnesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return (
    <thead>
      <tr>
        {days.map((d) => (
          <th key={d}>{d[0]}</th>
        ))}
      </tr>
    </thead>
  );
}

function getWeeks(date: Date) {
  const daysInMonth = getDaysInMonth(date);
  const weeks = [...Array(6)].map(() => [...Array(7)]);
  for (let i = 0, week = 0; i < daysInMonth; i++) {
    const currentDate = addDays(date, i);
    const lastDay = isSunday(currentDate);
    const dayPosition = lastDay ? 6 : getDay(currentDate) - 1;
    weeks[week][dayPosition] = currentDate;
    week += lastDay ? 1 : 0;
  }

  return weeks;
}
