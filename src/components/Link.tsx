"use client";

import React from "react";
import { default as NextLink } from "next/link";
import Button from "./Button";

export type LinkProps = React.ComponentPropsWithoutRef<typeof NextLink>;

const Link = React.forwardRef<React.ElementRef<typeof NextLink>, LinkProps>(
  ({ className, ...props }, ref) => (
    <Button variant="link" size="auto" className={className} asChild>
      <NextLink ref={ref} {...props} />
    </Button>
  ),
);

Link.displayName = "Link";
export default Link;
