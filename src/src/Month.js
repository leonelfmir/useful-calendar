// @flow

import Day from "./Day";

import * as React from "react";

export type DaysToMark = {
  color: string,
  day: Date,
};

const styles = {
  container: {
    border: "1px solid black",
  },
};

type Props = {
  id: number,
  daysToMark?: $ReadOnlyArray<DaysToMark>,
};

export default function Month({ id, daysToMark }: Props): React$Element<"div"> {
  const days = [
    "Monday",
    "Tuesday",
    "Wesnesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const weeks = [...Array(5).keys()];

  return (
    <div>
      <table boder="1" style={styles.container}>
        <thead>
          <tr>
            {days.map((d) => (
              <th key={d}>{d[0]}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {weeks.map((w) => (
            <Week key={w} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Week() {
  const days = [...Array(7).keys()].map((k) => (
    <td key={k}>
      <Day id={k} text={k.toString()} />
    </td>
  ));
  return <tr>{days}</tr>;
}
