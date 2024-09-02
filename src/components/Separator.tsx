"use client";

import React from "react";
import { Separator as PrimitiveSeparator } from "@radix-ui/react-separator";

import cn from "@/utils/cn";

const Separator = React.forwardRef<
  React.ElementRef<typeof PrimitiveSeparator>,
  Omit<React.ComponentPropsWithoutRef<typeof PrimitiveSeparator>, "asChild">
>(
  (
    {
      className,
      orientation = "horizontal",
      decorative = true,
      children,
      ...props
    },
    ref,
  ) => {
    const ContentWithChildren = (
      <div
        className={cn(
          "flex items-center [&_hr]:flex-grow [&_hr]:border-[#ddd]",
          orientation === "horizontal" && "[&_div]:mx-5",
          orientation === "vertical" &&
            "flex-col [&_div]:my-5 [&_hr]:border-l-[1px] [&_hr]:border-t-0",
        )}
      >
        <hr />
        <div>{children}</div>
        <hr />
      </div>
    );

    const ContentWithoutChildren = <hr className="border-[#ddd]" />;

    const Content =
      children === undefined ? ContentWithoutChildren : ContentWithChildren;

    return (
      <PrimitiveSeparator
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        asChild
        {...props}
      >
        {Content}
      </PrimitiveSeparator>
    );
  },
);
Separator.displayName = PrimitiveSeparator.displayName;

export default Separator;
