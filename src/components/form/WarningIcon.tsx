"use client";

import React from "react";
import SvgIcon, { SvgIconProps } from "../SvgIcon";

const WarningIcon: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      width="20"
      height="20"
      {...props}
      aria-hidden="true"
      viewBox="0 0 20 20"
    >
      <path
        fill="#C01343"
        fillRule="evenodd"
        d="M10 2.5a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15M1 10a9 9 0 1 1 18 0 9 9 0 0 1-18 0m10-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-.25 3.25a.75.75 0 0 0-1.5 0v5a.75.75 0 0 0 1.5 0z"
        clipRule="evenodd"
      ></path>
    </SvgIcon>
  );
};

export default WarningIcon;
