// @flow

import Month from "./Month";
import * as React from "react";

export default function Year({ year }: { year: number }): React$Element<"div"> {
  return (
    <div>
      <Month id={1} />
    </div>
  );
}
