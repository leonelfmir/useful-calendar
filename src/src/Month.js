// @flow

import Week from "./Week";
import { addDays, format, getDay, getDaysInMonth, isSunday } from "date-fns";
import * as React from "react";

export type DaysToMark = {
  color: string,
  day: Date,
};

const styles = {
  container: {
    border: "1px solid black",
    width: "90%",
  },
};

type Props = {
  date: Date,
  daysToMark?: $ReadOnlyArray<DaysToMark>,
};

export default function Month({
  date,
  daysToMark,
}: Props): React$Element<"div"> {
  const weeks = getWeeks(date);

  return (
    <div>
      <table boder="1" style={styles.container}>
        <Title />
        <tbody>
          {weeks.map((week) => (
            <Week key={week.toString()} week={week} />
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
