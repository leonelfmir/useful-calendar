// @flow
import * as React from "react";
import ReactTooltip from "react-tooltip";

type Props = {
  text: string,
  children: React.Node,
};
export default function Tooltip({ text, children }: Props): any {
  const tooltipProp = {
    "data-tip": text,
  };
  return (
    <>
      <div {...tooltipProp}>{children}</div>
      <ReactTooltip />
    </>
  );
}
