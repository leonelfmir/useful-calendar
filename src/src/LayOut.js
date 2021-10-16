// @flow

import * as React from "react";
type Props = {
  children?: React.Node,
};
export default function LayOut({ children }: Props): React$Element<"div"> {
  return <div>{children}</div>;
}
