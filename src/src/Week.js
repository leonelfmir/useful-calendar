// @flow

import Day from "./Day";

import { addDays, getMonth, getWeek } from "date-fns";
import * as React from "react";

export default function Week({
  week,
}: {
  week: $ReadOnlyArray<Date>,
}): React$Element<"tr"> {
  const days = week.map((day, i) => (
    <td key={day?.toString() ?? i}>
      <Day key={day?.toString() ?? i} date={day} />
    </td>
  ));
  return <tr>{days}</tr>;
}
