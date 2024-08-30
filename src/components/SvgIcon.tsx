"use client";

import useId from "@/hooks/useId";
import React from "react";

export type SvgIconProps = {
  /**
   * Control short-text description of the svg.
   */
  title?: string;

  /**
   * Control long-text description of the svg.
   */
  desc?: string;
} & React.SVGAttributes<SVGSVGElement>;

const SvgIcon: React.FC<SvgIconProps> = ({
  id: idFromProps,
  title,
  desc,
  width,
  height,
  children,
  ...props
}) => {
  const id = useId(idFromProps);
  const titleId = `${id}-title`;
  const descId = `${id}-desc`;
  const viewBox = `0 0 ${width} ${height}`;

  return (
    <svg id={id} width={width} height={height} viewBox={viewBox} {...props}>
      <title id={titleId}>{title}</title>

      {children}

      <desc id={descId}>{desc}</desc>
    </svg>
  );
};

export default SvgIcon;
