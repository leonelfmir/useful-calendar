// @flow

import { format } from "date-fns";
import * as React from "react";
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    height: "20px",
  },
};
export default function Day({ date }: { date: ?Date }): any {
  const day = date != null ? format(date, "d") : null;
  return <div style={styles.container}>{day}</div>;
}
