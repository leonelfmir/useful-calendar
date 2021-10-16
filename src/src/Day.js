// @flow

import * as React from "react";

export default function Cell({ id, text }: { id: number, text?: string }): any {
  return <div>{text}</div>;
}
