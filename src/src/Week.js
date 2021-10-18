// @flow

import type { DaysToMark } from "./Year";

import Day from "./Day";

import * as React from "react";
type Props = {
  week: $ReadOnlyArray<Date>,
  daysToMark?: DaysToMark,
};
export default function Week({ week, ...props }: Props): React$Element<"tr"> {
  const days = week.map((day, i) => (
    <td key={day?.toString() ?? i}>
      <Day {...props} key={day?.toString() ?? i} date={day} />
    </td>
  ));
  return <tr>{days}</tr>;
}
